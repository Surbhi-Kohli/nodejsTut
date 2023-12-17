setTimeout(()=>{
 throw new error("oopss");
},300)

process.on('uncaughtException',()=>{

})//event handler

process.on('unhandledRejection',()=>{//async error in a promise
    
})