

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
const [a] = names;
const nameSplit = a.split("");
let firstLetter = nameSplit[0];
const arrayofMatchingFirstLetter=names.filter((name)=>{
    const namesSplit= name.split("");
    if(namesSplit[0]===firstLetter){
        return name;
    }
}) 
console.log(arrayofMatchingFirstLetter);