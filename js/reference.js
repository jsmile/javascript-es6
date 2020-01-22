/**
 *  Reference copy and Value copy of Primitive type 
 *  - Array 에서 각 항목들을 개별적으로 사용하기  
*/

console.log( '------------------------ value copy of primitive type  ----------------------' );

let firstValue = 1;
let secondValue = firstValue;
console.log( 'secondValue : ', secondValue );

firstValue = 3;
console.log( 'secondValue : ', secondValue );   // primitive 는 value copy 이므로 firstValue 의 변경에 영향받지 X


console.log( '------------------------ reference copy of object  ----------------------' );

const myObj = { name: 'Bob' }
const yourObj = myObj;
console.log( 'yourObj.name : ', yourObj.name );

myObj.name = 'Jane';
console.log( 'yourObj.name : ', yourObj.name );     // object copy 는 reference copy 이므로 myObj 의 변경에 영향을 받음.