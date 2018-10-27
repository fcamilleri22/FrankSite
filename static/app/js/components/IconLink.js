define(["app/util/HTMLFragmentBuilder"],
(h) => {
    //Requires FontAwesome
    return class IconLink{
        constructor(fontAwesomeIconName, link, container, componentStyles, isDownload){
            //Style Objects
            let {componentStyle, hoverStyle} = componentStyles;
            this.componentStyle = componentStyle;
            this.hoverStyle = hoverStyle;

            //Data Objects
            this.icon = fontAwesomeIconName;
            this.link = link;

            //JS Component Objects

            //HTML Component Objects
            this.container = container;
            this.component;

            //State Controls
            this.mouseover = false;
            this.isDownload = isDownload;
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
                style: this.componentStyle,
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
