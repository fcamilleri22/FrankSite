define(["app/util/HTMLFragmentBuilder"],
(h) => {
    return class ParagraphSection {
        constructor(container){
            this.container = container;
            this.titles = [];
            this.contents = [];
            this.boldStyle = {color:"#0088cc"};
            this.emphasisStyle = {};
            this.underlineStyle = {color:"#0088cc"};
            this.component;
        }

        buildTitle(title){
            let formattedContent = this.addStyleToBoldText(title);
            formattedContent = this.addStyleToEmphasisText(formattedContent);
            formattedContent = this.addStyleToUnderlinedText(formattedContent);
            return h.h2({
                class: "paragraph-title",
                style: {
                    "color": "#999999",
                    "font-family": "Lato"
                }
            }, formattedContent);
        }

        buildContent(content){
            let formattedContent = this.addStyleToBoldText(content);
            formattedContent = this.addStyleToEmphasisText(formattedContent);
            formattedContent = this.addStyleToUnderlinedText(formattedContent);
            return h.p({
                class: "paragraph",
                style: {
                    "color": "#999999",
                    "font-family": "Lato"
                }
            }, formattedContent);
        }

        addStyleToBoldText(text){
            let htmlReplace = `<b style="`
            Object.keys(this.boldStyle).forEach(styleProp =>{
                htmlReplace = `${htmlReplace} ${styleProp}: `+this.boldStyle[styleProp]+";";
            })
            return text.replace(/<b>/g, htmlReplace+`">`);
        }

        addStyleToEmphasisText(text){
            let htmlReplace = `<em style="`
            Object.keys(this.emphasisStyle).forEach(styleProp =>{
                htmlReplace = `${htmlReplace} ${styleProp}: `+this.emphasisStyle[styleProp]+";";
            })
            return text.replace(/<em>/g, htmlReplace+`">`);
        }

        addStyleToUnderlinedText(text){
            let htmlReplace = `<u style="`
            Object.keys(this.underlineStyle).forEach(styleProp =>{
                htmlReplace = `${htmlReplace} ${styleProp}: `+this.underlineStyle[styleProp]+";";
            })
            return text.replace(/<u>/g, htmlReplace+`">`);
        }

        addContent(paragraph, title){
            this.contents.push(paragraph ? paragraph : "");
            this.titles.push(title ? title : "");
        }

        buildSectionContent(){
            let itr = 0;
            let retVal = [];
            while (itr != this.contents.length){
                if (this.titles[itr] != "") retVal.push(this.buildTitle(this.titles[itr]));
                if (this.contents[itr] != "") retVal.push(this.buildContent(this.contents[itr]));
                ++itr;
            }
            return retVal;
        }

        buildComponent(){
            return h.div({
                class: "Paragraph",
                style: {
                    padding:"1em",
                    margin:"auto",
                    "text-align": "left",
                    width: "80%"
                }
            },
            ...this.buildSectionContent());
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
