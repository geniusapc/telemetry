# Telemetric Data API Service

STAGING URL: [Telemetric](https://2sph6onbva.execute-api.us-east-1.amazonaws.com/).

API DOCUMENTATION: [Postman](https://documenter.getpostman.com/view/19091215/UVXgNdUD).



> List of Endpoints

- Create Telemetric Data.
- Update Telemetric Data.
- Get Telemetric Data
- Delete Telemetric Data

 ### [Click here](https://documenter.getpostman.com/view/19091215/UVXgNdUD) to see details of these endpoints.

---
## Technologies

- Javascript: Programming language.

- NodeJS: JavaScript runtime

- Express: Nodejs Framework

- Redis: In-memory data structure store for caching

- MongoDB: NoSQL Database

- Lambda: AWS serverless compute service

## Libraries

All third party libraries used on this website can be found in the `package.json`




## Application Setup

> Prerequisite:
- Install `Nodejs` 12.x
- `Redis` and `Mongodb` connection string


### Start App:

- Create a `.env` file on the project folder and add the variables found in `.env.example` 

-  ``` npm install ```

-  Navigate to the project root directory and run `npm start`


### Deployment:

> Prerequisite:
- Install `Docker` and `Serverless`

##### The App can be deployed to `AWS Lambda` by running the   `"serverless deploy"` 


