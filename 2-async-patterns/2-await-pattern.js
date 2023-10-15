const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)//you wont need to write getText to promisify readFile
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')//here u can use readFilePromis in case u dont require the promises version at top
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()


//Promisifying the readFile: here still we have problem regarding calling for 2nd file 
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))

// const start2 = async()=>{
//     try{
//             const first = await getText('./content/first.txt');
//     console.log(first);
//     const second = await getText('./content/second.txt');
//     console.log(second)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// start2()