import prisma from "../db";


//Get all updates
export const getUpdates = async(req,res,next)=>{

  try{
  const products = await prisma.product.findMany({
    where:{
        belongsToId:req.user.id
    },
    include:{
        updates:true
    }
  })
  const updates = products.reduce((allUpdates,product)=>{
     return  [...allUpdates,...product.updates]//avoid putting things in memory..this is inefficient.Better in real life, update schema
  },[])
   res.json({data:updates})
  }
  catch(error){
   next(error);
  }

}
export const getOneUpdate =async(req,res,next)=>{
    try{
    const update = await  prisma.update.findUnique({
        where:{
           id:req.params.id
        }
    })
    res.json({data:update})
  }
  catch(error){
    next(error)
  }
}

export const createUpdate = async(req,res,next)=>{

  try{
//we need to ensure that the productid belongs to u, for which u want to have an update
  const product = await prisma.product.findUnique({
    where:{
        id:req.body.productId
    }
  })
  if(!product){
   return res.json({message:"no product"});
  }
  const update = await prisma.update.create({
   /// data:req.body
   data:{
    title:req.body.title,
    body:req.body.body,
    product:{ connect:{id:product.id}}
   }
  })
  return res.json({data:update})
}
catch(error){
  next(error);
}
}

export const updateUpdate = async(req,res)=>{
  const products = await prisma.product.findMany({
    where:{
        belongsToId:req.user.id,
    },
    include:{
        updates:true
    }
  })// not an optimal way
  const updates = products.reduce((allUpdates,product)=>{
    return  [...allUpdates,...product.updates]//avoid putting things in memory..this is inefficient.Better in real life, update schema
 },[])
 const match = updates.find(update=> update.id === req.params.id);
 if(!match){
   return res.json({message:"nope"})
 }

 const updatedUpdate = prisma.update.update({
    where :{
        id:req.params.id
    },
    data:req.body
 })
 return res.json({data:updatedUpdate})
}

export const deleteUpdate = async(req,res)=>{
    const products = await prisma.product.findMany({
        where:{
            belongsToId:req.user.id,
        },
        include:{
            updates:true
        }
      })// not an optimal way
      const updates = products.reduce((allUpdates,product)=>{
        return  [...allUpdates,...product.updates]//avoid putting things in memory..this is inefficient.Better in real life, update schema
     },[])
     const match = updates.find(update=> update.id === req.params.id);
     if(!match){
       return res.json({message:"nope"})
     }
    
     const deletedUpdate = prisma.update.delete({
        where :{
            id:req.params.id
        }
     })
     return res.json({data:deletedUpdate})
}