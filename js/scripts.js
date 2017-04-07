function Pizza(size, topping1, topping2, topping3) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
}

function sizePrice(size){
  var cost = 10;
  if (size === 4){
    cost += 8;
  }else if(size === 3){
    cost += 6;
  }else if(size === 2){
    cost += 4;
  }return cost;
}

function toppingPrice(topping1, topping2, topping3){
  var cost = sizePrice();
  if (topping1 === 1){
    cost += 2;
  }else if(topping2 === 2){
    cost += 3;
  }else if(topping3 === 3){
    cost += 4;
  }return cost;
}

Pizza.prototype.totalCost = function () {
  return sizePrice() + toppingPrice();
};

$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();

    var size = parseInt($("#size").val());
    var top1 = parseInt($("#topping1").val());
    var top2 = parseInt($("#topping2").val());
    var top3 = parseInt($("#topping3").val());

    var newPizza = new Pizza(size, topping1, topping2, topping3);
    cost = Pizza(newPizza.size, newPizza.topping1, newPizza.topping2, newPizza.topping3);

    $("#size").text("");
    $("#topping1").text("");
    $("#topping2").text("");
    $("#topping3").text("");

    $("#totalCost").text(cost);
    $("#order").show();
  });
});
