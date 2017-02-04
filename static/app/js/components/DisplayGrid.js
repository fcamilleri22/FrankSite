define(["app/util/HTMLFragmentBuilder","app/components/DisplayGridRow"],
(h, DisplayGridRow) => {

    const DisplayGrid = class {

        //Variables declared but not instantiated here are instantiated after render.
        constructor(items, container){
            this.container = container;
            this.items = items;
            this.grid = this.divideItemsIntoArrays(items, 1);
            this.rows = [];
            this.component;
        }

        divideItemsIntoArrays(objects, objectsPerArray){
            //if we've got more items than designated per array,
            if (objects.length < objectsPerArray){
                return [objects];//Return item array as singleton array of arrays
            }
            let retArray = [];
            let objItr = 0;
            let subArray = [];
            objects.forEach(item => {
                subArray.push(item);
                if (++objItr == objectsPerArray){
                    retArray.push(subArray);
                    subArray = [];
                    objItr = 0;
                }
            });
            if (subArray.length != 0){
                retArray.push(subArray);
            }
            return retArray;
        }

        buildDisplayGridRow(itemRow, idItr){
            let rowContainer = h.div({id:`${this.container.className}row${idItr}`});
            return new DisplayGridRow(itemRow, rowContainer);
        }

        clearOtherDisplays(excludedRowId){
            let displaysToClear = this.rows.filter(row => row.id != excludedRowId);
            displaysToClear.forEach(clearMe => clearMe.clearDisplay());
        }

        render(){
            return new Promise((resolve) => {
                this.component = h.div({className:"DisplayGrid", style:{padding:"1em 0em"}});
                let rowPs = [];
                let rowItr = 0;
                this.grid.forEach(itemRow => {
                    let row = this.buildDisplayGridRow(itemRow, rowItr++);
                    rowPs.push(row.render());
                });
                Promise.all(rowPs).then((rows) => {
                    rows.forEach(row => {
                        row.buttons.forEach(button =>
                            button.addClickListener(()=>this.clearOtherDisplays(row.id)));
                        this.component.appendChild(row.container);
                        this.rows.push(row);
                    });
                    this.container.innerHTML = "";
                    this.container.appendChild(this.component);
                    resolve(this);
                });
            });
        }

    };
    return DisplayGrid;
});
