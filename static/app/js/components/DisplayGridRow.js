define(["app/util/HTMLFragmentBuilder", "app/components/Button"],
(h, Button) => {

    //private extentiion of Button
    //simply a button with a container that points to some content.
    class DisplayRowButton extends Button {
        constructor(label, content, container){
            let style = {
                "text-align":"center",
                margin:"auto",
                padding:"10px",
                border:"3px solid #33aadd",
                "color":"#33aadd",
                "background-color": "#666666",
                width: "200px"
            };
            let hoverStyle = {
                border:"3px solid #ff7e2a",
                "color":"#ff7e2a",
                "background-color": "#777777",
            };
            super(label, container, style, hoverStyle);
            this.content = content;
        }
    }

    const DisplayGridRow = class {
        //Variables declared but not instantiated here are instantiated after render.
        //items is an array of key value pairs
        //container is an html element
        constructor(items, container){
            this.container = container;
            this.items = items;
            this.buttonSpacing = `${100/items.length}%`;
            this.id = container.id;//dunno if we wanna do this

            this.component;             //the whole html element
            this.display;               //the display html element
            this.buttonRowContainer;    //the div of button elements
            this.buttons = [];          //the button class objects
        }

        activateOrHideDisplay(contentToDisplay){
            if (!this.display){
                return;
            }
            if (this.display.innerHTML == contentToDisplay){
                this.clearDisplay();
            } else{
                this.setDisplay(contentToDisplay);
            }
        }

        buildDisplayGridButton(buttonText, buttonContent){

            let spacingContainer = h.div({
                className: "button-spacing-container",
                style:{
                    display: "inline-block",
                    margin: "auto",
                    width: this.buttonSpacing
                }
            });
            let button = new DisplayRowButton(buttonText, buttonContent, spacingContainer);
            return button;
        }

        clearDisplay() {
            if (!this.display){
                return;
            }
            this.display.innerHTML="";
        }

        setDisplay(content) {
            if (!this.display){
                return;
            }
            this.display.innerHTML = content;
        }

        buildRow(){
            let buttonArray = [];
            this.items.forEach(item => buttonArray.push(this.buildDisplayGridButton(item.key, item.value)));
            return buttonArray;
        }

        render(){
            return new Promise(resolve => {
                this.display = h.div({
                    className:"row-display",
                    style:{
                        margin: "auto",
                        "text-align":"center"
                    }
                });
                this.buttonRowContainer = h.div({
                    className:"row-buttons"
                });
                this.component = h.div(
                    {className:"DisplayGridRow"},
                    this.buttonRowContainer,
                    this.display
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
    return DisplayGridRow;
});
