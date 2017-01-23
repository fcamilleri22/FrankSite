define(["app/util/HTMLFragmentBuilder"],
(h) => {
    const Button = class {
        constructor(label, container, style, hoverStyle){
            this.label = label;
            this.container = container;
            this.style = style;
            this.hoverStyle = hoverStyle ? hoverStyle : style;
            this.id = container.id;
            this.components;
        }

        render(){
            const thisClass = this;
            let component =

            h.div({
                className: "button",
                style: this.style,
                onmouseover:    function(){Object.assign(this.style, thisClass.hoverStyle);},
                onmouseleave:   function(){Object.assign(this.style, thisClass.style);},
            }, this.label);

            this.components = [component];
            this.container.appendChild(this.components);
        }

        update(){
            this.components[0].innerHTML = this.label;
            Object.assign(this.components[0], this.style);
        }

        addClickListener(cb){
            this.components[0].addEventListener("click", cb);
        }

        createDisplayGridButton(buttonText, buttonContent){
            let thisClass = this;
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
                    style: thisClass.style,
                    onmouseover: function(){Object.assign(this.style, thisClass.hoverStyle);},
                    onmouseleave: function(){Object.assign(this.style, thisClass.style);},
                    onclick: function(){(thisClass.displayContainer.innerHTML == buttonContent) ? thisClass.clearDisplay() : thisClass.displayContainer.innerHTML = buttonContent;}
                },
                    buttonText
                )
            );
        }

    };
    return Button;
});
