// create a function getComputer, that will return either rock,scissors or paper;
// the proposed returned value will be stored in a variable.


let game1 = "Rock";
let game2 =  "Paper";
let game3 =  "scissors";

function getComputer(game) {
    if (game == "R") {
        return game1;
    }if (game == "P") {
        return game2;
    }if (game == "S"){
        return game3;
    }else {
        return null;       
    }
};
console.log(getComputer("S"));