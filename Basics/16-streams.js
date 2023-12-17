const { createReadStream } = require('fs')

// default stream size(buffer size):  64kb, that means,file will be loaded in chunks of 64kb
// last buffer - remainder
// highWaterMark - control size of buffer
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')//by default we just pass file path

stream.on('data', (result) => {//data event
  console.log(result)
})
stream.on('error', (err) => console.log(err))
