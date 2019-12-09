// variables for the first and second words

var firstWord = "☕";
var secondWord = "🍪";

// set first and second variables

function firstWordValue () {
    firstWord = document.getElementById("firstWord").value;
}

function secondWordValue () {
    secondWord = document.getElementById("secondWord").value;
}

//Create array
var fizzBuzzArray = [];
function createArray () {
    for(let i=0;i<100;)
    {fizzBuzzArray.push((++i%3?'': firstWord)+(i%5?'': secondWord)||" " +i);
    document.getElementById("output").innerText = fizzBuzzArray;

    }
}
