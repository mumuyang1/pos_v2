function cart(item,quantity){

  this.quantity=quantity;


}
cart_item.prototype.quantity = function(barcode){
  var commodity = loadAllItems();
  var quantity = [];

  for(var i=0; i<commodity.length; i++){
       goodsSum[i] = 0;
      }

  for(var i=0; i<barcodes.length; i++){
    for(var j=0;j<commodity.length;j++){
      if (barcodes[i]===commodity[j].barcode){
        quantity[j]++;
                   }
    }
return quantity;
}
