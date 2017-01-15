define(
() => {
    //It only builds components, I swear!
    //Maybe it should be paired with an object that maintains states...
    //TODO: Handle Style!
    const HTMLFragmentBuilder = class {

        static makeElement(type, propsOrContent, ...moreContent){
            //first, the trivial -- no content, no props, just types -- if no type, deeper error
            const el = document.createElement(type);

            if (moreContent.length == 0 && !propsOrContent){
                return el;
            }

            if (!propsOrContent.tagName){ // if it has a tagName, it's a DOM object. if its not, it's a property set
                //extract out for readability
                Object.keys(propsOrContent).forEach(prop => el[prop] = propsOrContent[prop]);
                if (moreContent.length == 1 && typeof moreContent[0] == "string"){
                    el.textContent = moreContent[0];
                    return el;
                }
            }

            if (moreContent){
                moreContent.forEach((content) => el.appendChild(content));
            }

            return el;
        }

        static span(...args){return this.makeElement("span", ...args);}
        static div(...args){return this.makeElement("div", ...args);}
    };

    return HTMLFragmentBuilder;
});
