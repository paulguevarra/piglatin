$(document).ready(function(){
  $("form#input").submit(function(event) {
    event.preventDefault();

    var userInput1 = $("input#word").val();
    var result = userInput1;
    $("#result").text(result);
  });
});
