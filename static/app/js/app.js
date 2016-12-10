define(["jquery", "app/renderer", "app/util"],
function($, renderer, util){
    var root = $("#root");

    renderer.renderHtmlWithCss("appLanding", root, true).then(function(){

        var wrapTextInSkillStyleDiv = (text) => `<div class=skillInfo>${text}</div>`;

        var textButton = function(buttonId, infoString){
            var button = $(`#${buttonId}`);
            button.click(function(){
                if (button.hasClass("row1")){
                    $("#infoRow1").html(wrapTextInSkillStyleDiv(infoString));
                }
            });
        };

        textButton("linux-btn",`I've been using Linux-based operating systems and learning about them since I was in high school, starting with Fedora. At NYU,
        I spent an inordinate amount of time hacking together my own custom distributions based on ubuntu-minimal, Debian, and Arch Linux.
        Nowadays, I spend a lot of time in Amazon Linux based instances in AWS, and write code on machines preferrably running Ubuntu 16.04.`);

        textButton("git-btn",`Over the last few years, I've become an expert at using Git, a distributed version control system. At Mass Exchange, I am
        very often responsible for handling merges of new releases, figuring out where bugs were introduced and by whom, coordinating
        other developers branches using <a href="http://nvie.com/posts/a-successful-git-branching-model/">GitFlow,</a> an extremely
        good branching model that prevents myself and other developers from violating and polluting our master branches and sometimes
        repairing and resetting branches strategically when things do go awry.`);

        // $("#linux-btn").click(function(){
        //     var row = $("#infoRow1");
        //     row.html("");
        //     row.html(`<div class="skillInfo">
        //     I know things!!!
        //     </div>`);
        // });

    });

});
