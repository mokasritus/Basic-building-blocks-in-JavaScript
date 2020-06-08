let myVariable = false;
if (myVariable === true) {
  console.log('The condition has been evaluated to true');
}


let a = 7;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a / 7);
}

//for (let i = 0; i <= 20; i++) {
  //  console.log(i);  
//}


function printNumbers(num) {
    for (let i = 0; i <= num; i++) {
        console.log(i);  
    }  
}
printNumbers(20)

function greatings(name) {
    return 'Hello ' + name +'!'
    
}

console.log(greatings('Tomi'))


let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };

  printValues([0, 3, 6, 7, 9])

  let myNumbers = [10, 20, 30, 50, 12];
  myNumbers.forEach((number) => {
    // within the function I can tell what I want to do with the items
    console.log(number);
  });

  let numberArray=[0, 3, 6, 7, 9] 
  numberArray.forEach((num) => {
        console.log(num);
    });