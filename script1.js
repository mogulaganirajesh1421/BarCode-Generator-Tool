function generateBarcode() {
    var value = document.getElementById("barcodeValue").value;
    JsBarcode("#barcode", value, {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 100,
        displayValue: true
    });
}
