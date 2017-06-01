define(["app/util/HTMLFragmentBuilder","app/components/Footer","app/components/IconLink"],
(h, Footer, IconLink) => {

    return class HomePageFooter extends Footer {
        constructor (footTitle, container){
            let componentStyles = {};

            componentStyles.componentStyle = {
                width: "100%",
                margin:"auto"
            };

            componentStyles.titleStyle = {
                "font-family": "Lato",
                margin:"20px auto 20px auto",
                "text-align":"center",
                "font-size":"28px",
                "font-weight":"bold",
                color:"#cccccc",
                width:"100%",
                "text-shadow": "2px 2px 3px rgba(0,0,0,0.6)"
            };

            componentStyles.contentContainerStyle = {
                margin:"0 auto 20px auto",
                "text-align": "center",
                width: "100%"
            };

            super(footTitle, container, null, componentStyles);
        }

        //Override
        buildContent(){return this.buildLinkedInButton();}

        buildLinkedInButton(){
            let linkedInContainer = h.div({
                id: "footerContent",
                style:this.contentContainerStyle
            });
            this.footContent = new IconLink(
                "linkedin",
                "https://linkedin.com/in/fcamilleri22",
                linkedInContainer
            );
            return this.footContent.render().container;
        }
    };

});
