function Pizza(size, topping1, topping2, topping3) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
}


Pizza.prototype.totalCost = function () {
  var cost = 10;
  if((this.size === 4)&&(this.topping1 === 1)&&(this.topping2 === 2)&&(this.topping3 === 3)){
    cost +=12;
  }else if((this.size === 4)&&(this.topping1 === 1)&&(this.topping2 === 2)){
    cost +=10;
  }else if ((this.size === 4)&&(this.topping1 === 1)){
      cost += 9;
  }else if((this.size === 3)&&(this.topping3 === 3)&&(this.topping2 === 2)&&(this.topping1 === 1)){
    cost +=10;
  }else if((this.size === 3)&&(this.topping2 === 2)&&(this.topping1 === 1)){
    cost +=8;
  }else if ((this.size === 3)&&(this.topping1 === 1)){
      cost += 7;
  }else if((this.size === 2)&&(this.topping3 === 3)&&(this.topping2 === 2)&&(this.topping1 === 1)){
    cost +=8;
  }else if((this.size === 2)&&(this.topping2 === 2)&&(this.topping1 === 1)){
    cost +=6;
  }else if ((this.size === 2)&&(this.topping1 === 1)){
      cost += 5;
  }else if((this.size === 1)&&(this.topping3 === 3)&&(this.topping2 === 2)&&(this.topping1 === 1)){
      cost +=7;
  }else if((this.size === 1)&&(this.topping2 === 2)&&(this.topping1 === 1)){
    cost +=6;
  }else if ((this.size === 1)&&(this.topping1 === 1)){
      cost += 5;
  }return "Thanks for Ordering! Your pizza will be ready soon! Your Total is " + "$" + cost + ".00.";
}


$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();

    var size = parseInt($("#size").val());
    var topping1 = parseInt($("#topping1").val());
    var topping2 = parseInt($("#topping2").val());
    var topping3 = parseInt($("#topping3").val());

    var newPizza = new Pizza(size, topping1, topping2, topping3);
    var cost = newPizza.totalCost();

    $("#size").text("");
    $("#topping1").text("");
    $("#topping2").text("");
    $("#topping3").text("");

    $("#order").show();
    $("#totalCost").text(cost);

  });
});
