define(["app/util/HTMLFragmentBuilder", "app/components/Button"],
(h, Button) => {


    //private extentiion of Button
    //simply a button with a container that points to some content.
    class DisplayRowButton extends Button {
        constructor(label, content, container, componentStyles){
            super(label, container, componentStyles);
            this.content = content;
        }
    }
    return class DisplayGridRow {
        //Variables declared but not instantiated here are instantiated after render.
        //items is an array of key value pairs
        //container is an html element
        constructor(items, container, componentStyles){
            let {buttonStyles, spacingStyle, displayStyle, componentStyle} = componentStyles;
            this.buttonStyles =  buttonStyles;      //Styles passed down to buttons.
            this.spacingStyle = spacingStyle;       //Style of container spacing divs where buttons are kept
            this.displayStyle = displayStyle;       //Style of space where content is displayed
            this.componentStyle = componentStyle;   //Style of top level grid CSS

            this.container = container;
            this.items = items;
            //this.buttonSpacing is either undefined, and computed as a percentage of items on the rows
            //or defined in order to space at a fixed length.
            this.buttonSpacing = `${100/items.length}%`;
            this.id = container.id;//dunno if we wanna do this

            this.component;             //the whole html element
            this.display = "";          //the display html element
            this.buttonRowContainer;    //the div of button elements
            this.buttons = [];          //the button class objects
        }

        activateOrHideDisplay(contentToDisplay){
            this.buttons.forEach(button =>{
                if (button.content != contentToDisplay) button.deactivate();
                else button.activate();
            });
            if (this.display && this.display.innerHTML == contentToDisplay){
                this.clearDisplay();
                this.deactivateAllButtons();
            }
            else this.setDisplay(contentToDisplay);
        }

        deactivateAllButtons(){
            this.buttons.forEach(button => button.deactivate());
        }

        getActiveButton(){
            return this.buttons.filter(button => button.active == true)[0];
        }

        buildDisplayGridButton(buttonText, buttonContent){
            //overwrite whatever width spacing might be involved for whatever reason for the spacing attr
            let spacingStyle = Object.assign(this.spacingStyle,{width:this.buttonSpacing});
            let spacingContainer = h.div({
                className: "button-spacing-container",
                style: spacingStyle
            });
            let button = new DisplayRowButton(buttonText, buttonContent, spacingContainer, this.buttonStyles);
            return button;
        }

        buildDisplay() {
            return h.div({
                className:"row-display",
                style: this.displayStyle
            });
        }

        clearDisplay() {
            if (!this.display){
                return;
            }
            this.component.removeChild(this.display);
            this.display = undefined;
        }

        setDisplay(content) {
            if (!this.display){
                this.display = this.buildDisplay();
                this.display.innerHTML = content;
                this.component.appendChild(this.display);
            }
            else this.display.innerHTML = content;
        }

        buildRow(){
            let buttonArray = [];
            let rowItems = this.items;
            rowItems.forEach(item => buttonArray.push(this.buildDisplayGridButton(item.key, item.value)));
            return buttonArray;
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
                this.buttons.forEach((button) => {
                    this.buttonRowContainer.appendChild(button.container);
                    button.render();
                    button.addClickListener(()=>this.activateOrHideDisplay(button.content));
                });
                this.container.innerHTML = "";
                this.container.appendChild(this.component);
                resolve(this);
            });
        }
    };
});
