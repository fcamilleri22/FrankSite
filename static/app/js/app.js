define(["jquery", "app/renderer", "app/util"],
function($, renderer, util){
    var root = $("#root");
    //htmlRoot.click( ()=> htmlRoot.append(" more tests"));
    renderer.renderHtmlWithCss("appLanding", root, true);

});
