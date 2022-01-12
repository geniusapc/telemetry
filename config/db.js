const mongoose = require("mongoose");
const { MONGODB_URI}  = require("./keys")

module.exports = async () => {
  await mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("connected to db"))
    .catch((e) => console.log(e));
};
