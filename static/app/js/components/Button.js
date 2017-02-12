define(["app/util/HTMLFragmentBuilder"],
(h) => {
    return class Button {
        constructor(label, container, componentStyles){
            //Style Objects
            let {componentStyle, hoverStyle} = componentStyles;
            this.componentStyle = componentStyle;             //default button styling
            this.hoverStyle = hoverStyle ? hoverStyle : componentStyle;  //button style while hovered

            //Data Objects
            this.id = container.id;         //dunno if we actually want this -- Inherit ID of placed container.
            this.label = label;             //button text

            //JS Component Objects
            //None.

            //HTML Component Objects
            this.container = container;     //div that button is placed in
            this.component;                 //the button HTML itself.

            //State Controls
            this.mouseover = false;     //is the user's mouse over the object?
            this.active = false;        //is this button toggled?
            this.state = "Unrendered";
        }

        applyStyle(newStyle){
            Object.assign(this.component.style, newStyle);
        }

        activate(actFunc, ...actFuncArgs) {
            this.active = true;
            this.applyStyle(this.hoverStyle);
            if (actFunc) actFunc(...actFuncArgs);
        }

        deactivate(deactFunc, ...deactFuncArgs) {
            this.active = false;
            if (this.mouseover == false) this.applyStyle(this.componentStyle);
            if (deactFunc) deactFunc(...deactFuncArgs);
        }

        render(){
            const thisClass = this;
            this.component =

            h.div({
                className: "button",
                style: this.componentStyle,
                onmouseover:    () => {
                    this.mouseover = true;
                    this.applyStyle(thisClass.hoverStyle);
                },
                onmouseleave:   () => {
                    this.mouseover = false;
                    if (this.active == false) this.applyStyle(thisClass.componentStyle);
                },
            }, this.label);
            this.container.innerHTML = "";
            this.container.appendChild(this.component);
            this.state = "Rendered";
            return this;
        }

        //update the DOM element after updating class.
        update(){
            this.component.innerHTML = this.label;
            this.mouseover == false ? this.applyStyle(this.componentStyle) : this.applyStyle(this.hoverStyle);
        }

        addClickListener(cb){
            this.component.addEventListener("click", cb);
        }
    };
});
