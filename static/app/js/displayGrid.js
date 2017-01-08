define(["app/util"],
(util) => {
    return () => {
        console.log("What");

        const makeElement = (type, properties, content) => {
            const el = document.createElement(type);
            if (properties){
                Object.keys(properties).forEach(prop => el[prop] = properties[prop]);
            }

            if (typeof content == "string"){
                const textNode = document.createTextNode(content);
                el.appendChild(textNode);
            } else {
                el.appendChild(content);
            }


            return el;
        };

        const span = (properties, children) => makeElement("span", properties, children);
        const div = (properties, children) => makeElement("div", properties, children);





        document.body.appendChild(
            div({className:"Test anotherClass"},
                span({className:"Inner"}, "what")
            ));
    };

});
