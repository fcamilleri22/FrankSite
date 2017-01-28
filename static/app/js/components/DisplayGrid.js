define(["app/util/HTMLFragmentBuilder","app/components/DisplayGridRow"],
(h, DisplayGridRow) => {

    const DisplayGrid = class {

        //Variables declared but not instantiated here are instantiated after render.
        constructor(items, container){
            this.container = container;
            this.items = items;
            this.model = this.divideItemsIntoArrays(items, 3);
            this.components = [];
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

        initializeDisplayGridRow(itemRow, idItr){
            let rowContainer = h.div({id:`${this.container.className}row${idItr}`});
            return new DisplayGridRow(itemRow, rowContainer);
        }

        clearAllOtherDisplays(excludedRowId){
            console.log(excludedRowId);
            let displaysToClear = this.components.filter(component => component.container.id != excludedRowId);
            displaysToClear.forEach(clearMe => clearMe.clearDisplay());
        }

        applyClearAllOtherDisplaysListener(components){
            components.forEach(component => {
                component.buttons.forEach(button => {
                    button.addEventListener("click",
                        () => this.clearAllOtherDisplays(component.id),
                        false
                    );
                });
            });
        }

        render(){
            return new Promise((resolve) => {
                let rows = document.createDocumentFragment();
                let rowPs = [];
                let rowItr = 0;
                this.model.forEach(itemRow => {
                    let row = this.initializeDisplayGridRow(itemRow, rowItr++);
                    rows.appendChild(row.container);
                    rowPs.push(row.render());
                    this.components.push(row);
                });
                Promise.all(rowPs).then((buttons) => {
                    this.container.innerHTML = "";
                    this.container.appendChild(rows);
                    resolve(this.container);
                });
            });
        }

    };
    return DisplayGrid;
});
