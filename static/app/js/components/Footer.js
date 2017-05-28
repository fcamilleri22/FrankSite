define(["app/util/HTMLFragmentBuilder", "app/components/IconLink"],
(h, IconLink) => {
    return class Footer {
        constructor(footTitle, container){
            //Style Objects
            //Defined Inline

            //Data Objects
            this.footTitle = footTitle;

            //JS Component Objects

            //HTML Component Objects
            this.container = container;
            this.component;

            //State Controls
        }

        buildFootTitle(){
            return h.h2({
                id: "subtitle",
                style:{
                    "font-family": "Lato",
                    "text-align":"center",
                    color:"#cccccc",
                    width:"100%",
                    "text-shadow": "2px 2px 3px rgba(0,0,0,0.6)"
                }
            }, this.footTitle);
        }

        buildLinkedInButton(){
            let containerStyle = {
                style:{
                    width:"100%",
                    "text-align": "center",
                    "margin":"auto"
                }
            };
            let linkedInContainer = h.div(containerStyle);
            let linkedInLink = new IconLink("linkedin", "https://linkedin.com/in/fcamilleri22", linkedInContainer);
            return linkedInLink.render().container
            // return h.div({
            //     className:"Links",
            //     style:{
            //         "text-align": "center",
            //         width:"100%"
            //     }
            // },
            //     linkedInContainer
            // );
        }

        buildComponent(){
            return h.div({
                className: "PageTitle",
                style: {
                    margin:"auto"
                }
            },
            this.buildFootTitle(),
            this.buildLinkedInButton());
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
