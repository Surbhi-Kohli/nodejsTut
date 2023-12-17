const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page')
  }
 else if (req.url === '/about') {
    // blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`)
      }
    }
    //Consider that there are multiple requests coming to the server and because of the
    //About page request, the other request will also get delayed.in a scenario where server
    //receives an About request, any other request gets delayed till about request is fulfilled 
    //because the server is blocked by the about's blocking code
    res.end('About Page')
  }
  else
  res.end('Error Page')
})

server.listen(5001, () => {
  console.log('Server listening on port : 5001....')
})
