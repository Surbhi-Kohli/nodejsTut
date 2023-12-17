import app, {myVar,updateVar} from "./server"
import config from  "./config"
import * as dotenv from 'dotenv';//by default, anything in our .env file is not loaded up in our environment
//We have to load it up on our own whenever the server starts.Prisma had code underneath that did that.But JWT_Sectret wil
//not get loaded up in our env
dotenv.config()//loads all the variables in the .env file here to use 
console.log(myVar+" older");
updateVar();
console.log(myVar +" new")
/**
 * The reason we load .env here is because, this is an entry point of our server, so want these envs to be loaded up
 * immediately,so that the rest of the app can use them
 */
app.listen(config.port,()=>{
    //you can set the env or stage for the server in cli like NODE_ENV=production npm run dev, or
    // STAGE=production npm run dev, accordingly config  changes and in tern the port changes
    console.log(`listening on port ${config.port}`)
})
