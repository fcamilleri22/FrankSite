define(["require", "app/cssHandler"],
function(require, cssHandler){
    //return function(containerDiv){
    exports = {};

    var renderText = exports.renderText = function(requireJsPrefix, dir, fileName, documentNode){
        return new Promise((resolve) => {
            require([`${requireJsPrefix}${dir}/${fileName}`], (text) => {
                resolve(documentNode.innerHTML = text);
            });
        });
    };

    //requires that HTML and CSS have the same name
    exports.renderPage = function(name, documentNode, isPermanent){
        isPermanent ? cssHandler.load(name) : cssHandler.load(name, true);
        return renderText("text!", "html", `${name}.html`, documentNode);
    };

    return exports;

});
