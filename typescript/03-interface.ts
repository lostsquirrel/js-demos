function printLabelX(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let myObj1 = {size: 10, label: "Size 10 Object"};
printLabel(myObj1);