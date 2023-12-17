import merge from "lodash.merge";

// make sure NODE_ENV is set
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const stage = process.env.STAGE || "local";
//difference between env and stage: WHat if u wanna run a production version of ur app localy
//in that case, stage would be local while the env would be production

let envConfig;


// dynamically require each config depending on the stage we're in
if (stage === "production") {
  envConfig = require("./prod").default;//interop between es6 and non es6 modules,we do .default
} else if (stage === "testing") {
  envConfig = require("./testing").default;
} else {
  envConfig = require("./local").default;
}

const defaultConfig = {
  stage,
  dbUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT,
  logging: false,
};

//in final config , some keys if they repeat in envConfig will overrite the defaultConfigs
//thats what we want .We want things to be updated as per the env
export default merge(defaultConfig, envConfig);