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