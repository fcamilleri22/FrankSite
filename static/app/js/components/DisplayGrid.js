define(["app/util/HTMLFragmentBuilder"],
(hfb) => {
    const DisplayGrid = class {
        constructor(){
            this.prop1 =    hfb.div({className:"div1"},
                                hfb.span({className:"span1"}, "text content"),
                                hfb.span({className:"span2"}, "more content!")
                            );
            //this.prop1 = hfb.span({className:"span2"}, "more content!");
        }
    };
    return DisplayGrid;
});
