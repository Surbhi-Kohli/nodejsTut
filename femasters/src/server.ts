import express from 'express';
import router from './router';
import morgan from 'morgan'
import cors from 'cors';
import { protect } from "./modules/auth";
import { createNewUser, signIn } from './handlers/users';
console.log(router)
const app = express();
export let myVar =10;
export const updateVar = ()=>{
   myVar+=10;
   console.log(myVar);
}
app.use(cors())//without any arg, this api is accessible from anywhere
//via cors, u can block on IP level,etc
app.use(morgan('dev'))//global middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))//allows client to add things like a query string or params
//consider u have google.com?search=1&thing=2 , then urlecoded will convert query string to object {search:1,thing:2},
//so that u can do query.search, query.thing

//How to create a middleware that can itself take options like morgan or urlencoded does: create a function that returns a middleware
const customLogger = (message) =>(req,res,next)=>{

   console.log(`Hello from ${message}`);
   next()
}
app.use(customLogger("custom logger !!!!"))

//There is a special routing method, app.all(), used to load middleware functions at a path for
// all HTTP request methods. For example, the following handler is executed for requests to the 
//route “/secret” whether using GET, POST, PUT, DELETE, or any other HTTP request method supported 
//in the http module.

app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})
app.use((req,res,next)=>{
   req.shh_secret = 'doggy';
   console.log("middleware is registered to app before the route ")
   //instead of passing on the control by calling next, u can terminate the flow  via middleware as below:
   //  return res.status(401).send("Nope")
    
   next()
})

app.use('/api',protect,router);//the path of our apis would be /api/product or /api/update, etc
//use function allows u to apply some type of global option/config

app.post("/user",createNewUser);
app.post("/signin",signIn)

// app.get("/",(req,res,next)=>{
//    //next();//question: what would happen if u call next() over here 
//    res.status(200).json({message:"hello"});
//    res.end();
// })

app.get("/",(req,res,next)=>{
   setTimeout(()=>{
     next(new Error("hello asyn error"))//will be handled in error handler
   },1)
})


//error handler should be at the last , so that it can handle errors that occur in any route
app.use((error,req,res,next)=>{
   // console.log(error);
   // res.json({message:"Oops there was an error"})
   if(error.type === 'auth'){
      res.status(401).json({message:'unauthorized'})
   }
   else if(error.type === 'input'){
     res.status(400).json({message:'invalid input'})
   }
   else{
      res.status(500).json({message:`oops, that's on us`})
   }
})

export default app;