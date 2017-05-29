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
                id: "footerSubtitle",         //TODO: Try `${this.constructor.name}Subtitle`
                style:this.titleStyle
            }, this.footTitle);
        }

        buildContent(){                         //TODO: Think about maybe checking if
            return h.div({                      //content is a string or a frankable object
                id: "footerContent",
                style:this.contentContainerStyle
            }, this.footContent);
        }

        buildComponent(){
            return h.div({
                className: "PageTitle",
                style: {
                    margin:"auto"
                }
            },
            this.buildFootTitle(),
            this.buildContent());
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
