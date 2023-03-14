// const num = [1, 2, 3, 4, 5]

// let sumOftheNum = num.reduce((accu, curr) => {
//   console.log(accu)
//   console.log(curr)
//   return accu + curr
// }, 0)

// console.log(sumOftheNum)const numbers = [1, 5, 2, 9, 3];


// Not Understood.....................................................
const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];

let frequentName = fruits.reduce((allNames, name)=>{
  
  if (name in allNames) {
    allNames[name] = allNames[name] + 1
  } else {
    allNames[name] = 1
  }
 return allNames
 }, {})

console.log(frequentName)

// 
let lifeSpan = 3;
function gamePlay() {
  function play() {
    lifeSpan--
  }
}