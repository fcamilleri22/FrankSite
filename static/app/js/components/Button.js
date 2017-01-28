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

            this.component; //the button HTML
        }

        applyStyle(newStyle){
            Object.assign(this.component.style, newStyle);
        }

        //TODO: after you get the display grid rows drawing again, make it so that
        render(){
            const thisClass = this;
            this.component =

            h.div({
                className: "button",
                style: this.style,
                onmouseover:    () => {
                    this.mouseover = true;
                    this.applyStyle(thisClass.hoverStyle);
                },
                onmouseleave:   () => {
                    this.mouseover = false;
                    this.applyStyle(thisClass.style);
                },
            }, this.label);
            this.container.innerHTML = "";
            this.container.appendChild(this.component);
            return this;
        }

        //update the DOM element after updating class.
        update(){
            this.component.innerHTML = this.label;
            this.mouseover == false ? this.applyStyle(this.style) : this.applyStyle(this.hoverStyle);
        }

        addClickListener(cb){
            this.component.addEventListener("click", cb);
        }

    };
    return Button;
});
