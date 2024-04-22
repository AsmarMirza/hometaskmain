// function outer(){
//     let count=5
//     return function inner(){
//         count++
//         return count;
//     }
// }
// outer();
// const result=outer()
// console.log(result());
// result()
// result()
// console.log(result());

function calculator() {
  let memory = 0;
  return {
    add(val) {
      memory += val;
      return memory;
    },
    substruction(val) {
      memory -= val;
      return memory;
    },
    multiplication(val = 5) {
      memory *= val;
      return memory;
    },
    division(val) {
      memory /= val;
      return memory;
    },
    clear(val = 0) {
      memory = val;
    },
  };
}
const result = calculator(5);

console.log(result.add(4));
console.log(result.multiplication(10));
console.log(result.division(5));
console.log(result.substruction(1));
