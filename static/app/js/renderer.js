define(["jquery","require"],
function($, require){
    //return function(containerDiv){
    exports = {};

    exports.renderText = function(requireJsPrefix, dir, fileName, containerDiv){
        return new Promise((resolve) => {
            require([`${requireJsPrefix}${dir}/${fileName}`], (text) => {
                resolve(containerDiv.html(text).contents());
            });
        });
    };

    return exports;

});
