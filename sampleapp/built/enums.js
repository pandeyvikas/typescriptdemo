"use strict";
var cardinalDirections;
(function (cardinalDirections) {
    cardinalDirections[cardinalDirections["North"] = 0] = "North";
    cardinalDirections[cardinalDirections["South"] = 1] = "South";
    cardinalDirections[cardinalDirections["East"] = 2] = "East";
    cardinalDirections[cardinalDirections["West"] = 3] = "West";
})(cardinalDirections || (cardinalDirections = {}));
;
console.log(cardinalDirections.North);
var cardinalDirections2;
(function (cardinalDirections2) {
    cardinalDirections2[cardinalDirections2["North"] = 1] = "North";
    cardinalDirections2[cardinalDirections2["South"] = 2] = "South";
    cardinalDirections2[cardinalDirections2["East"] = 3] = "East";
    cardinalDirections2[cardinalDirections2["West"] = 4] = "West";
})(cardinalDirections2 || (cardinalDirections2 = {}));
;
console.log(cardinalDirections2.North);
console.log(cardinalDirections2.West);
var cardinalDirections3;
(function (cardinalDirections3) {
    cardinalDirections3["North"] = "N";
    cardinalDirections3["South"] = "S";
    cardinalDirections3["East"] = "E";
    cardinalDirections3["West"] = "W";
})(cardinalDirections3 || (cardinalDirections3 = {}));
;
console.log(cardinalDirections3.North);
