
var pro_caculator = function(subtotal){

    this.subtotal = subtotal;
};

pro_caculator.prototype.caculate = function(quantity){
var promotions = loadPromotions();
var save = [];
var saveSum = [];
var total = 0;
var totalSave = 0;
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
                subtotal[i]=((parseInt(quantity[i]/3))*2*(commodity[i].price)
                +(quantity[i]%3)*(commodity[i].price));
                break;
              }
            else
               {subtotal[i]=commodity[i].price*quantity[i];}
              }
             save[i]=(commodity[i].price*quantity[i]-subtotal[i]);
             saveSum[i]=parseInt(quantity[i]/3);
         }
  }
return subtotal;
}
