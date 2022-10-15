type CarYear = number;
type CarModel = string;
type CarType = string;

let carYear:CarYear=2022;
let carModel:CarModel="Maruti";
let carType:CarType="Baleno";


type Car = {
    year: CarYear,
    model: CarModel,
    type: CarType
};

const myCar: Car={
    year:carYear,
    model:carModel,
    type:'Maruti'
}


console.log(myCar);

