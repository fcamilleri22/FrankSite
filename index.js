var nodeStatic = require("node-static");
var http = require("http");

var file = new nodeStatic.Server("./static", {cache:0});


var cleanPath = (path) => {
    if (path == "/") {
        return "app/html/app.html";
    }
    var splitPath = path.split("/").slice(1);
    return splitPath[0] == "static" ? splitPath.slice(1).join("/") : path;
};

var handlePath = (path, req, res) => {
    //console.log(path.substr(1).indexOf("/"));
    console.log(`----------`);
    console.log(`Handling: ${path}`);
    path = cleanPath(path);
    console.log(`Serving: ${path}`)
    req.url = path;
    file.serve(req, res);
};

http.createServer((req, res) => {
    // console.log(`Serving ${req.url}`);
    handlePath(req.url, req, res);
}).listen(80, (err) => {if (err) throw err;});
