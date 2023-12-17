import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


export const comparePassword = (password, hash) =>{
  return bcrypt.compare(password,hash)
}

export const hashPassword = password=> {
  return bcrypt.hash(password,5)//salt = 5 
}

//jwt.sign is converting an object to string
export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req,res,next) => {
const bearer = req.headers.authorization;
//Authn patterns:api keys, basic auth, bearer etc .Bearer: someone having an ability to send up a token
//That token can be any type of token:JWT,API key , access token
 
if(!bearer)
{
   return res.status(401).send("Unauthorized")
}
//validating bearer token
const [,token] = bearer.split(" ")  // your token would be like `Bearer jdncjnjdndfvkfvnkfnv......`
if(!token){
    return res.status(401).send("Unauthorized")
}
try{
    const payload =  jwt.verify(token,process.env.JWT_SECRET);//this will throw error if the verification fails,but we dont want our
    //server to go down, so we put it in try, catch
    req.user = payload;
    next()
}
catch(error){
   console.log(error);
   return res.status(401).send("Unauthorized");
}

}