function barcodesArray(inputs) {
  this.inputs = inputs;
}
barcodesArray.prototype.getBarcodes=function(){
  var barcodes = [];
  for (var i = 0; i < this.inputs.length; i++){
      var barcodeNum = this.inputs[i].split("-");
      var barcode = barcodeNum[0];
      var num = barcodeNum[1] || 1;
      for (var j = 0; j < num; j++){
          barcodes.push(barcode);
      }
  }
  return barcodes;
};


 // var barcodeArray = barcodeText.split('-');
 //    var item = getItem(barcodeArray[0], this.allItems);
 //    var quantity = parseFloat(barcodeArray[1]) || 1;
 //
 //    return new CartItem(item, quantity);
