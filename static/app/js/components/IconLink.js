define(["app/util/HTMLFragmentBuilder"],
(h) => {
    //Requires Bootstrap/FontAwesome
    return class IconLink{
        constructor(fontAwesomeIconName, link, container, componentStyle){
            this.icon = fontAwesomeIconName;
            this.container = container;
            this.link = link;
            this.component;
            this.mouseover = false;

        }

        render(){
            let iconClass = `fa fa-${this.icon} fa-2x`;
            this.component =
            h.a({
                href: this.link,
                style:{
                    color:"#33aadd"
                }
            },
                h.i({
                    className: iconClass
                })
            );
            this.container.innerHTML = "";
            this.container.appendChild(this.component);
            return this;
        }
    };
});
