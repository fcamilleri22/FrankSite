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
                    "font-family": "Lato",
                    "text-align":"center",
                    width:"100%",
                    margin:"auto",
                    color:"#bbbbbb",
                    "font-size": "3em"
                }
            }, this.title);
        }

        buildSubtitle(){
            return h.h3({
                id: "subtitle",
                style:{
                    "font-family": "Lato",
                    "text-align":"center",
                    margin:"auto",
                    color:"#bbbbbb",
                    width:"100%",
                    "font-size": "1.5em"
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
                    width:"90%"
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
