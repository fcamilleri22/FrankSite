define(["app/util/HTMLFragmentBuilder", "app/components/IconLink"],
(h, IconLink) => {
    return class Footer {
        //Note: footContent should be responsible for its own styling.
        constructor(footTitle, container, footContent, componentStyles){
            //Style Objects
            let {componentStyle, contentContainerStyle, titleStyle} = componentStyles;
            this.componentStyle = componentStyle;
            this.contentContainerStyle = contentContainerStyle;
            this.titleStyle = titleStyle;

            //Data Objects
            this.footTitle = footTitle;
            this.footContent = footContent;

            //JS Component Objects

            //HTML Component Objects
            this.container = container;         //contains the entire object
            this.contentContainer;              //contains the content object
            this.component;                     //the actual entire object

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

        buildContent(){

        }

        buildLinkedInButton(){
            let containerStyle = {
                style:{
                    width:"100%",
        }

        // buildLinkedInButton(){
        //     let containerStyle = {style:{width:"2em", display: "inline-block", "margin-bottom":"1em"}};
        //     let linkedInContainer = h.div(containerStyle);
        //     let linkedInLink = new IconLink("linkedin", "https://linkedin.com/in/fcamilleri22", linkedInContainer);
        //     linkedInLink.render();
        //     return h.div({
        //         className:"Links",
        //         style:{
        //             "text-align": "center",
        //             width:"100%"
        //         }
        //     },
        //         linkedInContainer
        //     );
        // }

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
