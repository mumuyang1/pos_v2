function Cart(barcodes){
  this.barcodes = barcodes;
  this.quantity = [];
}

Cart.prototype.calculate= function(){
  var commodity = loadAllItems();

  for(var i=0; i<commodity.length; i++){
       this.quantity[i] = 0;
  }

  for(var i=0; i<this.barcodes.length; i++){
    console.log(this.barcodes[i]);
    for(var j=0;j<commodity.length;j++){
      if (this.barcodes[i]===commodity[j].barcode){
        this.quantity[j]++;
      }
    }
  }
  return this.quantity;
};
