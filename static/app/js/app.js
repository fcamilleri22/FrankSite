define(["app/components/DisplayGrid", "app/components/PageTitle", "app/util/HTMLFragmentBuilder"],
function(DisplayGrid, PageTitle, h){

    document.body.style.margin = "0px";

    const items = [
        {
            "key":"Linux",
            "value":`I've been using Linux-based operating systems and learning about them since I was in high school, starting with Fedora. At NYU,
            I spent an inordinate amount of time hacking together my own custom distributions based on ubuntu-minimal, Debian, and Arch Linux.
            Nowadays, I spend a lot of time in Amazon Linux based instances in AWS, and write code on machines preferrably running Ubuntu 16.04.`
        },{
            "key":"Title2",
            "value":"Content2"
        },{
            "key":"Title3",
            "value":"Content3"
        },{
            "key":"Title4",
            "value":"Content4"
        },{
            "key":"Title5",
            "value":"Content5"
        },{
            "key":"Title6",
            "value":"Content6"
        },{
            "key":"Title7",
            "value":"Content7"
        },{
            "key":"Title8",
            "value":"Content8"
        },{
            "key":"Title9",
            "value":"Content9"
        },{
            "key":"Title10",
            "value":"Content10"
        }
    ];

    const titleContainer = h.div({"style":{"background-color":"#444444"}});
    const gridContainer = h.div({"style":{"background-color":"#666666"}});
    const title = new PageTitle("Frank Camilleri","Full Stack Web Engineer, DevOps Professional", titleContainer);
    const grid = new DisplayGrid(items, gridContainer);
    Promise.all([title.render(), grid.render()]).then(()=>{
        let frag = document.createDocumentFragment();
        frag.appendChild(titleContainer);
        frag.appendChild(gridContainer);
        document.body.appendChild(frag);
    });
    // document.body.appendChild(grid.prop1);


    //renderer.renderPage("appLanding", document.body, true).then(function(){
    //     // var wrapTextInSkillStyleDiv = (text) => `<div class=skillInfo>${text}</div>`;
    //     //
    //     // var textButton = function(buttonId, infoString){
    //     //     var button = $(`#${buttonId}`);
    //     //     button.click(function(){
    //     //         if (button.hasClass("row1")){
    //     //             $("#infoRow1").html(wrapTextInSkillStyleDiv(infoString));
    //     //         }
    //     //     });
    //     // };
    //
    //     //
    //     // textButton("git-btn",`Over the last few years, I've become an expert at using Git, a distributed version control system. At Mass Exchange, I am
    //     // very often responsible for handling merges of new releases, figuring out where bugs were introduced and by whom, coordinating
    //     // other developers branches using <a href="http://nvie.com/posts/a-successful-git-branching-model/">GitFlow,</a> an extremely
    //     // good branching model that prevents myself and other developers from violating and polluting our master branches, and sometimes
    //     // even repairing and resetting branches surgically when things do go awry -- and they always eventually do go awry.`);
    //
    // });

});
