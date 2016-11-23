define(["jquery"],
function($){
    var exports = {};
    var styleSheets = {"dynamic": {}}; //all others are static, meaning they persist through loads

    var head = $("head");

    exports.load = function(name){
        if (!styleSheets[name]){
            styleSheets[name] = $("<link>").attr({
                type: "text/css",
                rel: "stylesheet",
                href: "/static/app/css/" + name + ".css"
            }).appendTo(head);
        }
    };

    exports.loadDynamic = function(name) {
		if (!styleSheets.dynamic[name]){
			styleSheets.dynamic[name] = $("<link>").attr({
                type: "text/css",
                rel: "stylesheet",
                href: "/static/app/css/" + name + ".css"
			}).appendTo(head);
		}
	};

    exports.unload = function(name) {
        styleSheets[name].remove();
    };

    exports.unloadDynamic = function(name) {
        styleSheets.dynamic[name].remove();
    };

    exports.unloadAllDynamic = function() {
        for(var name in styleSheets.dynamic)
        {
            if(styleSheets.dynamic.hasOwnProperty(name))
                styleSheets.dynamic[name].remove();
        }

        styleSheets.dynamic = {};
    };

    return exports;

});