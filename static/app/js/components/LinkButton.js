define(["app/util/HTMLFragmentBuilder", "app/components/Button"],
(h, Button) => {
    return class LinkButton extends Button {
        constructor(label, container, link, style, hoverStyle){
            super(label, container, style, hoverStyle);
            this.link = link;
        }

        //overridden Render
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
                onclick: ()=>{window.location.href = this.link;}
            }, this.label);
            this.container.innerHTML = "";
            this.container.appendChild(this.component);
            return this;
        }

        update(){
            super.update();
            this.component.href = this.link;
        }
    };
});
