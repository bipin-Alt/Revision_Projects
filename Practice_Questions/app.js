

//Given an array of numbers, use destructuring to extract the first two numbers and use map to square all of them.
 
let numbers = [1,23,4 ,5,6];
const squareTwo = ([a,b]) =>{
 console.log(a);
 console.log(b);


 let output = [];
 numbers.map((number)=>{
    output.push(number*number);
 });
console.log(output);
};
squareTwo(numbers);

