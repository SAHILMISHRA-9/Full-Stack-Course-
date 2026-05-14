// import http from 'node:http'

// > node index.js

// (node:26) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///home/projects/s09t4urjjb/index.js is not specified and it doesn't parse as CommonJS.
// Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
// To eliminate this warning, add "type": "module" to /home/projects/s09t4urjjb/package.json.
// (Use `node --trace-warnings ...` to show where the warning was created)

const http = require('http')

console.log(__dirname)
console.log(__filename)
// These are global variable in normal java script

// in modular javascript in which we write "type":"module" in package.json I can;t use it
// since they are not global variable in modular javascript

// In modular we use it like this
console.log(import.meta.dirname)
console.log(import.meta.filename)