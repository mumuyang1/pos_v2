function Inventory(date){
  this.date = date;
  this.subtotal;
  this.saveSum;
}
Inventory.prototype.outputs = function() {
  var print = '***<没钱赚商店>购物清单***\n';
  print += '打印时间：' + this.date + '\n';
  return print;
};
Inventory.prototype.details = function(quantity) {
  var print = '----------------------\n';
  for (var i=0; i<quantity.length; i++)
    {
       if(quantity[i]!=0)
       print +='名称：'+commodity[i].name+'，数量：'+quantity[i]+commodity[i].unit+
      '，单价：'+(commodity[i].price).toFixed(2)+'(元)，小计：'+(subtotal[i]).toFixed(2)+'(元)\n';
    }
  }
  return print;
};
Inventory.prototype.saveoutputs = function(quantiy) {
  var print = '----------------------\n挥泪赠送商品：\n';
  for(var i=0; i<save.length; i++)
    {
      if (save[i] != 0)
      print += '名称：'+commodity[i].name+'，数量：'+saveSum[i]+commodity[i].unit+'\n';
      totalSave += save[i];
    }
  }
  return print;
};

Inventory.prototype.last = function() {
  for(var i=0; i<subtotal.length; i++)
    { total+=subtotal[i]; }
    print += '总计：'+total.toFixed(2)+'(元)\n';
    print += '节省：'+totalSave.toFixed(2)+'(元)\n'
    print += '**********************';
    }
  return print;
};




//   var print = '***<没钱赚商店>购物清单***\n';
//   print += '打印时间：' + formattedDateString + '\n' ;
//   print += '----------------------\n';
//  for (var i=0; i<goodsSum.length; i++)
//   {
//      if(goodsSum[i]!=0)
//      print +='名称：'+commodity[i].name+'，数量：'+goodsSum[i]+commodity[i].unit+
//     '，单价：'+(commodity[i].price).toFixed(2)+'(元)，小计：'+(subtotal[i]).toFixed(2)+'(元)\n';
//   }
// print += '----------------------\n';
// print += '挥泪赠送商品：\n';
// for(var i=0; i<save.length; i++)
//   {
//     if (save[i] != 0)
//     print += '名称：'+commodity[i].name+'，数量：'+saveSum[i]+commodity[i].unit+'\n';
//     totalSave += save[i];
//   }
// print += '----------------------\n';
// for(var i=0; i<subtotal.length; i++)
//   { total+=subtotal[i]; }
// print += '总计：'+total.toFixed(2)+'(元)\n';
// print += '节省：'+totalSave.toFixed(2)+'(元)\n'
// print += '**********************';
// console.log(print);
// }
