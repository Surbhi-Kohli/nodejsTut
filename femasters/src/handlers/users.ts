import prisma from "../db";
import { hashPassword, createJWT, comparePassword } from "../modules/auth"; 

export const createNewUser = async(req,res,next)=>{
try{
  console.log(req.body)
    const hash = await hashPassword(req.body.password);
    const user = await prisma.user.create({
        data: {
          username: req.body.username,
          password: hash,
        },
      });

    const token = createJWT(user);
   return res.json({token:token});
}
catch(error){
    console.log(error);
    error.type= 'input'//we assume that user messed up
    next(error);
    //return res.json({message:'Failed to sign up'})
}
}

export const signIn = async(req,res,next)=>{
  try{
    const user  = await prisma.user.findUnique({
        where:{
            username:req.body.username 
        }
    })
    const isValid = await comparePassword(req.body.password, user.password)
    if(!isValid){
        res.status(401).json({message:'Not authorized'})
    }
    const token  = createJWT(user);
    res.json({token})
  }
  catch(error){
    next(error)
  }
}