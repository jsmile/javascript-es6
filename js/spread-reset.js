console.log( '############### Spread & Reset Array ####################' );

console.log( '---------------- Spread Array --------------------------' );

const numbers = [ 3, 2, 1 ];
const normalNums = [ numbers, 4, 5 ];
const spreadNums = [ ...numbers, 4, 5 ];
const spreadNumsSort = [ ...numbers.sort(), 4, 5 ];     // spread 는 array 이므로 내장함수인 sort() 적용가능 

console.log( 'normal array', normalNums );
console.log( 'spread array', spreadNums );
console.log( 'spread array sort()', spreadNumsSort );

console.log( '------------------- Object Array -----------------------' );

const human =
{
    name: 'Bob',
    age: 36
};

const employee =
{
    ...human, 
    job: 'teacher'
};

console.log( 'employee : ', employee );


console.log( '-------------------- Reset Array of arguements ----------------------' );
// 복수개의 arguements 를 ...args 인 1개의 Array로 통합하여 표현
const filter = ( ...args ) => 
{
    return args.filter( el => el === 1 );
}
console.log( 'filter() : ', filter( 1, 2, 3 ) );
