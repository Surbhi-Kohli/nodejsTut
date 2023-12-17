const http = require("http");
const server = http.createServer((req,res)=>{
    console.log(req);
    /**
     * You have access to req's IP address, access to when the reqiest came,etc
     */
    console.log(res);
    /**
     * This is majorly used for just responding the request
     */
   if(req.method== 'GET' && req.url == '/'){
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "hello" }));
      res.end()
      return;
   }
   res.writeHead(404, { "Content-Type": "application/json" });
   res.end(JSON.stringify({ message: "nope" }));
})
server.listen(3001,()=>{
    console.log("server listening on port 3001")
})
//This is not good approach, if u are building some serverless cdn, then maybe u can

//How do the req amd res get passed to the callback: That is the job of http module imported from node
/**
 * This is like an event driven architecture: when u make a request to a server, its like an event,
 * which when triggered , runs the callback.The response object is scoped to the incoming request, such that 
 * the response is tied to its own request, when a server might receive many requests. 
 */