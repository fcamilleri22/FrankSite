define(["app/util/HTMLFragmentBuilder"],
(hfb) => {
    const DisplayGridRow = class {
        constructor(items, container){
            this.container = container;
            this.items = items;
            this.buttonWidth = "200px";
            let buttonSpacing = (100/items.length);
            this.buttonSpacing = `${buttonSpacing}%`;
        }

        createDisplayGridButton(buttonText){
            let regStyle = {
                "text-align":"center",
                margin:"auto",
                padding:"10px",
                border:"3px solid #33aadd",
                "background-color": "#666666",
                width: this.buttonWidth
            };

            let hoverStyle = {
                "text-align":"center",
                margin:"auto",
                padding:"10px",
                border:"3px solid #ff7e2a",
                "background-color": "#777777",
                width: this.buttonWidth
            };

            return hfb.div({
                className: "button-container",
                style:{
                    display:"inline-block",
                    margin:"auto",
                    width: this.buttonSpacing
                }
            },
                hfb.div({
                    className: "button",
                    style: regStyle,
                    onmouseover: function(){Object.assign(this.style, hoverStyle);},
                    onmouseleave: function(){Object.assign(this.style, regStyle);},
                    onclick: function(){console.log(window.innerWidth);},
                    onresize: function(){console.log(window.innerWidth);}
                },
                    buttonText
                )
            );
        }

        fillRow(){
            let returnArray = [];
            this.items.forEach(item => returnArray.push(this.createDisplayGridButton(item)));
            return returnArray;
        }

        render(){
            let fragmentToDraw = document.createDocumentFragment();
            let frag = hfb.div({
                className:"row",
                style:{
                    width:"100%",
                    margin:"auto"
                }
            },
                ...this.fillRow()
            );
            fragmentToDraw.appendChild(frag);
            this.container.innerHTML = "";
            this.container.appendChild(fragmentToDraw);
        }

    };
    return DisplayGridRow;
});
