
/**
 *  Javascript Class 
 *  - without '=' in definition and inherit
 *  - can have properties and methods 
 * 
*/
class Human 
{
    constructor() 
    {
        this.gender = 'male';
    }

    printGender() 
    {
        console.log( this.gender );
    }
}


class FirstGen extends Human
{
    constructor() 
    {
        super();
        this.name = 'smile';
        this.gender = 'female';
    }

    printMyName() 
    {
        console.log( this.name );
    }
}

const firstGen = new FirstGen();
firstGen.printMyName();
firstGen.printGender();


/**
 * Classes, Properties & methods in ES6 vs ES7  
*/
/*
// ES6 Property : initialize properties within a construtor.
constructor() { this.myProperty = 'jsmile'; }
// ES7 Property : without constructor to initialize properties
myProperty = 'jsmile';

// ES6 Method
myMethod() { ... }
// ES7 Method   :   lummda expression is passible.
myMethod = () => { ... }
*/