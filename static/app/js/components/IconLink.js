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
            return new Promise (resolve => {
                let iconClass = `fa fa-${this.icon} fa-fw`;
                this.component =
                h.a({
                    href: this.link
                },
                    h.i({
                        class: iconClass
                    })
                );
                this.container.innerHTML = "";
                this.container.appendChild(this.component);
                resolve(this);
            });
        }
    };
});
