const { createClient } = require('redis');

const TelemetryDb = require('../models/Telemetry');
const redis = require('../config/redis');

class Cache {
  static async redisGet(key) {
    const client = await redis();
    const value = await client.get(key);
    try {
      return JSON.parse(value);
    } catch (error) {
      return null;
    }
  }

  static async redisSet(key, data) {
    const client = await redis();
    if (data && Object.keys(data).length) {
      await client.setEx(key, 3600, JSON.stringify(data));
    }
  }
  static async redisDel(key) {
    console.log('about to delete ', key, ' from cache');
    const client = await redis();
    await client.del(key);
  }
}

class Telemetry extends Cache {
  static telemetricKeyPrefix = 'telemetricKeyPrefix';

  static async findOne({ carIdentity }, { preCheck = true } = {}) {
    const cacheKeyName = `${this.telemetricKeyPrefix}:${carIdentity}`;

    if (preCheck) {
      const result = await this.redisGet(cacheKeyName);
      if (result) return result;
    }

    const data = await TelemetryDb.findOne({ carIdentity })
      .lean()
      .select('-__v');

    await this.redisSet(cacheKeyName, data);
    return data;
  }

  static async create(fields) {
    const data = await TelemetryDb.create({ ...fields });
    const cacheKeyName = `${this.telemetricKeyPrefix}:${data.carIdentity}`;
    await this.redisSet(cacheKeyName, data);
    return data;
  }

  static async deleteOne({ carIdentity }) {
    const result = await TelemetryDb.deleteOne({ carIdentity });
    const cacheKeyName = `${this.telemetricKeyPrefix}:${carIdentity}`;
    await this.redisDel(cacheKeyName);
    return result.deletedCount;
  }

  static async updateOne({ carIdentity }, fields) {
    const data = await TelemetryDb.updateOne({ carIdentity }, { ...fields });
    if (data.modifiedCount) this.findOne({ carIdentity }, { preCheck: false });
    return data.modifiedCount;
  }
}

module.exports = Telemetry;
