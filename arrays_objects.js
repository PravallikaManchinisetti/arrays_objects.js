
/*
fruits = ['Apple', 'Banana']
console.log(fruits.length)

first = fruits[0]// Apple
last = fruits[fruits.length - 1]// Banana
console.log(first);
console.log(last);
fruits.forEach(function(item, index, array) {
    console.log(item, index)
  }
  
newLength = fruits.push('Orange')// ["Apple", "Banana", "Orange"]
console.log(fruits);

last = fruits.pop() // remove Orange (from the end)// ["Apple", "Banana"]
console.log(fruits);

first = fruits.shift() // remove Apple from the front// ["Banana"]
console.log(fruits);

newLength = fruits.unshift('Strawberry') // add to the front// ["Strawberry", "Banana"]
console.log(fruits);

fruits.push('Mango')// ["Strawberry", "Banana", "Mango"]
pos = fruits.indexOf('Banana')// 1
console.log(pos);

removedItem = fruits.splice(pos, 1) // this is how to remove an item// ["Strawberry", "Mango"]
console.log(fruits);
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems)
// ["Turnip", "Radish"]

shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"

arr = ['this is the first element', 'this is the second element', 'this is the last element'];
console.log(arr[0]);            
console.log(arr[1]);             
console.log(arr[arr.length - 1]);

years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
//console.log(years.0)   // a syntax error
console.log(years[0])  // works properly
*/
fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length) // 3

fruits[5] = 'mango'
console.log(fruits[5])            // 'mango'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)  

fruits.length = 10
console.log(fruits)              // ['banana', 'apple', 'peach', undefined, 'mango', <5 empty items>]
console.log(Object.keys(fruits)) // ['0', '1', '2', '5']
console.log(fruits.length)       // 10
console.log(fruits[8])           // undefined

fruits.length = 2
console.log(Object.keys(fruits)) // ['0', '1']
console.log(fruits.length)       // 2
console.log(fruits);

console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray({foo: 123})); // false
console.log(Array.isArray('foobar'));   // false
console.log(Array.isArray(undefined));  // false

console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Array('a', 'b', 'c', 'd')));
console.log(Array.isArray(new Array(3)));

console.log(Array.isArray());
console.log(Array.isArray({}));
Array.isArray(null);
console.log(Array.isArray(undefined));
console.log(Array.isArray(17));
console.log(Array.isArray('Array'));
console.log(Array.isArray(true));
console.log(Array.isArray(false));

console.log(Array.of(7));       // [7] 
console.log(Array.of(1, 2, 3)); // [1, 2, 3]

console.log(Array(7));          // array of 7 empty slots
console.log(Array(1, 2, 3));    // [1, 2, 3]

array1 = ['a', 'b', 'c'];
array2 = ['d', 'e', 'f'];
array3 = array1.concat(array2);
 console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

num1 = [[1]];
num2 = [2, [3]];
numbers = num1.concat(num2);
console.log(numbers);// results in [[1], 2, [3]]
num1[0].push(4);// modify the first element of num1
console.log(numbers);// results in [[1, 4], 2, [3]]

array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


array1 = [5, 12, 8, 130, 44];
found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

array1 = [5, 12, 8, 130, 44];

isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

console.log([1, 2, 3].includes(2) )     // true
console.log([1, 2, 3].includes(4))      // false
console.log([1, 2, 3].includes(3, 3))   // false
console.log([1, 2, 3].includes(3, -1))  // true
console.log([1, 2, NaN].includes(NaN))  // true

arr = ['a', 'b', 'c']

console.log(arr.includes('c', 3))    // false
console.log(arr.includes('c', 100))  // false

// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

arr = ['a', 'b', 'c']

console.log(arr.includes('a', -100)) // true
console.log(arr.includes('b', -100))// true
console.log(arr.includes('c', -100))// true
console.log(arr.includes('a', -2))   // false

beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));
// expected output: 3
console.log(animals.lastIndexOf('Tiger'));
// expected output: 1


animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1


plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

animals = ['pigs', 'goats', 'sheep'];

count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


array1 = [1, 2, 3, 4];
reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]

array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"

array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

target = { a: 1, b: 2 };
source = { b: 4, c: 5 };

 returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();
  // expected output: "My name is Matthew. Am I human? true"
  

  object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

//object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42

object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  
  // expected output:
  // "a: somestring"
  // "b: 42"
  // order is not guaranteed

  obj = {
    prop: 42
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);
  // expected output: 42

  console.log(Object.is('foo', 'foo'));     // true
  

  console.log(Object.is('foo', 'bar'));     // false
  console.log(Object.is([], []));           // false

  var foo = { a: 1 }
 var bar = { a: 1 }
console.log(Object.is(foo, foo));         // true
console.log(Object.is(foo, bar));         // false

console.log(Object.is(null, null));       // true

// Special Cases
console.log(Object.is(0, -0));            // false
console.log(Object.is(-0, -0));           // true
console.log(Object.is(NaN, 0/0));         // true

// New objects are extensible.
var empty = {};
console.log(Object.isExtensible(empty)); // === true

// ...but that can be changed.
console.log(Object.preventExtensions(empty));
console.log(Object.isExtensible(empty)); // === false


  
 object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.values(object1));
  // expected output: Array ["somestring", 42, false]
  
  