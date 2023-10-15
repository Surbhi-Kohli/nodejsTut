# nodejsTut 
<img width="548" alt="Screenshot 2023-10-13 at 10 37 21 PM" src="https://github.com/Surbhi-Kohli/nodejsTut/assets/32058209/132b8081-65c1-4e20-8b04-6fbbde70d18a">
REPL and cli

## 1.Globals: No window in nodejs
__dirname:path to current directory
__filename:file name
require: function to use modules(Commonjs)
module:info about current module(file)
process:nfo about env where program is being executed
module is actually an object, on which we attach  our exports within its exports object
                ```Module {
            id: '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut/4-names.js',
            path: '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut',
            exports: {},
            filename: '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut/4-names.js',
            loaded: false,
            children: [],
            paths: [
                '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut/node_modules',
                '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/node_modules',
                '/Users/s0k06tn/SurbhiPersonal/Node/node_modules',
                '/Users/s0k06tn/SurbhiPersonal/node_modules',
                '/Users/s0k06tn/node_modules',
                '/Users/node_modules',
                '/node_modules'
            ]
            } ```


            ```
            Module {
  id: '.',
  path: '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut',
  exports: {},
  filename: '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut/3-modules.js',
  loaded: false,
  children: [
    Module {
      id: '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut/4-names.js',
      path: '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut',
      exports: [Object],
      filename: '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut/4-names.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    Module {
      id: '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut/5-utils.js',
      path: '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut',
      exports: [Function: sayHi],
      filename: '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut/5-utils.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    Module {
      id: '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut/6-alternative-flavor.js',
      path: '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut',
      exports: [Object],
      filename: '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut/6-alternative-flavor.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    Module {
      id: '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut/7-mind-grenade.js',
      path: '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut',
      exports: {},
      filename: '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut/7-mind-grenade.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  ],
  paths: [
    '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/nodejsTut/node_modules',
    '/Users/s0k06tn/SurbhiPersonal/Node/FreeCodeCampNode/node_modules',
    '/Users/s0k06tn/SurbhiPersonal/Node/node_modules',
    '/Users/s0k06tn/SurbhiPersonal/node_modules',
    '/Users/s0k06tn/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
            ```

  ## Built - in modules:OS, PATH, FS and HTTP          

  ## package.json: manifest file that stores important info about our project
  //1.npm unintsall
  //2.nuclear approach to uninstall:remove node module and package.lock, then remove entry of module from package.json and run npm i again
  //some dependencies in ur package will have nested dependencies which will also have versions and that module's version changes.It might create problems.So package.lock.json has version of all packages, even for nested dependencies and acts as a contract


  ## Steeams: are used to read and write sequentially.When we have to handle and manipulate streaming data eg a continuous source or a big file
  We have 4 different types of streams:
  Writeable : To write data sequentially,
  Readable : To read data sequentially ,
  Duplex : To both read and write data sequentially,
  Transform : Data can be modified while reading or writing 
  Streams extend eventEmitter class so we can use events like data.on on stream
  The concept of streams in computing usually describes the delivery of data in a steady, continuous flow. You can use streams for reading from or writing to a source continuously, thus eliminating the need to fit all the data in memory at once.

Using streams provides two major advantages. One is that you can use your memory efficiently since you do not have to load all the data into memory before you can begin processing. Another advantage is that using streams is time-efficient. You can start processing data almost immediately instead of waiting for the entire payload.
In case you read a file via stream, it gets read in chunks , as  below in 65kb chunks