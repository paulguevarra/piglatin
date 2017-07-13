// back end
var vowels = ["a", "e", "i", "o", "u"];
var consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q", "r","s","t","v","w","x","y","z"]
var emptyArray = [];
var work1 = [];
var work2 = [];

//var working = userInput1.splice(0,1);



// front end
$(document).ready(function(){
  $("form#input").submit(function(event) {

    event.preventDefault();

    var userInput1 = $("input#word").val();
    var result = emptyArray;
    var findQ = consonant.indexOf("q");
    var findU = vowels.indexOf("u");

    for(var i = 0; i < userInput1.length; i++) {
      if(vowels.includes(userInput1.charAt(0))) {
        emptyArray += userInput1 + "way";
      } else if (vowels.includes(userInput1.charAt(i))){
        if (userInput1.charAt(i) === "q" && userInput1.charAt(i+1) === "u") {
alert("check")
          // var newInput = userInput1.slice(0,i);
          // var endInput  = userInput1.slice(i++, userInput1.length);
          // var total  = endInput + newInput + 'ay';
          // alert(total);
          // return ;
        } else if (vowels.includes(userInput1.charAt(i))) {
          var newInput = userInput1.slice(0,i);
          var endInput  = userInput1.slice(i, userInput1.length);
          var total  = endInput + newInput + 'ay';
          alert(total);
          return ;
        // vowels.find(userInput1)
//alert ("check");
        }
      }
    }
    $("#result").text(result);
  });
});
