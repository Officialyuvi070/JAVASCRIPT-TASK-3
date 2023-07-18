//Data-Type Conversion basically 2 types.
// 1. Implicit type = automatic type conversion
// 2. Exciplicit type = type casting and it is user-defined

// 1. Implicit Type Conversion
// Implicit type conversion with addition operator
var stringNumber = "42";
var number = stringNumber + 10;
console.log(number); // Output: "4210"

// Implicit type conversion with subtraction operator
var stringNumber = "42";
var number = stringNumber - 10;
console.log(number); // Output: 32

// Implicit type conversion with multiplication operator
var stringNumber = "5";
var number = stringNumber * 2;
console.log(number); // Output: 10

// Implicit type conversion with division operator
var stringNumber = "10";
var number = stringNumber / 2;
console.log(number); // Output: 5

// Implicit type conversion with equality operator
var stringNumber = "42";
var number = 42;
console.log(stringNumber == number); // Output: true

//-----------------------------------------------------------------------------------------------------------------
//2. Exciplicit Type Conversion
// Conversion from string to number
var stringNumber = "42";
var number = parseInt(stringNumber);
console.log(number); // Output: 42

// Conversion from number to string
var number = 42;
var stringNumber = number.toString();
console.log(stringNumber); // Output: "42"

// Conversion from string to boolean
var stringBoolean = "true";
var booleanValue = Boolean(stringBoolean);
console.log(booleanValue); // Output: true

// Conversion from boolean to string
var booleanValue = true;
var stringBoolean = booleanValue.toString();
console.log(stringBoolean); // Output: "true"

// Conversion from number to boolean
var number = 0;
var booleanValue = Boolean(number);
console.log(booleanValue); // Output: false

// Conversion from boolean to number
var booleanValue = true;
var number = Number(booleanValue);
console.log(number); // Output: 1

//------------------------------------------------------------------------------------------------------
const obj = { name: "Yuvraj", age: 23, CEQ: 593  };
const strObj = JSON.stringify(obj);
console.log(strObj); // "{"name":"Yuvraj","age":23,"CEQ":593}"
console.log(typeof strObj); // "string"