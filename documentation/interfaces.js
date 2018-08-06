function interfaces() {
    function printLabel(labellledObj) {
        console.log(labellledObj.label);
    }
    var obj = {
        size: 10,
        label: "lol I'm a label."
    };
    printLabel(obj);
}
interfaces();
