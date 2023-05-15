function convertToOldRoman(n) {
    if (n === 1) {
      return "I";
    } else if (n === 5) {
      return "V";
    } else if (n === 10) {
      return "X";
    } else if (n === 50) {
      return "L";
    } else if (n === 100) {
      return "C";
    } else if (n === 500) {
      return "D";
    } else if (n === 1000) {
      return "M";
    } else if ( 1 < n && n< 5 ){
       return "I".repeat(n);
    }
     else if (5 <= n && n < 10) {
        return divide5(n);
    }
     else if (10 <= n && n < 50){
        return divide10(n); 
    }
     else if (50 < n && n < 100){
        return divide50(n);
     
    }
     else if(100 < n && n<500){
       return divide100(n); 
    }
     else if(500<n && n<1000){
        return divide500(n); 
    }
    

}
convertToOldRoman(432);


function divide5(num) {
  let n1 = "V".repeat(num / 5);
  let n2 = "I".repeat(num % 5);
  return n1 + n2;
}
function divide10(num) {
    let n1 = "X".repeat(num / 10);
    let n2 = num % 10;
    let n3 = divide5(n2);
    return n1 + n3;     
}
function divide50(num) {
  let n1 = "L".repeat(num / 50);
  let n2 = num % 50;
  let n3 = divide10(n2);
  return n1 + n3;
}


function divide100(num) {
  let n1 = "C".repeat(num / 100);
  let n2 = num % 100;
  let n3 = divide50(n2);
  //let n3 = divide10(n2);
  return n1 + n3;
}

function divide500(num) {
  let n1 = "D".repeat(num / 500);
  let n2 = num % 500;
  let n3 = divide100(n2);
  return n1 + n3;
}


module.exports = convertToOldRoman;
