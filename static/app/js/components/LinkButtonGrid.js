define(["app/util/HTMLFragmentBuilder","app/components/LinkButtonRow","app/components/ButtonGrid"],
(h, LinkButtonRow, ButtonGrid)=> {
    return class LinkButtonGrid extends ButtonGrid {
        constructor(items, container, componentStyles){
            super(items, container, LinkButtonRow, componentStyles);
        }
    };
});
