require('dotenv').config()
const express = require("express");
const jwt = require('jsonwebtoken');
const bcrypt  = require('bcrypt')

const app = express();
app.use(express.json())

//in real app , this should be db
const users=[]

/**
 * The server has a list of valid refresh tokens for each 
 * logged in user that are stored 
 * in some db or in some radis cache.
 */
let refreshTokens =[]
//in a real app, this route should not exist. which exposes users info
app.get("/users",(req,res)=>{
    res.json(users)
})

app.post("/users",async(req,res)=>{
    //we want to store the user with a hashed password
    //for that we use bcrypt.Also we use a salt.
    /**
     * Adding random salts to hashes refers to adding random data to the input of a hash function to guarantee a unique output, even when the inputs are the same. I
     * The purpose of salt is , in case u have mmultiple users with same password,there passwors are going to have 
     * same hash.In case a hacker is able to crack one password, they can crack every other password with same hash
     * 
     * A salt makes a hash function non-deterministic
     * So before hashing, a random salt is added to our password and then it is hashed.
     * You can salt a password by either appending or prepending the salt to it.
     * eg if password is "myNewM00Cow" and salt is "xxfindnem0", u can have salted password as "xxfindnem0myNewM00Cow" 
     * or "myNewM00Cowxxfindnem0"
     * A longer salt effectively increases the computational complexity of attacking passwords.
     */

    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password,salt)
        //bcrypt has another way of generating salt and hashing in one go
        // const hashedPassword = await bcrypt.hash(req.body.password,10)//10 = rounds of salt
        console.log(salt);
        console.log(hashedPassword);
        const user = { name : req.body.name, password: hashedPassword};
        users.push(user);
        res.status(201).send();
    }
    catch(error){
       res.status(500).send()
    }
})


app.post("/users/login",async(req,res)=>{
   
    //Authenticate user ....
   const user = users.find(user=> user.name === req.body.name);
   console.log(user);
   if(user == null){
     return res.status(400).send("Cannot find user");
   }
   try{
     if(await bcrypt.compare(req.body.password,user.password)){
      //If user is authenticated, now create jwt
        const userObj= { name:user.name }
        const idToken = generateIdToken(userObj);
        const refreshToken = jwt.sign(userObj,process.env.REFRESH_TOKEN_SECRET)
        refreshTokens.push(refreshToken)//add the newly created vaid refresh token in server's storage (db or redis)
        return res.json({message:"success", idToken:idToken, refreshToken:refreshToken}) 
     }
     else{
       return res.send("Not allowed");
     }
   
   }
   catch(error){
    console.log(error)
     return res.status(500).send();
   }
})


app.delete("/user/logout",(req,res)=>{

    //clear refresh token
    refreshTokens = refreshTokens.filter(token =>token != req.body.token);
    console.log(refreshTokens);
    return res.status(204).send("Deleted refresh token");

})

app.post("/token",(req,res)=>{
    const refreshToken = req.body.token;
    if(!refreshToken){
       return res.sendStatus(401);
    }
    if(!refreshTokens.includes(refreshToken)){
        return res.sendStatus(403);
    }
    jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(error,user)=>{
        //user comes from the payload of refresh token
        if(error){
            return res.sendStatus(403)
        }
        const idToken =  generateIdToken({name: user.name});
        return res.json({idToken})
    })
})

function generateIdToken(user){
  return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'15s'});
}



function authenticateToken(req,res,next){
   const authHeader = req.headers['authorization'];
   const [,token] =  authHeader && authHeader.split(' ');
   if(!token){
    return res.status(401).send({message:'Not authorized'});
   }
   jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(error,user)=>{
    if(error){
        return res.status(403).send({message:'Forbidden'});
    }
    req.user = user;
    next();
   })
}
app.listen(4000)