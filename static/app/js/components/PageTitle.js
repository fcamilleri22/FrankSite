define(["app/util/HTMLFragmentBuilder", "app/components/LinkButton", "app/components/IconLink"],
(h, Button, IconLink) => {

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
                "text-shadow": "1px 1px 2px rgba(0,0,0,0.6)",
                cursor: "pointer"
            };
            this.buttonStyles.hoverStyle = {
                border:"3px solid #ff7e2a",
                "color":"#fd5e0f",
                "background-color": "#555555",
                "text-shadow": "0px 0px 0px rgba(0,0,0,0)"
            };
            this.iconStyles = {};
            this.iconStyles.componentStyle = {
                color: "#33aadd"
            };
            this.iconStyles.hoverStyle = {
                color: "#ff7e2a"
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
                    color:"#cccccc",
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
                    color:"#cccccc",
                    width:"100%",
                    "font-size": "1.25em",
                    "text-shadow": "2px 2px 3px rgba(0,0,0,0.6)"
                }
            }, this.subtitle);
        }

        buildLinkRow(){
            let containerStyle = {style:{width:"2em", display: "inline-block", margin:"1em"}};
            let gitHubContainer = h.div(containerStyle);
            let linkedInContainer = h.div(containerStyle);
            let pdfContainer = h.div(containerStyle);
            let gitHubLink = new IconLink(
                "github",
                "https://github.com/fcamilleri22",
                gitHubContainer,
                this.iconStyles
            );
            let linkedInLink = new IconLink(
                "linkedin",
                "https://linkedin.com/in/fcamilleri22",
                linkedInContainer,
                this.iconStyles
            );
            let pdfLink = new IconLink(
                "file-pdf-o",
                "/static/app/FrankCamilleriResume.pdf",
                pdfContainer,
                this.iconStyles,
                true
            );
            gitHubLink.render();
            linkedInLink.render();
            pdfLink.render();
            return h.div({
                className:"Links",
                style:{
                    "text-align": "center",
                    width:"100%"
                }
            },
                gitHubContainer,
                linkedInContainer,
                pdfContainer
            );
        }

        buildComponent(){
            return h.div({
                className: "PageTitle",
                style:{
                    margin:"auto",
                    "padding-top":"3em",
                    "padding-bottom":"2em",
                    width:"90%"
                }
            },
            this.buildTitle(),
            this.buildSubtitle(),
            this.buildLinkRow());
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
