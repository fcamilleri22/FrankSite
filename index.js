var nodeStatic = require("node-static");
var http = require("http");

var file = new nodeStatic.Server("./static", {cache:0});

var handlePath = (path, req, res) => {
    console.log(`Handling: ${path}`);
    if (path == "/") {
        path = "app/html/app.html";
    }
    console.log(`Serving: ${path}`)
    req.url = path;
    file.serve(req, res);
};

http.createServer((req, res) => {
    // console.log(`Serving ${req.url}`);
    handlePath (req.url, req, res);
}).listen(80, (err) => {if (err) throw err;});
