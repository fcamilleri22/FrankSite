define(["app/util/HTMLFragmentBuilder", "app/components/LinkButton"],
(h, Button) => {

    return class PageTitle {
        //constructor(title, subtitle, buttonStyles, container){
        constructor(title, subtitle, container){
            this.title = title;
            this.subtitle = subtitle;
            this.container = container;
            this.component;
            this.buttonStyles = {};
            this.buttonStyles.componentStyle = {
                "text-align":"center",
                margin:"1em auto",
                padding:"10px",
                border:"3px solid #0088cc",
                "color":"#33aadd",
                "background-color": "#333333",
                width: "11em",
                "font-family": "Lato",
                "text-shadow": "1px 1px 2px rgba(0,0,0,0.6)"
            };
            this.buttonStyles.hoverStyle = {
                border:"3px solid #ff7e2a",
                "color":"#fd5e0f",
                "background-color": "#555555",
                "text-shadow": "0px 0px 0px rgba(0,0,0,0)"
            };
        }

        buildTitle(){
            return h.h1({
                id: "title",
                style:{
                    "font-family": "Lato",
                    "text-align":"center",
                    width:"100%",
                    margin:"auto",
                    color:"#bbbbbb",
                    "font-size": "3em",
                    "text-shadow": "2px 2px 3px rgba(0,0,0,0.6)"
                }
            }, this.title);
        }

        buildSubtitle(){
            return h.h3({
                id: "subtitle",
                style:{
                    "font-family": "Lato",
                    "text-align":"center",
                    margin:"auto",
                    "margin-top": "5px",
                    color:"#bbbbbb",
                    width:"100%",
                    "font-size": "1.25em",
                    "text-shadow": "2px 2px 3px rgba(0,0,0,0.6)"
                }
            }, this.subtitle);
        }

        buildLinkButtons(){
            let gitHubContainer = h.div({style:{margin:"auto"}});
            let gitHub = new Button("GitHub", "https://github.com/fcamilleri22", gitHubContainer, this.buttonStyles);
            let linkedInContainer = h.div({style:{margin:"auto"}});
            let linkedIn = new Button("LinkedIn", "https://linkedin.com/in/fcamilleri22", linkedInContainer, this.buttonStyles);
            let downloadResumeContainer = h.div({style:{margin:"auto"}});
            let downloadResume = new Button("Resume (PDF)", "",  downloadResumeContainer, this.buttonStyles);
            gitHub.render();
            linkedIn.render();
            downloadResume.render();
            return h.div({
                style:{
                    width:"100%",
                    margin:"auto"
                }},
                gitHubContainer,
                linkedInContainer,
                downloadResumeContainer
            );
        }

        buildComponent(){
            return h.div({
                class: "PageTitle",
                style:{
                    margin:"auto",
                    "padding-top":"5em",
                    "padding-bottom":"1em",
                    width:"90%"
                }
            },
            this.buildTitle(),
            this.buildSubtitle(),
            this.buildLinkButtons());
        }

        render(){
            return new Promise(resolve => {
                this.component = this.buildComponent();
                this.container.innerHTML = "";
                this.container.appendChild(this.component);
                resolve(this);
            });
        }
    };

});
