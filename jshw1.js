// ## Exercise1

// #### 1.1 let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
//     - What is the length of the array?
//     - Write a function called myAlphabetLength which console.logs the length of the array.

// #### 1.2 Declare and initialize an array called 'Planets' with 5 string values with names of planets. 
//     - Console.log each item in the array. Also console.log the index for each planet.


// #### 1.3 Console.log each item in this array: let myArr = [ 1, 2, 'One', true]; 
   		
let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const myAlphabetLength = myAlphabet.length;
console.log(myAlphabetLength);

/////////////////////////

const Planets = ['earth','sun','jupiter','urenus','moon']
for(let i =0; i<Planets.length; i++){
    console.log(i,Planets[i]);
}

/////////////////////////

let myArr = [ 1, 2, 'One', true]; 
myArr.forEach(i => console.log(i));