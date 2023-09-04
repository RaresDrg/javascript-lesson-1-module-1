/**
 * strings
 */

const singleQuoteString = 'Single\' quote" string';
// singleQuoteString = 'test'; // Error: cannot assignt to constant variable

console.log(singleQuoteString);



const doubleQuoteString = "Double\" quote' string";

console.log(doubleQuoteString);
console.log('doubleQuoteString');



const templateLiteralString = `Aici putem
scrie cod pe mai multe linii.
Putem chiar sa folosim variabile: ${doubleQuoteString}`;

console.log(templateLiteralString);