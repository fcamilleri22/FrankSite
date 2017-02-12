define(["app/util/HTMLFragmentBuilder", "app/components/Button"],
(h, Button) => {
    return class LinkButton extends Button {
        constructor(label, container, link, style, hoverStyle){
            super(label, container, style, hoverStyle);
            this.link = link;
        }

        //overridden Render
        render(){
            super.render();
            this.component.onclick = () => window.location.href = this.link;
        }

        update(){
            super.update();
            this.component.href = this.link;
        }
    };
});
