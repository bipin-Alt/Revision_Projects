

//Q.N.1 Given an array of numbers, use destructuring to extract the first two numbers and use map to square all of them.
 
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

// Q.N.2 From an array of names, destructure the first name and use filter to keep only names starting with that letter.

const  names =["Ram", "Hari", "Sita", "Joshef","Alspin","Rajesh"];
const [a,b] = names;
const nameSplit = b.split("");
let firstLetter = nameSplit[0];
const arrayofMatchingFirstLetter=names.filter((name)=>{
    const namesSplit= name.split("");
    if(namesSplit[0]===firstLetter){
        return name;
    }
}) 
console.log(arrayofMatchingFirstLetter);

//Write a function that takes an array of at least three numbers, destructure the first, second, and remaining numbers, then use reduce to calculate the sum of the rest.

const threeArr = ([a,b,c])=>{
  
}