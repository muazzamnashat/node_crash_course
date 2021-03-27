// import path module, core module so dont need to include file path
const path = require("path");

// Base file name
console.log("Base file name", path.basename(__filename));

// directory name
console.log("directory name", path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// create path object
console.log("path object", path.parse(__filename));

// concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
