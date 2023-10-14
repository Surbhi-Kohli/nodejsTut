const path=require('path');

console.log(path.sep);//path separator on my file system(platform specific separator)
/**
 * Every file in the system has a path. On Linux and macOS, a path might look like: /users/joe/file.txt while Windows computers are different,
 *  and have a structure such as: C:\users\joe\file.txt
 * So on windows, the path separator would be '\' ,while on macos and linux, it is '/'
 */
const filePath=path.join('/content/','/subfolder/','/test.txt');
console.log(filePath);//-> /content/subfolder/test.txt
//normalized path, extra trailing / are removed and path itself adds those where required

const name = 'joe';
console.log(path.join('/', 'users', name, 'notes.txt')); // '/users/joe/notes.txt'
//joins a seq of path segments using the platform specific separator and returns a
//normalized resulting path
//But this function does not check if the path actually exists on the system


/***********************************************/
// Given a path, you can extract information out of it using those methods:

// dirname: gets the parent folder of a file
// basename: gets the filename part
// extname: gets the file extension


const base = path.basename(filePath);

console.log(base);//test.txt
console.log(path.dirname(filePath));//  /content/subfolder
console.log(path.extname(filePath));// .txt

/**
 * You can get the absolute path calculation of a relative path using path.resolve():
 * It accepts sequence of paths or path segments and resolves it into absolute path
 */

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute)///Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut/content/subfolder/test.txt

/**
 * Why would we want an absolute path: Because our app will run in different environments,so path to some
 * resource is going to be different in my local than in eg heroku
 */
console.log(path.resolve('joe.txt')); // '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut/joe.txt' 
/*In this case Node.js will simply append /joe.txt to the 
current working directory.
But If you specify a second parameter folder, resolve will 
use the first as a base for the second:*/
console.log(path.resolve('tmp', 'joe.txt')); // /Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut/tmp/joe.txt
/**If the first parameter starts with a slash, that means it's an absolute path: */
console.log(path.resolve('/etc', 'joe.txt'));///etc/joe.txt


/*path.normalize() is another useful function, that will try and calculate the actual path, when it contains relative
 specifiers like . or .., or double slashes:
 path.normalize('/users/joe/..//test.txt'); 
 */

 /***IMPORTANT:
  * 
  * Neither resolve nor normalize will check if the path exists.
  *  They just calculate a path based on the information they got.
  */