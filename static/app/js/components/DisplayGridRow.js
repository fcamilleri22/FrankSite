define(["app/util/HTMLFragmentBuilder"],
(h) => {
    const DisplayGridRow = class {
        //Variables declared but not instantiated here are instantiated after render.
        //items is an array of key value pairs
        //container is an html element
        constructor(items, container){
            this.container = container;
            this.id = container.id;
            this.items = items;
            this.buttonWidth = "200px";
            this.buttonSpacing = `${100/items.length}%`;
            this.displayContainer;
            this.buttons;
        }

        createDisplayGridButton(buttonText, buttonContent){
            let thisClass = this;
            let regStyle = {
                "text-align":"center",
                margin:"auto",
                padding:"10px",
                border:"3px solid #33aadd",
                "color":"#33aadd",
                "background-color": "#666666",
                width: this.buttonWidth
            };

            let hoverStyle = {
                "text-align":"center",
                margin:"auto",
                padding:"10px",
                border:"3px solid #ff7e2a",
                "color":"#ff7e2a",
                "background-color": "#777777",
                width: this.buttonWidth
            };

            return h.div({
                className: "button-container",
                style:{
                    display:"inline-block",
                    margin:"auto",
                    width: this.buttonSpacing
                }
            },
                h.div({
                    className: "button",
                    style: regStyle,
                    onmouseover: function(){Object.assign(this.style, hoverStyle);},
                    onmouseleave: function(){Object.assign(this.style, regStyle);},
                    onclick: function(){(thisClass.displayContainer.innerHTML == buttonContent) ? thisClass.clearDisplay() : thisClass.displayContainer.innerHTML = buttonContent;}
                },
                    buttonText
                )
            );
        }

        clearDisplay(){
            this.displayContainer.innerHTML="";
        }

        fillRow(){
            let buttonArray = [];
            this.items.forEach(item => buttonArray.push(this.createDisplayGridButton(item.key, item.value)));
            return h.div({
                className:"row-buttons"
            },
                ...buttonArray
            );
        }

        initializeButtonsField(row){
            this.buttons = [];
            row.childNodes.forEach(node => this.buttons.push(node.firstElementChild));
        }

        render(){
            return new Promise(resolve => {
                let rendFrag = document.createDocumentFragment();
                this.displayContainer = h.div({
                    className:"row-display",
                    style:{
                        margin: "auto",
                        "text-align":"center"
                    }
                });
                let row = this.fillRow();
                this.initializeButtonsField(row);
                rendFrag.appendChild(row);
                rendFrag.appendChild(this.displayContainer);
                this.container.innerHTML = "";
                this.container.appendChild(rendFrag);
                resolve(this.container);
            });
        }

    };
    return DisplayGridRow;
});
