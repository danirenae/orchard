// //CONST - this can not be reassigned // good for assigning jquery selectors
// const a=8;
// console.log("a", a);
// // a=12
// // console.log("a",a);


// //LET - this is very similar to var, but is only used in the block that it's assigned in // is reassignable
// let b=8;
// console.log(b);
// b=12;
// console.log(b);

// //demonstrating how let is similar to var
// //testing with var
// function varTest(){
//   var x=1;
//   if(true){
//     var x=2;
//     console.log("inside if", x);
//   }
//   console.log("outside if", x);
// }
// varTest();

// //testing with let

// function letTest() {
//   let y=1;
//   if(true){
//     let y=12;
//     console.log("inside if", y);
//   }
//   console.log("outside if", y);
// }
// letTest();

// //ARROW FUNCTIONS
// //ES5
// var sum = function(){
//   let a=1, b=2;
//   return a+b;
// }
// console.log("hardcoded sum in ES5", sum());

// //ES6 - this is the same function below, but written in ES6
// var sum2 = () =>{
//   let a=1, b=2;
//   return a+b;
// }
// console.log("hardcoded sum in ES6", sum());

// //another example with arrow functions
// //ES5
// var reflect = function(value){
//   return value;
// }
// console.log("reflect in ES5", reflect('ES5 is so yesterday'));

// //ES6 - super short way to write it in ES6
// var reflect2 = (value) => value;
// console.log("reflect2 in ES6", reflect2('ES6 is the new hotness'));

// //another example of arrow functions
// //ES5
// var realSum = function(num1, num2){
//   return num1+num2;
// }
// console.log("realsum in ES5", realSum(2,3));

// //ES6
// var realSum2 = (num1, num2) =>{
//   return num1 + num2;
// }
// console.log("realsum in ES6", realSum2(4,5));

// //STRING TEMPLATES
// let m="biteme";
// console.log("m", m);
// let r=`hello my name is ${m}`;
// console.log("r",r);

// //PROPERTY SHORTHAND
// //object literal property shorthand
// let wow="Hi there", es6="ES6", numNum =()=>{console.log("howdy")}

// let myOldObject = {
//   wow:wow,
//   es6:es6,
//   numNum:numNum
// }
// console.log("myOldObject", myOldObject);

// //as long as the key end values are the same you can write it like this......
// let myNewObject ={
//   wow,es6,numNum
// }
// console.log("myNewObject", myNewObject);

// //METHOD PROPERTIES
// //ES5
// var es5Obj = {
//   foo: function(){console.log("foo")},
//   bar: function(){console.log("foo")},
// }
// console.log("es5Obj", es5Obj);

// //ES6
// var es6Obj = {
//   foo(){console.log("foo")},
//   bar(){console.log("bar")}
// }




























