define(["app/util/HTMLFragmentBuilder"],
(h) => {
    return class ButtonGrid {
        constructor(items, container, rowType, componentStyles){
            //Style Objects
            let {rowStyles, componentStyle} = componentStyles;
            [this.rowStyles, this.componentStyle] = [rowStyles, componentStyle];

            //Data Objects
            this.items = items;
            this.id = container.id;
            this.grid = this.divideItemsIntoArrays(this.items);

            //JS Component Objects
            this.row = rowType;
            this.rows = [];

            //HTML Component Objects
            this.component;

            //State Objects
            this.state = "Unrendered";
            this.initialWidth = window.innerWidth; //For blocking responsiveness when only length changed
            window.addEventListener("resize", ()=>this.respond());
        }

        divideItemsIntoArrays(objects){
            let objectsPerArray = this.calculateItemsPerRow(400);
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

        calculateItemsPerRow(itemSizePx){
            return Math.round(window.innerWidth/itemSizePx);
        }

        buildButtonRow(itemRow, idItr){
            let rowContainer = h.div({id:`${this.container.className}row${idItr}`});
            return new this.row(itemRow, rowContainer, this.rowStyles);
        }

        respond(){
            if (this.initialWidth == window.innerWidth) return; //Disregard if width didn't change.
            this.grid = this.divideItemsIntoArrays(this.items);
            //this.initialWidth = window.innerWidth;  //surprisingly necessary.
            if (this.state == "Rendered") return this.render();
            else return Promise.resolve(this);
        }

        render(){
            return new Promise(resolve => {
                this.component = h.div({
                    className: "ButtonGrid",
                    style: this.componentStyle
                });
                let rowPs = [];
                let rowItr = 0;
                this.grid.forEach(itemRow => {
                    let row = this.buildButtonRow(itemRow, rowItr++);
                    rowPs.push(row.render());
                });
                Promise.all(rowPs).then(rows =>{
                    rows.forEach(row => {
                        this.component.appendChild(row.container);
                        this.rows.push(row);
                    });
                });
                this.container.innerHTML = "";
                this.container.appendChild(this.component);
                this.state = "Rendered";
                resolve(this);
            });
        }

    };
});
