function every(array, test) {
    
    for (let values of array){
        if (!(test(values) == true)) return false;
    } return true;
    
    
}
function every2(array, predicate) {
  return !array.some((element) => !predicate(element));
}
//Implement every as a function that takes an array and a predicate function as 
//parameters.Write two versions, one using a loop and one using the some method.


console.log(some(every([1, 3, 5], (n) => n < 10)));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true


const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
