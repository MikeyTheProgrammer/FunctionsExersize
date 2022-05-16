// exersize 1
// const multiply = (a,b) => {
//     return a*b
// }
// console.log(multiply(4,3));

//ex2
// const sumnumber = (a,b,c) => {
//     return a+b+c
// }
// console.log(sumnumber(1,8,6))

//ex3
// const leftover = (a,b) => {
//     return a%b
// }
// console.log(leftover(8,3));

//ex4

// let mana = (a,b) => {
//     if (b = 0){
//         console.log("Illegal");
//     }
//     else{
//     return a/b}
// }

//exercise5
// const factorial = (a) => {
//     if (a === 0 || a === 1) {
//         return 1;
//     }
//     for (index = (a - 1); index >= 1; index--) {
//         a = a * index
//     }
//     return a
// }
// console.log(factorial(4))


//ex6
// const addbeep = (string) => {
//     return string + "beep"
// }
// console.log (addbeep("hey "))

//ex7
// const mul2nums = (a, b) => {
//     if (a*b < 0) {
//         return 0
//     }
//     else {
//         return a*b
//     }
// }
// console.log(mul2nums(-1, 2))

// ex8
// const mul2nums = (a, b) => {
//     let sum = 0;
//     for(index = 0; index < b; index++) {
//         sum = sum + a
//     }
//     return sum }


// ex9
// const nulNums = (a, b) => {
//     let sum = 0;
//     for (i = 0; i < b; i++) {
//         sum += a
//     }
//     return sum
// }

// const nulnums2 = (a, b) => {
//     let sum = 1;
//     for (index = 0; index < b; index++) { sum = nulNums(sum, a) } 
//     return sum
// }

// console.log(nulnums2(3, 3))

//ex10
// const isPoli = (string) => {
//     const len = string.length;  
//       for (let i = 0; i < len - 1; i++) {  
//           if (string[i] !== string[len - 1 - i]) {  
//             return "It is not a palindrome";  
//         }  
//     } 
//     return "is Poli"
// }


