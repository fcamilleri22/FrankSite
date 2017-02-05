define(["app/util/HTMLFragmentBuilder", "app/components/Button"],
(h, Button) => {


    //private extentiion of Button
    //simply a button with a container that points to some content.
    class DisplayRowButton extends Button {
        constructor(label, content, container){
            let style = {
                "text-align":"center",
                margin:"1em auto",
                padding:"10px",
                border:"3px solid #0088cc",
                "color":"#33aadd",
                "background-color": "#333333",
                width: "11em",
                "font-family": "Lato"
            };
            let hoverStyle = {
                border:"3px solid #ff7e2a",
                "color":"#fd5e0f",
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
            this.display = "";               //the display html element
            this.buttonRowContainer;    //the div of button elements
            this.buttons = [];          //the button class objects
        }

        activateOrHideDisplay(contentToDisplay){
            if (this.display && this.display.innerHTML == contentToDisplay){
                this.clearDisplay();
            }
            else this.setDisplay(contentToDisplay);
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

        buildDisplay() {
            return h.div({
                className:"row-display",
                style:{
                    margin: "auto",
                    "text-align":"center",
                    color:"#cccccc",
                    "max-width":"80%",
                    padding:"2em",
                    "font-family":"Lato"
                }
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
            this.items.forEach(item => buttonArray.push(this.buildDisplayGridButton(item.key, item.value)));
            return buttonArray;
        }

        render(){
            return new Promise(resolve => {
                this.buttonRowContainer = h.div({
                    className:"row-buttons"
                });
                this.component = h.div(
                    {className:"DisplayGridRow"},
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
    return DisplayGridRow;
});
