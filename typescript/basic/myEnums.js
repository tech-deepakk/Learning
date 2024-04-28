"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// enums is special class that represent group of constants
var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 0] = "AISLE";
    seatChoice[seatChoice["MIDDLE"] = 1] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 2] = "WINDOW";
})(seatChoice || (seatChoice = {}));
// default value is start from 0
var mySeat = seatChoice.AISLE;
// single intialize
var choice;
(function (choice) {
    choice[choice["A"] = 4] = "A";
    choice[choice["B"] = 5] = "B";
    choice[choice["C"] = 6] = "C";
    choice[choice["D"] = 7] = "D";
})(choice || (choice = {}));
//  enums fully intialized string
var direction;
(function (direction) {
    direction["NORTH"] = "NORTH";
    direction["EAST"] = "EAST";
    direction["WEST"] = "WEST";
    direction["SOUTH"] = "SOUTH";
})(direction || (direction = {}));
