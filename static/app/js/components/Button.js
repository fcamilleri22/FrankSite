define(["app/util/HTMLFragmentBuilder"],
(h) => {
    const Button = class {
        constructor(label, container, style, hoverStyle){
            this.label = label;
            this.container = container;
            this.style = style;
            this.hoverStyle = hoverStyle ? hoverStyle : style;
            this.mouseover = false;
            this.id = container.id; //dunno if we actually want this
            this.components;
        }

        applyStyle(newStyle){Object.assign(this.style, newStyle);}

        //TODO: after you get the display grid rows drawing again, make it so that
        render(){
            const thisClass = this;
            let component =

            h.div({
                className: "button",
                style: this.style,
                onmouseover:    function(){
                    thisClass.mouseover = true;
                    this.applyStyle(thisClass.hoverStyle);
                },
                onmouseleave:   function(){
                    thisClass.mouseover = false;
                    this.applyStyle(thisClass.style);
                },
            }, this.label);

            this.components = [component];
            this.container.appendChild(this.components);
        }

        //update the DOM element after updating class.
        update(){
            this.components[0].innerHTML = this.label;
            this.mouseover == false ? this.applyStyle(this.style) : this.applyStyle(this.hoverStyle);
        }

        addClickListener(cb){
            this.components[0].addEventListener("click", cb);
        }

    };
    return Button;
});
