define(
() => {
    //It only builds components, I swear!
    //Maybe it should be paired with an object that maintains states...
    //TODO: Handle Style!
    const HTMLFragmentBuilder = class {

        static makeElement(type, propsOrContent, ...moreContent){
            //first, the trivial -- no content, no props, just types -- if no type, deeper error
            const el = document.createElement(type);

            //if we don't have any properties or more content, we're done.
            if (moreContent.length == 0 && !propsOrContent){
                return el;
            }

            //If propsOrContent is not more HTML content.
            if (!(propsOrContent instanceof window.Element)){
                //Add its props and styling
                Object.keys(propsOrContent).forEach(prop => {
                    if (prop == "style"){
                        Object.keys(propsOrContent.style).forEach(styleAttr => {
                            el.style[styleAttr] = propsOrContent.style[styleAttr];
                        });
                    }
                    else el[prop] = propsOrContent[prop];
                });
                //If trailing content is only a single string, append it.
                if (moreContent.length == 1 && typeof moreContent[0] == "string"){
                    el.innerHTML = moreContent[0];
                    return el;
                }
            }

            //If there's more content, append it.
            if (moreContent){
                moreContent.forEach((content) => {
                    el.appendChild(content);
                });
            }

            return el;
        }

        static span(...args){return this.makeElement("span", ...args);}
        static div(...args){return this.makeElement("div", ...args);}
        static p(...args){return this.makeElement("p", ...args);}
        static h1(...args){return this.makeElement("h1", ...args);}
        static h2(...args){return this.makeElement("h2", ...args);}
        static h3(...args){return this.makeElement("h3", ...args);}
        static h4(...args){return this.makeElement("h4", ...args);}
        static h5(...args){return this.makeElement("h5", ...args);}
        static h6(...args){return this.makeElement("h6", ...args);}
        static a(...args){return this.makeElement("a", ...args);}
        static br(){return this.makeElement("br");}



    };

    return HTMLFragmentBuilder;
});
