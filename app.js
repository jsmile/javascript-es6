/**
 *  new variable
 *  - let is changible.
 *  - const is unchangible.
*/

var old = 'Old Variable';
console.log( 'first var : ', old );

old = 'second assigning';
console.log( 'second var : ', old );


let new_let = 'New Changible Variable';
console.log( 'first let : ', new_let );

new_let = 'second assigning is possible.';
console.log( 'second let : ', new_let );


const new_const = 'New Unchangible Variable';
console.log( 'first const : ', new_const );

new_const = 'second assigning make an error.';
console.log( 'second const : ', new_const );