"use strict";

// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)

// const userInput = "42";
const userInput = NaN;
// Try changing to "hello", 10, null, NaN

if ( typeof userInput === 'number' && !isNaN(userInput) )
    console.log( "it's a number" );
else
    console.log( "it's not a number" );
