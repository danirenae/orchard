
/*global*/

"use strict";

const outputDiv = $("#output");
console.log("main", outputDiv);

//Create a plant function
//Plant should have a property of height
function Plant(){
  this.height =0;
}

//Create a tree function
// Tree should have a property of branches.
function Tree(){
  this.branches = 0;
}
//Plant should be the prototype of tree
Tree.prototype = new Plant();

//The plant prototype should have two methods on it: increaseHeight and decreaseHeight
// increaseHeight should increase the value of the height property by the amount passed in as an argument.

Plant.prototype.increaseHeight = function(growth){
  this.height += growth;
}

// decreaseHeight should decrease the value of the height property by the amount passed in as an argument.


Plant.prototype.decreaseHeight = function (growth){
  this.height += growth;
}

// The Tree prototype should have two methods on it: grow and trim.
// The grow method should accept an integer value as input.
// The grow method should increase the height of the tree.


Tree.prototype.grow = function(amount){
  this.increaseHeight(amount);
}


// The trim method should accept an integer value as input.
// The trim method should decrease the height of the tree.
// When the trim method is called, the number of branches should decrease by one.

Tree.prototype.trim = function(amount){
  this.decreaseHeight(amount);
  this.brances-=1;
}
// Each time the height of a tree increases by 10, the value of branch should increase by one.

// Create a PearTree instance of Tree. var PearTree = new Tree();
let PearTree = new Tree();
// Create an OakTree instance of Tree.
let OakTree = new Tree();
console.log(PearTree);
// Every second, increase the height the pear tree by some integer value and increase the height the oak tree by
// some integer value that is larger than what you used for the pear tree.

// Also output the current height of each tree and how many branches it has to the DOM.
