//object
let person = {
    name:'priya',
    age:23
}

console.log(person.name)

//array
let colors = ['red', 'green'];
console.log(colors.indexOf('red'))


//function
function greet(name){
    console.log("hello "+name);
}

//function call
greet('priya');

let a = 'white';
let b = 'blue';


//swap
let x = a;
a = b;
b = x;
console.log(a);
console.log(b);

//for in using the object at line 1
for (let key in person){
    console.log(key, person[key]);   //using the [] bracket method instead of dot
}

//for of using the array at line 9
for (let color of colors){
    console.log(color);
}

//factorial
function factorial(x) { 
  if (x === 0){
    return 1;
  }
  return x * factorial(x-1);        
}
console.log(factorial(5));

// max of two num
function max(a,b){
 return (a>b) ? a:b;
}
console.log(max(5,9));

function islandscape(width,height){
  return (width>height);
}
console.log(islandscape(14,5));

// divisible by 3 or 5 and some conditions
const output = FizzBuzz(15);
console.log(output);

function FizzBuzz(input){
  if (typeof input !== "number"){
    return NaN;
  }
  if ((input%3===0) && (input%5===0)){
    return "FizzBuzz";
  } 
  if (input%5===0){
    return "Buzz";
  }
  if (input%3===0){
    return "Fizz";
  }
  
return input;
  
}