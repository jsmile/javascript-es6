/**
 *  Destructring 
 *  - Array 에서 각 항목들을 개별적으로 사용하기  
*/

console.log( '------------------------ Array Destructuring ----------------------' );

const numArray = [ 1, 2, 3 ];
[ num1, num3 ] = numArray;
console.log( 'num1, num3 : ', num1, num3 );     // 1, 2

[ num1, , num3 ] = numArray;
console.log( 'num1, , num3 : ', num1, num3 );   // 1, 3


//console.log( '------------------------ object Destructuring ----------------------' );
//
// const pro = 
// {
//     name: 'Tommy', 
//     job: 'a teacher'
// }
//
// { name } = pro;
// console.log( 'name : ', name );
// console.log( job ); // undefined