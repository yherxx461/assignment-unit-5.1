console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Ying',
  lastName: 'Her',
  hasSiblings: true,
  shoeCount: 5,
}; //end properties 

let favThreeFoods = ['khaopiak', 'papaya', 'red curry khaopoon'];

console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

 console.log('My name is',`${me.firstName} ${me.lastName}`);
fullName = console.log(`${me.firstName} ${me.lastName}`);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

console.log('first favorite food:', favThreeFoods[0]);
console.log('last favorite food:', favThreeFoods[2]);

let lastFoodItem = favThreeFoods[favThreeFoods.length-1];

console.log('Another way to console lastFoodItem:', lastFoodItem);


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

console.log(me.shoeCount);

shoeCount = me.shoeCount+=1;
console.log('shoeCount plus 1:', shoeCount);


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me['favoriteColor'] = 'black';

console.log('new property favoriteColor added to the initial object:', me);