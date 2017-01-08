define(["app/util/HTMLFragmentBuilder"],
(hfb) => {
    const DisplayGrid = class {
        constructor(){
            let docFrag = document.createDocumentFragment();
            const init =    [hfb.div({className:"div1", color:"blue"},
                                hfb.span({className:"span1"}, "text content"),
                                hfb.span({className:"span2"}, "more content!")
                            ), hfb.div({className:"div2"}, "stuff")];
            init.forEach(el => docFrag.appendChild(el));
            this.prop1 = docFrag;
        }
    };
    return DisplayGrid;
});
