define(["app/util/HTMLFragmentBuilder","app/components/Footer"],
(h, Footer) => {

    return class HomePageFooter extends Footer {
        constructor (footTitle, container, footContent){
            let componentStyles = {};
            componentStyles.componentStyle = {
                margin:"auto"
            }
            componentStyles.titleStyle = {
                "font-family": "Lato",
                "text-align":"center",
                color:"#cccccc",
                width:"100%",
                "text-shadow": "2px 2px 3px rgba(0,0,0,0.6)"
            }
            componentStyles.contentContainerStyle = {
                width:"2em",
                display: "inline-block",
                "margin-bottom":"1em"
            }
            super(footTitle, container, footContent, componentStyles)
        }
    }

});
