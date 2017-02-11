define(["app/util/HTMLFragmentBuilder"],
(h) => {
    const Button = class {
        constructor(label, container, style, hoverStyle){
            this.label = label;     //button text
            this.container = container;     //div that button is placed in
            this.style = style;             //default button styling
            this.hoverStyle = hoverStyle ? hoverStyle : style;  //button style while active
            this.id = container.id; //dunno if we actually want this -- Inherit ID of placed container.

            this.component; //the button HTML itself.

            //State Controls
            this.mouseover = false;     //is the user's mouse over the object?
            this.active = false;        //is this button toggled?
        }

        applyStyle(newStyle){
            Object.assign(this.component.style, newStyle);
        }

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
                    if (this.active == false) this.applyStyle(thisClass.style);
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
