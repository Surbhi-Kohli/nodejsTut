var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    // const text = fs.readFileSync('./content/big.txt','utf8');
    // res.end(text)//1.8mb of file gets transfered over the network at once,which is bad
     const fileStream = fs.createReadStream('./content/big.txt','utf8');
     fileStream.on('open',()=>{
     //instead of res.end , do as below:
        fileStream.pipe(res)//response object can be set as a writeable stream
    //in network tab, response headers, u can seetransfer-encoding as chunked
     })
     fileStream.on('error',(error)=>{
        console.log(error);
     })
})
.listen(5001);
