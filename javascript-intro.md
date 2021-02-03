1. Variables and Data types
   Primitive data types

   - String
   - Number
   - Boolean
     …
     Complex data types
   - Arrays
   - Objects
   - Map / Set ?

2. Arrays and their functions

   - map & forEach
   - sort

3. Objects, their structures and functions

   a) Object structure

   b) Object functions

   - work with keys and values Object.keys()

4. Control structures

   - if / else if
   - switch
   - nesting

5. Loops

   - for / while vs. functional approach
   - when to use which (range 1..10 -> for, otherwise forEach / map to iterate over elements)

6. Functions

   - Classic functions

   ```javascript
   export function printSum(a, b) {
     return `The sum of ${a} and ${b} is ${a + b}`;
   }
   ```

   - Arrow functions
   - Higher order functions

7. fetch & localStorage
   - fetch data from API and store data locally

Addendum:

A) Math functions

- Calculate the area of a circle / can we draw one?

```javascript
const coach = {
  name: 'Miriam Haenle',
  age: 30,
  company: 'neue fische GmbH',
  print() {
    return `${this.name} is ${this.age} years old and works for ${this.company}`;
  },
};
export { coach };
```
