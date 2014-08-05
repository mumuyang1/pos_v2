function barcodesArray(inputs) {
var barcodes = [];
for (var i = 0; i < inputs.length; i++){
    var barcodeNum = inputs.substring(11,inputs.length);
    var barcode = barcodeNum[0];
    var num = barcodeNum[1] || 1;
    for (var j = 0; j < Num; j++){
        barcodes.push(barcode);
      }
    return barcodes;
  }
