define(["app/util/HTMLFragmentBuilder"],
(h) => {
    return class PageTitle {
        constructor(title, subtitle, container){
            this.title = title;
            this.subtitle = subtitle;
            this.container = container;
            this.component;
        }

        buildTitle(){
            return h.h1({
                id: "title",
                style:{
                    "text-align":"left",
                    width:"100%",
                    margin:"auto",
                    color:"#bbbbbb"
                }
            }, this.title);
        }

        buildSubtitle(){
            return h.h3({
                id: "subtitle",
                style:{
                    "text-align":"center",
                    margin:"auto",
                    color:"#bbbbbb",
                    width:"100%"
                }
            }, this.subtitle);
        }

        buildComponent(){
            return h.div({
                id: "PageTitle",
                style:{
                    margin:"auto",
                    "padding-top":"5em",
                    "padding-bottom":"5em",
                    width:"380px"
                }
            },
            this.buildTitle(),
            this.buildSubtitle());
        }

        render(){
            return new Promise(resolve => {
                this.component = this.buildComponent();
                this.container.innerHTML = "";
                this.container.appendChild(this.component);
                resolve(this);
            });
        }
    };

});
