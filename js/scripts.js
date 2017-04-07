function Pizza(size, topping1, topping2, topping3) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
}


// function topping(topping1, topping2, topping3){
//   var toppingTotal = 0;
//   if
// }
// 
// for (var i = 4, i <)
//
//

function totalPrice(size, topping1, topping2, topping3){
  var cost = 10;
  if((size === 4)&&(topping1 === 1)&&(topping2 === 2)&&(topping3 === 3)){
    cost +=12;
  }else if((size === 4)&&(topping1 === 1)&&(topping2 === 2)){
    cost +=10;
  }else if ((size === 4)&&(topping1 === 1)){
      cost += 9;
  }else if((size === 3)&&(topping3 === 3)&&(topping2 === 2)&&(topping1 === 1)){
    cost +=10;
  }else if((size === 3)&&(topping2 === 2)&&(topping1 === 1)){
    cost +=8;
  }else if ((size === 3)&&(topping1 === 1)){
      cost += 7;
  }else if((size === 2)&&(topping3 === 3)&&(topping2 === 2)&&(topping1 === 1)){
      cost +=8;
    }else if((size === 2)&&(topping2 === 2)&&(topping1 === 1)){
      cost +=6;
    }else if ((size === 2)&&(topping1 === 1)){
        cost += 5;
    }else if((size === 1)&&(topping3 === 3)&&(topping2 === 2)&&(topping1 === 1)){
        cost +=7;
      }else if((size === 1)&&(topping2 === 2)&&(topping1 === 1)){
        cost +=6;
      }else if ((size === 1)&&(topping1 === 1)){
          cost += 5;
        }return "$" + cost + ".00.";
}


Pizza.prototype.result = function () {
return  "Thanks for Ordering! Your pizza will be ready soon! Your Total is " + cost
}


$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();

    var size = parseInt($("#size").val());
    var topping1 = parseInt($("#topping1").val());
    var topping2 = parseInt($("#topping2").val());
    var topping3 = parseInt($("#topping3").val());

    var newPizza = new Pizza(size, topping1, topping2, topping3);
    cost = totalPrice(newPizza.size, newPizza.topping1, newPizza.topping2, newPizza.topping3);

    $("#size").text("");
    $("#topping1").text("");
    $("#topping2").text("");
    $("#topping3").text("");


    $("#totalCost").text(newPizza.result);
    $("#order").show();
  });
});
