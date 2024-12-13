//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring
// Using `let` (block-scoped)
let count = 10;
if (count > 5) {
  let message = "Count is greater than 5";
  console.log(message); 
}
// console.log(message); error

const pi = 3.14;
console.log(pi); 
// pi = 3.14159; error


//2
function add(a, b) {
    return a + b;
  }
  
  // arrow function
  const addArrow = (a, b) => a + b;
  
  console.log(add(2, 3));
  console.log(addArrow(2, 3));
  
  const obj = {
    value: 10,
    regularFunction: function () {
      console.log(this.value); 
    },
    arrowFunction: () => {
      console.log(this.value); 
    },
  };
  
  obj.regularFunction(); 
  obj.arrowFunction(); 
  



  const name = "lily";
const age = 11;

const message = `hi, my name is ${name}, and i am ${age} years old.`;
console.log(message);

const multiline = `
line 1
line 2
line 3
`;
console.log(multiline);


const numbers = [1, 2, 3, 4, 5];

const [first, second] = numbers;
console.log(first); 
console.log(second); 

const [, , third] = numbers;
console.log(third);

const [firstNum, ...rest] = numbers;
console.log(firstNum); 
console.log(rest);
