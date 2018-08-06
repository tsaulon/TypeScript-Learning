function firstInterface(){

    function printLabel(labellledObj: {label: string}){
        console.log(labellledObj.label)
    }

    let obj = {
        size: 10,
        label: "lol I'm a label."
    }

    printLabel(obj)
}

firstInterface()

function secondInterface(){
    
    interface LabelledValue{
        label: string;
    }

    function printLabel(labelledObj: LabelledValue){
        console.log(labelledObj.label)
    }
}

secondInterface();