/**
 *  Array Functions 
 *  - map() : Array 항목들 각각에 parameter 함수를 적용하여 새로운 Array 를 만든다.
*/

console.log( '################# Array Functions : map() ######################' );

const arrayNum = [ 1, 2, 3 ];

const doubleNum = arrayNum.map( ( num ) => 
{
    return num * 2;
});

console.log( 'arrayNum : ', arrayNum );     // 1, 2, 3
console.log( 'doubleNum : ', doubleNum );   // 1, 4, 6