import { validationResult } from "express-validator";
export const handleInputErrors = (req,res,next)=>{
  console.log("in handleInputErrors middleware")
    const errors = validationResult(req);
    console.log(errors);
    console.log(errors.isEmpty())
    if (!errors.isEmpty()) {
        res.status(400);
       return res.json({ errors: errors.array() });//convert all errors to an array
      }
      else{
        next();
      }
}