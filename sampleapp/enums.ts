enum cardinalDirections { North, South, East, West };
console.log(cardinalDirections.North);

enum cardinalDirections2 { North=1, South, East, West };
console.log(cardinalDirections2.North);
console.log(cardinalDirections2.West);

enum cardinalDirections3 { North="N", South="S", East="E", West="W" };
console.log(cardinalDirections3.North);