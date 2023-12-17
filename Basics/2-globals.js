// ## Globals: No window in nodejs
// __dirname:path to current directory
// __filename:file name
// require: function to use modules(Commonjs)
// module:info about current module(file)
// process:nfo about env where program is being executed

console.log(__dirname);

setInterval(()=>{
    console.log("hello nodejs")
},1000)
