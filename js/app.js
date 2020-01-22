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

//new_const = 'second assigning make an error.';
//console.log( 'second const : ', new_const );

console.log( '###################################' );


/**
 *  Arrow Function
*/

function normal( name ) 
{
    console.log( 'Old function : ', name );
}
normal( 'jsmile 1' );

// single arguement arraw function( '=>' in front of function body )
const new_normal = ( name ) =>
{
    console.log( 'const function variable : ', name );
}
new_normal( 'jsmile 2' );

// const simple arrow function with only one arguement( without braces )
const simple = name => 
{
    console.log( 'simple arrow function : ', name );
}
simple( 'jsmile 3' );

const simple_one_return_function = name => name;
console.log( 'single line returned arrow function. : ', simple_one_return_function( 'jsmile 4' ) );

// non arguement arrow function( must involve braces ) 
const none_arguement = () => 
{
    console.log( 'none arguement function format' );
}
none_arguement();

// multple arguement arrow function
const multi_arguement_function = ( name, age ) => 
{
    console.log( 'name is ' + name + ', age is ' + age );
}
multi_arguement_function( 'jsmile', 50 );

console.log( '###################################' );


/**
 *  Export and Import  
*/

import person from './person.js'

import per from './person.js'

import { baseData } from './utility.js';

import { clean}  from './utility.js';

import { baseData as data } from './utility.js';

import * as anAlias from './utility.js';
console.log( anAlias.baseData );
anAlias.clean;


