//Stretch 1:

var addSix = createBase(6);
var addSeven = createBase(7);
function createBase(num){
    return function (someValue){
      return someValue + num;
    }
  }
//console.log(addSix(10));
//console.log(addSix(21));
//console.log(addSeven(7));


//Stretch 2:
