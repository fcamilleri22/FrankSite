define([],
function(){
    exports = {};

    exports.delay = function(msDelay){
        return new Promise((resolve) => setTimeout(resolve, msDelay));
    };

    exports.noop = function(){};

    return exports;
});
