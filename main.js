let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

// use reduce and concat.
// array.reduce(function (total, currentValue, currentIndex, arr), initialValue)
//
// Каква трябв ада бъде функцията: Трябв ада взима currentvalue и да го конкатва към следващо докато не края в един array
let concatArray = arrays.reduce(ConcatArray);

function ConcatArray(arraistogether, differentarrays) {
  return arraistogether.concat(differentarrays);
}
console.log(concatArray);
