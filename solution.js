// problem 1
// Basic javascript arithmetic operators using in function :

function mindGame(num){
    if(!isNaN(num)){
        return (((num * 3) + 10)/2)-5;
    }else{
        return "invalid number! please enter valid number";
    }
}
// let result = mindGame(5);
// console.log(result);



// problem 2
// a function for find even or odd number of a string total characters :

function evenOdd(string) {
  if (isNaN(string)) {
    let total = string.length;
    if (total % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  } else {
    return "invalid string! Please enter a string value";
  }
}
// const result = evenOdd('Phero');
// console.log(result);



// Problem 3:
// a function to find is Less or Greater than seven :

function isLGSeven(number) {
    if (isNaN(number)) {
    return "invalid number! please enter a valid number"
    }else{
        if(number < 7){
            return number-7;
        }else{
         return number * 2
        }
    }
}
// const result = isLGSeven(15);
// console.log(result);



//problem 4
// a function to finding Bad data :

function findingBadData(numbers){
    let badData=0;
    if(Array.isArray(numbers)){
        for(let i=0; i<numbers.length; i++){
            if(numbers[i] < 0){
                badData++;
            }
        }
        return badData;
    }else{
        return 'Not a valid array!'
    }
}
// let result = findingBadData([ 2, -5, -7, -13 ]);
// console.log(result);



// problem 5
//a function for  Convert gems into diamond

function gemsToDiamond(friend1, friend2, friend3) {
  if (isNaN(friend1) || isNaN(friend2) || isNaN(friend3)) {
    return "Invliad input";
  }
  let total = friend1 * 21 + friend2 * 32 + friend3 * 43;
  if (total > 2000) {
    return total - 2000;
  } else {
    return total;
  }
}
// let result = gemsToDiamond(1, 1, 1);
// console.log(result);
