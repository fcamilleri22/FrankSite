var nodeStatic = require("node-static");
var http = require("http");

var file = new nodeStatic.Server("./static", {cache:0});

http.createServer((req, res) => {
    console.log(`Serving ${req.url}`);
    file.serve(req, res);
}).listen(80, (err) => {if (err) throw err;});
