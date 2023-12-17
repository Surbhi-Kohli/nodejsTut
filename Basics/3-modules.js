//Commonjs,every file is a module(by default)
//Modules - Encapsulated code (only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");

const data = require("./6-alternative-flavor");
require("./7-mind-grenade");//this whole module gets imported,which has a function call 
console.log(module);
sayHi('susan')

sayHi(names.john)
