define(["app/util/HTMLFragmentBuilder","app/components/Footer","app/components/IconLink"],
(h, Footer, IconLink) => {

    return class HomePageFooter extends Footer {
        constructor (footTitle, container, footContent){
            let componentStyles = {};

            componentStyles.componentStyle = {
                margin:"auto"
            };

            componentStyles.titleStyle = {
                "font-family": "Lato",
                "text-align":"center",
                color:"#cccccc",
                width:"100%",
                "text-shadow": "2px 2px 3px rgba(0,0,0,0.6)"
            };

            componentStyles.contentContainerStyle = {
                width:"100%",
                "text-align": "center",
                "margin":"auto"
            };

            super(footTitle, container, footContent, componentStyles);
        }

        //Override
        buildContent(){return this.buildLinkedInButton();}

        buildLinkedInButton(){
            let linkedInContainer = h.div(this.contentContainerStyle);
            let linkedInLink = new IconLink(
                "linkedin",
                "https://linkedin.com/in/fcamilleri22",
                linkedInContainer
            );
            return linkedInLink.render().container;
        }
    };

});
