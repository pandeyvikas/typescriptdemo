"use strict";
/******************************
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
ourTuple[1]=true;//okay
ourTuple.push('Something new and wrong');//okay
console.log(ourTuple);
//******************************/
/******************************
const ourTuple2: [number, boolean, string];
// initialize correctly
ourTuple2 = [5, false, 'Coding God was here'];//rror TS2588: Cannot assign to 'ourTuple2' because it is a constant.
ourTuple2[1]=true;//okay
ourTuple2.push('Something new and wrong 2');//okay
console.log(ourTuple2);
//******************************/
/*********************** */
var geolocation = [12, 13];
console.log(geolocation[0]);
//******************************* */
