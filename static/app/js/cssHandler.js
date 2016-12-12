define([],
function(){
    var exports = {};
    var styleSheets = {};
    var dynStyleSheets = {};

    var head = document.getElementsByTagName("head")[0];

    var buildCSSLink = function(name, isDynamic){
        var sheetElement = document.createElement("link");
        sheetElement.setAttribute("type", "text/css");
        sheetElement.setAttribute("rel", "stylesheet");
        sheetElement.setAttribute("href", `/static/app/css/${name}.css`);
        if (isDynamic) sheetElement.setAttribute("class", "dynamic");
        return sheetElement;
    };

    exports.load = function(name, isDynamic){
        var sheetMap = isDynamic ? dynStyleSheets : styleSheets;
        if (!sheetMap[name]){
            var sheetNode = buildCSSLink(name, isDynamic);
            sheetMap[name] = sheetNode;
            head.appendChild(sheetNode);
        }
    };

    exports.unload = function(name) {
        styleSheets[name].remove();
        delete styleSheets[name];
    };

    exports.unloadDynamic = function(name) {
        dynStyleSheets[name].remove();
        delete dynStyleSheets[name];
    };

    exports.unloadAllDynamic = function() {
        Object.keys(dynStyleSheets).forEach((name) => {
            dynStyleSheets[name].remove();
            delete dynStyleSheets[name];
        });
    };

    return exports;

});
