function PromotionCal(quantity){
  this.quantity = quantity;
  this.subtotal = [];

}

PromotionCal.prototype.getSubtotal = function(commodity){
var promotions = loadPromotions();
for(var i=0; i<commodity.length; i++)
  {
    for(var j=0; j<promotions.length; j++)
      if(promotions[j].type === 'BUY_TWO_GET_ONE_FREE')
         {
          var proCodes = promotions[j].barcodes;
          for(var k = 0; k<proCodes.length; k++)
            {
             if(commodity[i].barcode === proCodes[k])
              {
                this.subtotal[i] = ((parseInt(this.quantity[i]/3))*2*(commodity[i].price)
                +(this.quantity[i]%3)*(commodity[i].price));
                break;
              }
            else
               {this.subtotal[i]=commodity[i].price*this.quantity[i];}
              }
         }
  }
return this.subtotal;
}
// PromotionCal.prototype.getPromotionSave = function(commodity){
// this.commodity = commodity;
// var promotions = loadPromotions();
//   // var save = [];
//     for(var i=0; i<this.commodity.length; i++)
//       {
//         for(var j=0; j<promotions.length; j++)
//           if(promotions[j].type === 'BUY_TWO_GET_ONE_FREE')
//              {
//               var proCodes = promotions[j].barcodes;
//               for(var k = 0; k<proCodes.length; k++)
//                 {
//                  save[i]=(this.commodity[i].price*this.quantity[i]-subtotal[i]);
//                 }
//              }
//       }
// return save;
// }
// PromotionCal.prototype.getPromotionSavesum = function(commodity){
//   // var saveSum = [];
//     for(var i=0; i<this.commodity.length; i++)
//       {
//         for(var j=0; j<promotions.length; j++)
//           if(promotions[j].type === 'BUY_TWO_GET_ONE_FREE')
//              {
//               var proCodes = promotions[j].barcodes;
//               for(var k = 0; k<proCodes.length; k++)
//                 {
//                  saveSum[i]=parseInt(this.quantity[i]/3);
//                 }
//              }return saveSum;
//   }
