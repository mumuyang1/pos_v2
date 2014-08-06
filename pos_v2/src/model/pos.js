function Pos(quantity ,promotionCal) {
  this.quantity = quantity;
  this.promotionCal = promotionCal;
  }

  Pos.prototype.printInventory = function() {
  var commodity = loadAllItems();
  var promotions = loadPromotions();
  var total=0;
  var totalSave=0;
  var print = '***<没钱赚商店>购物清单***\n';
  print += '打印时间：' + Utils.formatter.formatDateTime(new Date()) + '\n' ;
  print += '----------------------\n';
  var subtotal = this.promotionCal.getSubtotal(commodity);
   for (var i=0; i<this.quantity.length; i++)
  {
     if(this.quantity[i]!=0)
     print += '名称：'+commodity[i].name+'，数量：'+this.quantity[i]+commodity[i].unit
             +'，单价：'+(commodity[i].price).toFixed(2)+'(元)，小计：'
             +subtotal[i].toFixed(2)+'(元)\n';
  }
  print += '----------------------\n';
  print += '挥泪赠送商品：\n';
  var save = [];
  var saveSum = [];
      for(var i=0; i<commodity.length; i++)
        {
          for(var j=0; j<promotions.length; j++)
            if(promotions[j].type === 'BUY_TWO_GET_ONE_FREE')
               {
                var proCodes = promotions[j].barcodes;
                for(var k = 0; k<proCodes.length; k++)
                  {
                   save[i]=(commodity[i].price*this.quantity[i]-subtotal[i]);
                   saveSum[i]=parseInt(this.quantity[i]/3);
                  }
          }
        }
for(var i=0; i<save.length; i++)
  {
    if (save[i] != 0)
    {print += '名称：'+commodity[i].name+'，数量：'+saveSum[i]
    +commodity[i].unit+'\n';
    totalSave += save[i];}
  }
print += '----------------------\n';
for(var i=0; i<subtotal.length; i++)
  { total+=subtotal[i]; }
print += '总计：'+total.toFixed(2)+'(元)\n';
print += '节省：'+totalSave.toFixed(2)+'(元)\n';
print += '**********************';
console.log(print);

};
