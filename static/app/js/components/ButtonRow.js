define(["app/util/HTMLFragmentBuilder"],
(h) => {
    return class ButtonRow {
        constructor(items, container, buttonType, componentStyles){
            //Style Objects
            let {buttonStyles, spacingStyle, componentStyle} = componentStyles;
            this.buttonStyles = buttonStyles;
            this.spacingStyle = spacingStyle;
            this.componentStyle = componentStyle;

            //Data Objects
            this.items = items;

            //JS Component Objects
            this.button = buttonType;       //any Frank-style button class should work
            this.buttons = [];              //array of button objects

            //HTML Component Objects
            this.container = container;
            this.component;
            this.buttonRowContainer;

            //State Objects
            this.state = "Unrendered";
        }

        deactivateAllButtons(){
            this.buttons.forEach(button => button.deactivate());
        }

        getActiveButton(){
            return this.buttons.filter(button => button.active == true)[0];
        }

        buildButton(label, content){
            let spacingStyle = Object.assign(this.spacingStyle,{width:this.buttonSpacing});
            let spacingContainer = h.div({
                className: "button-spacing-container",
                style: spacingStyle
            });
            let button = new this.button(label, content, spacingContainer, this.buttonStyles);
            return button;
        }

        buildRow(){
            let buttonArray = [];
            let rowItems = this.items;
            rowItems.forEach(item => buttonArray.push(this.buildButton(item.key, item.value)));
            return buttonArray;
        }

        addClickListenerToAllButtons(cb){
            this.buttons.forEach(button => button.addClickListener(cb));
        }

        render(){
            return new Promise(resolve => {
                this.buttonRowContainer = h.div({
                    className:"row-buttons"
                });
                this.component = h.div({
                    className:"DisplayGridRow",
                    style: this.componentStyle
                },
                    this.buttonRowContainer
                );
                this.buttons = this.buildRow();
                this.buttons.forEach(button => {
                    button.render();
                    this.buttonRowContainer.appendChild(button.container);
                });
                this.container.innerHTML = "";
                this.container.appendChild(this.component);
                this.state = "Rendered";
                resolve(this);
            });
        }

    };
});
