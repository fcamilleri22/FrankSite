define(["jquery","require", "app/cssHandler"],
function($, require, cssHandler){
    //return function(containerDiv){
    exports = {};

    var renderText = exports.renderText = function(requireJsPrefix, dir, fileName, containerDiv){
        return new Promise((resolve) => {
            require([`${requireJsPrefix}${dir}/${fileName}`], (text) => {
                resolve(containerDiv.html(text));
            });
        });
    };

    //requires that HTML and CSS have the same name
    exports.renderHtmlWithCss = function(name, containerDiv, isPermanent){
        isPermanent ? cssHandler.jqueryFreeLoad(name) : cssHandler.loadDynamic(name);
        console.log("YES FRANK YOU ACTUALLY FUCKING DID IT");
        return renderText("text!", "html", `${name}.html`, containerDiv);
    };

    return exports;

});
