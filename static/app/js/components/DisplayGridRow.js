define(["app/util/HTMLFragmentBuilder", "app/components/Button", "app/components/ButtonRow"],
(h, Button, ButtonRow) => {

    class DisplayRowButton extends Button {
        constructor(label, content, container, componentStyles){
            super(label, container, componentStyles);
            this.content = content;
        }
    }

    return class DisplayGridRow extends ButtonRow {
        constructor(items, container, componentStyles){
            super(items, container, DisplayRowButton, componentStyles);
            //Style Objects
            let {displayStyle} = componentStyles;
            this.displayStyle = displayStyle;

            //Data Objects
            this.displayContent;
            //Inherited from ButtonRow

            //JS Component Objects
            //Inherited from ButtonRow

            //HTML Component Objects
            this.display = "";          //the display html element

            //State Objects
            //Inherited from ButtonRow
        }

        activateOrHideDisplay(contentToDisplay){
            //trigger all button actives/deactives
            this.buttons.forEach(button =>{
                if (button.content != contentToDisplay) button.deactivate();
                else button.activate();
            });
            this.updateDisplay(contentToDisplay);
        }

        buildDisplay() {
            return h.div({
                className:"row-display",
                style: this.displayStyle
            });
        }

        updateDisplay(newContent){
            if (this.display && this.displayContent == newContent){
                this.clearDisplay();
                this.deactivateAllButtons();
            }
            else {
                this.displayContent = newContent;
                this.setDisplay(newContent);
            }
        }

        clearDisplay() {
            if (!this.display){
                return;
            }
            this.component.removeChild(this.display);
            this.display = undefined;
        }

        //Don't use this to change the display -- use updateDisplay
        //This ensures that we don't rely on the display DOM content for an update
        setDisplay(content) {
            if (!this.display){
                this.display = this.buildDisplay();
                this.display.innerHTML = content;
                this.component.appendChild(this.display);
            }
            else this.display.innerHTML = content;
        }

        render(){
            return new Promise(resolve =>{
                super.render().then(()=> {
                    this.buttons.forEach((button)=> {
                        button.addClickListener(()=>this.activateOrHideDisplay(button.content));
                    });
                    resolve(this);
                });
            });
        }
    };
});
