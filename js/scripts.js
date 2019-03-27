// Business (or back-end) logic:

var add = function(num1, num2){
return num1 + num2;
};

var subtract = function(num1, num2) {
  return num1 - num2;
}
var divide = function(num1, num2) {
  return num1 / num2;
}

var multiply = function(num1, num2) {
  return num1 * num2;
}


// Everything below this line is user interface (or front-end) logic:
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("#add1").val());
    var num2 = parseInt($("#add2").val());
    var result = add(num1, num2);
    $(".output1").text(result);

  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("#sub1").val());
    var num2 = parseInt($("#sub2").val());
    var result = subtract(num1, num2);
    $(".output2").text(result);

  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("#mult1").val());
    var num2 = parseInt($("#mult2").val());
    var result = multiply(num1, num2);
    $(".output3").text(result);

  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("#divide1").val());
    var num2 = parseInt($("#divide2").val());
    var result = divide(num1, num2);
    $(".output4").text(result);
  });
});
