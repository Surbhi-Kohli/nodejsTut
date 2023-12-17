import prisma from "../db"

//Get all products 
export const getProducts = async(req,res,next) =>{
  try{
  const user = await prisma.user.findUnique({
    where:{
        id:req.user.id
    },
    include:{
        products:true
    //  or    products:{
    //      include:{
    //         name:true
    //      }
    //    }
    }
  })
  res.json({data:user.products,errors:[]})
}
catch(error){
  next(error)//to be handled by our error handler
}
}

//Get one product that belongs to the signed in user and has the id
export const getOneProduct = async (req,res,next) => {

  try{
  const id = req.params.id;
  //we want to scope the product to the signed in user
  //use findFirst in case u dont have indexing in ur schema
  const product =  await prisma.product.findUnique({
    where:{
        id,
        belongsToId:req.user.id
    }
  })
  res.json({data:product})
}
catch(error){
  next(error);
}
//findFirst vs findUnique  https://dev.to/puppo/series/15827
}

//Create product
export const createProduct = async(req,res,next) => {
     try{
    //prisma.upsert: insert new if not existing or update existing
    const product = await prisma.product.create({
        data:{
            name:req.body.name,
            belongsToId:req.user.id
        }
    })
    res.json({data:product})
  }
  catch(error){
    
    next(error)
  }
}

//update a product
export const updateProduct = async(req,res,next)=>{
 
  try{
    //if u do updateMany, u get back an object describing all the operations u did
    const updated = await prisma.product.update({
        where :{
          id:req.params.id,
          belongsToId:req.user.id  //u can update product only which belongs to u
        },
        data:{
         name: req.body.name
        }
    })
    res.json({data:updated})//send this updated row as a response, or else the client will have to make a request again
  }
  catch(error){
    next(error)
  }
}

export const deleteProduct = async(req,res,next) =>{
    try{
    const del = await prisma.product.delete({
        where:{
           id_belongsToId:{//or u can have where as mentioned for updated
            id:req.params.id,
            belongsToId:req.user.id
           }
        }
    })
      if(del)
        res.json({data:del})
    else
       res.json({message:"Product does not exist"})
}
catch(error){
  next(error)
   // res.json({message:"Product does not exist"})
}
    }
