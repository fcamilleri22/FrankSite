define(["jquery", "app/renderer"],
function($, renderer){
    var htmlRoot = $("#rootWrapper");
    //htmlRoot.click( ()=> htmlRoot.append(" more tests"));
    renderer.renderText("text!","html","test.html", htmlRoot).then(function(){
        delayTest(5000).then(function(){
            console.log("First fire!");
            renderer.renderText("text!","html","test.html", $("#test2")).then(function(){
                delayTest(5000).then(function(){
                    console.log("WOOOOOO");
                    htmlRoot.append("woo");
                });
            });
        });
    });

    var delayTest = function(msDelay){
        var delayP = new Promise((resolve) => {
            setTimeout(resolve, msDelay);
        });
        return delayP;
    };

});
