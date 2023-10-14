const { readFile, writeFile } = require('fs');
console.log("start async 1 :logs 1st");
readFile('./content/first.txt','utf8',(error,result)=>{
  if(error){
    console.log(error);
    return;
  }
  console.log(result);
  const first = result;
  readFile('./content/second.txt','utf8',(error2,result2)=>{
    if(error2){
        console.log("here")
        console.log(error2);
        return;
      }
      console.log(result2);
      const second = result2;
      writeFile('./content/result-async.txt',`Async result is ${first} , ${second}`,(error,result)=>{
         if(error){
         console.log(error);
         return;

         }
         console.log(result);//undefined
         console.log("finished the process :logs 3rd");
      })
  })
})
/**
 * All three of fs.readFile(), fs.readFileSync() and fsPromises.
 * readFile() read the full content of the
 * file in memory before returning the data.This means that big files
 * are going to have a major impact on your memory consumption and speed of execution of the program.
 * In this case, a better option is to read the file content using streams.
 */


console.log("start the next task :logs 2nd")