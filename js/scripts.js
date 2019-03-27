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
    $("#output").text(result);
  });
});
