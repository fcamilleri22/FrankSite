define(["app/components/DisplayGrid", "app/components/PageTitle", "app/components/ParagraphSection",
    "app/util/HTMLFragmentBuilder"],
function(DisplayGrid, PageTitle, ParagraphSection, h){

    document.body.style.margin = "0px";
    document.body.style["font-size"] = "20px";
    document.body.style["background-color"] = "#2A2A2A";

    const items = [
        {
            "key":"Linux",
            "value":`I've been using Linux-based operating systems and learning about them since I was in high school, starting with Fedora. At NYU,
            I spent an inordinate amount of time hacking together my own custom distributions based on ubuntu-minimal, Debian, and Arch Linux.
            Nowadays, I spend a lot of time in Amazon Linux based instances in AWS, and write code on machines preferrably running Ubuntu 16.04.`
        },{
            "key":"Git",
            "value":`Over the last few years, I've become an expert at using Git, a distributed version control system. At Mass Exchange, I am
            very often responsible for handling merges of new releases, figuring out where bugs were introduced and by whom, coordinating
            other developers branches using <a href="http://nvie.com/posts/a-successful-git-branching-model/">GitFlow,</a> an extremely
            good branching model that prevents myself and other developers from violating and polluting our master branches, and sometimes
            even repairing and resetting branches surgically when things do go awry -- and they always eventually do go awry.`
        },{
            "key":"Javascript / NodeJS",
            "value":"Content3"
        },{
            "key":"Responsive HTML / CSS",
            "value":"Content4"
        },{
            "key":"Java",
            "value":"Content5"
        },{
            "key":"Spring",
            "value":"Content6"
        },{
            "key":"Hibernate",
            "value":"Content7"
        },{
            "key":"bash / zsh",
            "value":"Content8"
        },{
            "key":"Automated Testing",
            "value":"Content9"
        },{
            "key":"Continuous Integration",
            "value":"Content10"
        },{
            "key":"Amazon Web Services",
            "value":"Content11"
        },{
            "key":"MySQL",
            "value":"Content12"
        },{
            "key":"NoSQL",
            "value":"Content13"
        },{
            "key":"Distributed Systems",
            "value":"Content14"
        },{
            "key":"Computer Hardware",
            "value":"Content15"
        },{
            "key":"TCP / IP / DNS",
            "value":"Content16"
        },{
            "key":"Terraform",
            "value":"Content17"
        },{
            "key":"Excel Automation",
            "value":"Content18"
        },{
            "key":"SOAP / REST / RPC APIs",
            "value":"Content19"
        },{
            "key":"Build Automation",
            "value":"Content20"
        },{
            "key":"Package Management",
            "value":"Content21"
        },{
            "key":"Monitoring / Telemetry",
            "value":"Content21"
        }
    ];

    const titleContainer = h.div({"style":{"background-color":"#222222"}});
    const paragraphContainer = h.div({"style":{"background-color":"#2A2A2A"}});
    const gridContainer = h.div({"style":{"background-color":"#222222"}});
    const footerContainer = h.div({"style":{"background-color":"#2A2A2A"}});
    const title = new PageTitle("Frank Camilleri","Full Stack Web Engineer, DevOps Professional", titleContainer);
    const paragraph = new ParagraphSection(paragraphContainer);
    const grid = new DisplayGrid(items, gridContainer);
    paragraph.addContent(
        `I am an <b><em>enthusiastic, passionate, and diligent</b></em> engineer with a <u><b><em>proven</u></b></em>
        ability to bring people together, orchestrate work for an <b><em>optimal return on your investment</b></em>,
        and ultimately, get your <b><em>ideas to market.</b></em>`,
        "Don't just bring in any 'computer guy' from the backwoods of the internet..."
    );
    paragraph.addContent(
        `I prefer to solve technology problems from a <b><em>holistic and generalized</b></em> point of view, whether its a shoddily
        performing back end/API, a sluggish front end experience, a discombobulated database schema, lousy hardware/cloud
        configurations, <b><em>or a complete lack of any technology stack whatsoever.</b></em>`
    );
    paragraph.addContent(
        `With my ability to <b><em>organize and automate</b></em> vital development processes such as deployment and testing,
        I can even help <b><em>clear up costly bottlenecks</b></em> in your team's operating procedures that <b><em>hinder your
        organization's ability</b></em> to release new functionality quickly, preventing your team from resorting
        to risky heroics, technical debt inducing hacks, and demoralizing long hours <b><em>to accomplish your business goals.</b></em></p>`
    );
    Promise.all([title.render(), grid.render(), paragraph.render()]).then(()=>{
        let frag = document.createDocumentFragment();
        frag.appendChild(titleContainer);
        frag.appendChild(paragraphContainer);
        frag.appendChild(footerContainer);
        frag.appendChild(gridContainer);
        document.body.appendChild(frag);
    });
});
