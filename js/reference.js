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
console.log( 'yourObj.name : ', yourObj.name );     // 원칙적으로 object copy 는 reference copy 이므로 이전 Object 의 변경에 영향을 받음.


console.log( '------------------------ deep copy of an object : immutable copy ----------------------' );

const sourceObj = 
{
    name: 'Alice',
    age: 30
}

const targetObj = 
{
    ...sourceObj,           // immutable deep copy
    job: 'a student'
}
console.log( 'targetObj : ', targetObj );

sourceObj.age = 22;
console.log( 'targetObj : ', targetObj );   // source 의 변경에도 taget 이 영향을 받지 않음( age: 30 ) 

