define(["app/util/HTMLFragmentBuilder"],
(h) => {
    //Requires Bootstrap/FontAwesome
    return class IconLink{
        constructor(fontAwesomeIconName, link, container, isDownload){
            this.icon = fontAwesomeIconName;
            this.container = container;
            this.link = link;
            this.component;
            this.mouseover = false;
            this.isDownload = isDownload;
            this.componentStyle = {color:"#33aadd"};
            this.hoverStyle = {color:"#ff7e2a"};
        }

        applyStyle(newStyle){
            Object.assign(this.component.style, newStyle);
        }

        render(){
            const thisClass = this;
            let iconClass = `fa fa-${this.icon} fa-2x`;
            this.component =
            h.a({
                href: this.link,
                style:{
                    color:"#33aadd",
                },
                onmouseover:    () => {
                    this.mouseover = true;
                    this.applyStyle(thisClass.hoverStyle);
                },
                onmouseleave:   () => {
                    this.mouseover = false;
                    this.applyStyle(thisClass.componentStyle);
                },
            },
                h.i({
                    className: iconClass
                })
            );
            if (this.isDownload){
                this.component.setAttribute("download", "FrankCamilleriResume.pdf");
            }
            this.container.innerHTML = "";
            this.container.appendChild(this.component);
            return this;
        }
    };
});
