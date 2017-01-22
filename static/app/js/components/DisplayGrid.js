define(["app/util/HTMLFragmentBuilder","app/components/DisplayGridRow"],
(hfb, DisplayGridRow) => {
    const DisplayGrid = class {

        constructor(container){
            this.container = container;
        }

        render(){
            return new Promise((resolve) => {
                let row = new DisplayGridRow(["1","2","3","4"], this.container);
                row.render();
                resolve();
            });
        }

    };
    return DisplayGrid;
});
