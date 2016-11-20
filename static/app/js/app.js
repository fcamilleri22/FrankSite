define(["jquery"],
function($){
    var htmlRoot = $("#rootWrapper")
    htmlRoot.click(()=> htmlRoot.append(" more tests"));
});
