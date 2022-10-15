function getTime():number{
    return new Date().getTime();
}

console.log(getTime());

function SayHi():void {
    console.log("Say Hi");
}
SayHi();


function add(a:number,b:number,c?:number):number
{
    return a+b+(c|| 0);
}
console.log(add(2,3));
console.log(add(2,3,4));

function multiply(a:number,b:number=2):number
{
    return a*b;
}
console.log(multiply(2,4));
console.log(multiply(2));