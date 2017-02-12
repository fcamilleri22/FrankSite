define(["app/util/HTMLFragmentBuilder","app/components/DisplayGridRow"],
(h, DisplayGridRow) => {

    const DisplayGrid = class {

        //Variables declared but not instantiated here are instantiated after render.
        constructor(items, container, componentStyles){
            let {rowStyles, componentStyle} = componentStyles;
            [this.rowStyles, this.componentStyle] = [rowStyles, componentStyle];

            this.container = container;
            this.items = items.sort((a, b) =>{
                if (a.key > b.key) return 1;
                if (a.key < b.key) return -1;
                return 0;
            });
            this.grid = this.divideItemsIntoArrays(this.items);
            this.rows = [];
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

        buildDisplayGridRow(itemRow, idItr, paddingPx){
            let rowContainer = h.div({id:`${this.container.className}row${idItr}`});
            return new DisplayGridRow(itemRow, rowContainer, this.rowStyles, paddingPx);
        }

        deactivateOtherRows(excludedRowId){
            let rowsToDeactivate = this.rows.filter(row => row.id != excludedRowId);
            rowsToDeactivate.forEach(clearMe => {
                clearMe.clearDisplay();
                clearMe.deactivateAllButtons();
            });
        }

        getActiveButton(){
            if (this.state != "Rendered") return; //buttons can't be active if they're not clickable
            let activeButton = this.rows.reduce( (possibleButton, row) => {
                return Object.assign(possibleButton, row.getActiveButton());
            }, {});
            if (activeButton == {}) return; // If no buttons active, then return nothing.
            return activeButton;
        }

        respond(){
            if (this.initialWidth == window.innerWidth) return; //Disregard if width didn't change.
            this.grid = this.divideItemsIntoArrays(this.items);
            //this.initialWidth = window.innerWidth;  //surprisingly necessary.
            if (this.state == "Rendered") return this.render();
            else return Promise.resolve(this);
        }

        render(){
            let activeButton;
            let activeButtonRow;
            if (this.state == "Rendered"){ //If we've already rendered this, and this is a respond render.
                activeButton = this.getActiveButton();
            }
            return new Promise((resolve) => {
                this.component = h.div({
                    className:"DisplayGrid",
                    style: this.componentStyle
                });
                let rowPs = [];
                let rowItr = 0;
                let buttonSpacing = 0;
                let lastRow = this.grid[this.grid.length-1];
                this.grid.forEach(itemRow => {
                    if (itemRow != lastRow) {
                        buttonSpacing = `${100/itemRow.length}%`;
                    }
                    let row = this.buildDisplayGridRow(itemRow, rowItr++);
                    rowPs.push(row.render());
                });
                Promise.all(rowPs).then((rows) => {
                    rows.forEach(row => {
                        row.buttons.forEach(button => {
                            if (activeButton && button.label == activeButton.label && button.content == activeButton.content){
                                activeButtonRow = row;
                            }
                            button.addClickListener(()=>this.deactivateOtherRows(row.id));
                        });
                        this.component.appendChild(row.container);
                        this.rows.push(row);
                    });
                    if (activeButtonRow){
                        activeButtonRow.activateOrHideDisplay(activeButton.content);
                    }
                    this.container.innerHTML = "";
                    this.container.appendChild(this.component);
                    this.state = "Rendered";
                    resolve(this);
                });
            });
        }

    };
    return DisplayGrid;
});
