define(["app/components/DisplayGrid"],
(DisplayGrid) => {
    return class HomePageDisplayGrid extends DisplayGrid {
        constructor(gridContainer) {
            let componentStyles = {}; //styles needed for grid object
            componentStyles.rowStyles = {};
            componentStyles.rowStyles.componentStyle = {};
            componentStyles.componentStyle = {
                padding:"1em 0em",
                width: "90%",
                margin:"auto"
            };
            componentStyles.rowStyles.buttonStyles = {
                componentStyle:{
                    "text-align":"center",
                    margin:"1em auto",
                    padding:"10px",
                    border:"3px solid #0088cc",
                    "color":"#33aadd",
                    "background-color": "#333333",
                    width: "11em",
                    "font-family": "Lato",
                    "text-shadow": "1px 1px 2px rgba(0,0,0,0.6)",
                    cursor: "pointer"
                },
                hoverStyle:{
                    border:"3px solid #ff7e2a",
                    "color":"#fd5e0f",
                    "background-color": "#555555",
                    "text-shadow": "0px 0px 0px rgba(0,0,0,0)"
                }
            };
            componentStyles.rowStyles.spacingStyle = {
                display: "inline-block",
                margin: "auto"
            };
            componentStyles.rowStyles.displayStyle = {
                margin: "auto",
                "text-align":"left",
                color:"#cccccc",
                //"max-width":"90%",
                padding:"2em",
                "font-family":"Lato"
            };

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
                    "key":"API Integration",
                    "value":"Content19"
                },{
                    "key":"Build Automation",
                    "value":"Content20"
                },{
                    "key":"Package Management",
                    "value":"Content21"
                }
            ];

            super(items, gridContainer, componentStyles);
        }
    };
});
