//fs async = non-blocking,fs sync = blocking

const { readFileSync, writeFileSync, write } = require('fs');
//we need to provide path and encoding 

try{
 const first = readFileSync('./content/first.txt','utf8');
 const second = readFileSync('./content/second.txt','utf8');
console.log(first);
console.log(second);

writeFileSync('./content/result-sync.txt',
`Here is the result : ${first} , ${second}`);
/**
 * writeFileSync will create the result-sync.txt file if it does not exist.
 * And if it does exist, its content will be replaced by whatever is passed in writeFileSync
 */
//If u want to append to existing file:you can pass flags
writeFileSync('./content/result-sync.txt',
`Here is the appended result : Hi append :) `,{ flag :'a'});
/**
 * r+	This flag opens the file for reading and writing (file not created if not existing)
 * w+	This flag opens the file for reading and writing and it also positions the stream at the beginning of the file (file gets created if not exiting)
 * a	This flag opens the file for writing and it also positions the stream at the end of the file (file gets created if not exiting)
 * a+	This flag opens the file for reading and writing and it also positions the stream at the end of the file (file gets created if not exiting)
 */


}
catch(error){
    console.log(error);
}

/**
 * All three of fs.readFile(), fs.readFileSync() and fsPromises.readFile()
 *  read the full content of the file in memory before 
 * returning the data.This means that big files are going to 
 * have a major impact on your memory consumption and 
 * speed of execution of the program.
 * In this case, a better option is to read the file content
 *  using streams.
 */
