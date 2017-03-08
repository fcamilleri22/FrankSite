define(["app/util/HTMLFragmentBuilder","app/components/DisplayGrid"],
(h, DisplayGrid) => {
    return class HomePageDisplayGrid extends DisplayGrid {
        constructor(gridContainer, title) {
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
                    "key":"Javascript",
                    "value":`Javascript is the native language of the Web, and is an essential part of any well-qualified full stack engineer's toolkit.
                    Unlike many front end engineers, I've spent a good amount of time learning vanilla, framework free Javascript in order to make sure
                    that I have the knowledge necessary to quickly adapt to the latest framework or library that your organization may be using, be it JQuery, Angular,
                    React, or the next super cool framework. In fact, this site, and all of its components (with the exception of the Font-Awesome icon links at the top) was fully
                    written using only vanilla, framework-less Javascript and RequireJS to help organize and load everything.`
                },{
                    "key":"Node.js",
                    "value":`In the last few years, Node.js brought the flexibility of Javascript's loose typing and functional idioms to the server side, and I've found it
                    to be excellent for quickly prototyping and deploying new backend services and for writing essential DevOps automation tools.
                    However, once the initial version of a backend service has been built in Node, I'd prefer to rewrite it in a language such as Java, as Node.js single-threaded
                    operation and loose typing can make things difficult at scale.`
                },{
                    "key":"Responsive HTML / CSS",
                    "value":`HTML and CSS are fundamental skills for building web applications in combination with Javascript. However, with mobile users becoming an
                    increasingly larger customer base, additional considerations must be given for smaller screens and switching on the fly between portrait and landscape
                    views. I am more than capable of building such responsive interfaces, enabling you to reach those mobile markets. This site, by the way, is fully viewable on mobile,
                    and fully responsive to view changes.`
                },{
                    "key":"Java",
                    "value":`Java is the language of getting some serious things done at large scale at a pretty good pace. Not to be confused with Javascript (I assure you, the two are absolutely NOT related,)
                    Java's automatic garbage collecting and strict typing make it really hard for some silly bugs to occur, and prevents me from having to waste time worrying about memory allocation.`
                },{
                    "key":"Spring",
                    "value":`The Spring Framework for Java prevents an organization from needing to reinvent the wheel, with modules that cover everything from data transaction managment to
                    user authentication to asynchronous routines. Its inversion-of-control system allows a developer some more ease in developing solid modular code, and also makes for easier dependency mocking
                    when writing automated tests. It makes developing large applications in Java as painless as possible. The Mass Exchange backend application was written using Spring.`
                },{
                    "key":"Hibernate",
                    "value":`The Hibernate ORM makes it easier to read and store data entities, such as user data or order transactions, with a SQL database. It makes persisting business-critical
                    information almost an afterthought. And with easy Java annotations for things like Lazy Loading, writing fast applications with persisted data with it is less of a hassle`
                },{
                    "key":"bash / zsh",
                    "value":`Knowledge of a shell scripting language such as the Bourne-Again Shell (BASH) is fundamental for any kind of development operations. Without it, a developer
                    can't properly control his/her development machine in an automated fashion, and is doomed to manually repeat even the simplest of manual tasks.`
                },{
                    "key":"jQuery",
                    "value":`jQuery is quite simply, a library that does exactly what it reports to do. It enables a development team to do more with less code, leading to less surface area for bugs
                    to present themselves. I've used jQuery exensively during my time at MassExchange to quickly and easily build our front end interfaces.`
                },{
                    "key":"JIRA",
                    "value":`JIRA is an excellent workflow tool for allowing developers to make their work visible, and to keep work organized. I use JIRA daily to make sure that my fellow developers aren't
                    doing repeated work, and to check on the progress of new features and where they are in the release lifecycle.`
                },{
                    "key":"Automated Testing",
                    "value":`Automated testing is a requirement for any good Agile development operation. Without an automated testing solution, developers can't make large changes on a live
                    value adding system without risking breaking the entire system. Any organization that does not keep up with test coverage is potentially shooting themselves in the foot by possibly
                    causing business critical bugs or outages with every code release. Tools such as Ghost Inspector, Mocha, JUnit, and Mockito are paramount for building solid automated tests and increasing
                    the frequency and velocity of releases of new features.`
                },{
                    "key":"Continuous Integration",
                    "value":`Continuous integration is the art of ensuring that every commit a developer does actually compiles, builds, and passes the full suite of automated tests.
                    Without good continuous integration systems, such as Travis or Codeship, an organization can potentially release a bad version of their platform, creating immense headaches and
                    keeping developers working late, which nobody wants to do. A good continuous integration system also automates building and packaging your code, making it easier to
                    execute automated deployments with ease, as often as possible.`
                },{
                    "key":"Amazon Web Services",
                    "value":`AWS is the largest cloud service in the world, and I am quite skilled at using its services to host cloud applications. At Mass Exchange, I am one of the primary
                    administrators of our AWS resources, and my ability to automate tasks using Node.js and Terraform keeps me away from having to mess with any time-wasting GUIs to get simple deployment tasks done.`
                },{
                    "key":"MySQL",
                    "value":`Managing a MySQL database is paramount for running any application that requires relational persistence, such as user/business data relationships. Although I do my utmost to
                    not have to resort to editing a MySQL database through SQL queries myself, as that's my application's job, if the need arises, I can write SQL for testing and debugging purposes.`
                },{
                    "key":"NoSQL",
                    "value":`NoSQL databases, like MongoDB and Cassandra, have been certainly gaining popularity over the last few years for various reasons, be it ease of use, or for ease of scalability.
                    As far as my experience with them goes, I've found that MongoDB is really good for quickly prototyping new backend persistence before moving on to something more rock solid like MySQL.`
                },{
                    "key":"Distributed Systems",
                    "value":`Building systems in a distributed fashion is paramount for a cloud based application to scale up and down according to demand. I am able to design backend services to
                    accomplish performing distributed tasks in order to enable you to quickly grow the technology backbone of your business as it grows.`
                },{
                    "key":"Computer Hardware",
                    "value":`Ever since I was a child, I've been facinated with computer hardware, and building servers and PC's.
                    I've built many, many computers, from my own machines, to development machines for Mass Exchange and other clients,
                    even large rendering boxes for professional art and design studios. A machine I built was even used for rendering promotional
                    footage for shows such as Showtime's Penny Dreadful and A&E's Bates Motel`
                },{
                    "key":"TCP / IP / DNS",
                    "value":`Knowing how to program is one thing, but one cannot operate in the cloud and over the internet without some fundamental understanding
                    of computer networking. I can both build an office network, and properly network together cloud services.`
                },{
                    "key":"Terraform",
                    "value":`Terraform is an excellent technology that enables me to completely manage and describe cloud resources from any popular provider, be it Azure, Digital Ocean, AWS,
                    the Google Cloud Platform, or any other popular infrastructure-as-a-service platform. With this, and some good deployment pipelines, I can have a full
                    application environment deployed and fully configured in under 10 minutes in a single command, with the ability to take it all down just as fast.`
                },{
                    "key":"Excel Automation",
                    "value":`Using a library called Apache POI, I can automate and integrate Excel spreadsheets into your existing web applications, meaning that I can work more easily
                    with data analysts and more quickly turn their spreadsheets into full web applications in Java with a Javascript frontend.`
                },{
                    "key":"API Integration",
                    "value":`I am quite adept at integrating applications with third party services, such as Google's DFP and Amazon AWS, in order to utilize already existing web services
                    into your applications, and abstracting those APIs into internal libraries for the rest of the organization's developers to use with ease.`
                },{
                    "key":"Build Automation",
                    "value":`Build Automation, in combination with automated testing, and continuous integration is extremely important for quickly deploying new versions of your applications.
                    Using my shell scripting and automation abilities, I can automate builds and make your code as agile as your business requires.`
                },{
                    "key":"Package Management",
                    "value":`Package managers, such as NPM, Maven, apt, and rpm make gathering the dependencies for applications and development enviroments easy. I find myself very frequently
                    writing scripts for automating such tasks for not only deploying applications to new cloud instances, but for also automatically setting up development environments for new developers.`
                }
            ];

            super(items, gridContainer, componentStyles);
            this.title = title;
        }

        buildTitle(){
            return h.h2({
                class: "grid-title",
                style: {
                    "color": "#aaaaaa",
                    "font-family": "Lato",
                    "text-shadow": "2px 2px 3px rgba(0,0,0,0.6)",
                    "margin":"auto",
                    "padding-top": "1em",
                    "width":"85%"
                }
            }, this.title);
        }

        render(){
            super.render().then((grid)=>{
                grid.container.insertAdjacentElement("afterbegin", this.buildTitle());
            });
        }
    };
});
