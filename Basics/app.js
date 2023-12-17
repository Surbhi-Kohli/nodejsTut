// const http = require('http')

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('Home Page')
//   }
//  else if (req.url === '/about') {
//     // blocking code
//     for (let i = 0; i < 1000; i++) {
//       for (let j = 0; j < 1000; j++) {
//         console.log(`${i} ${j}`)
//       }
//     }
//     res.end('About Page')
//   }
//   else
//   res.end('Error Page')
// })

// server.listen(5001, () => {
//   console.log('Server listening on port : 5001....')
// })

const { Buffer } = require('node:buffer');

const buf = Buffer.from('hello world', 'utf8');
console.log(buf)
console.log(buf.toString('hex'));
// Prints: 68656c6c6f20776f726c64
console.log(buf.toString('base64'));
// Prints: aGVsbG8gd29ybGQ=

console.log(Buffer.from('fhqwhgads', 'utf8'));
// Prints: <Buffer 66 68 71 77 68 67 61 64 73>
console.log(Buffer.from('fhqwhgads', 'utf16le'));
// Prints: <Buffer 66 00 68 00 71 00 77 00 68 00 67 00 61 00 64 00 73 00>
