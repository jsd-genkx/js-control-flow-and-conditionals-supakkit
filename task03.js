"use strict";

// TODO: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"

const password = "pass123";
 console.log()
let passwordLength = password.length;

if ( passwordLength < 6 )
    console.log( "Too short" );
else if (passwordLength >= 6 && passwordLength <= 10 )
    console.log( "Moderate" );
else
    console.log( "Strong" );

