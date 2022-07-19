//Create the Controller Function

//Declare a new function that calls the built in getValues function the numbers
function getValues(){

    /* Within the scope-block of the function Create variables that are defined as values contained within the elements possesing the id of the scanned the document*/
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    /*Create a variable which calls the parse integer function*/
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    /*Create an if-else statement where the creates two variables using Number constructor, and calls the isInteger function with the individual parameters of startValue and endValue*/
    if (Number.isInteger(startValue) && bNumber.isInteger(startValue)) {
        
        /*Within the scope block of the if statement define a variable which calls the generateNumbers function with the parameters of startValue and endValue*/
        let numbers = generateNumbers(startValue,endValue);

        /*Call the displayValues function using the parameter of numbers, which was passed into the function*/
        displayValues(numbers);

    } else {

        /*Within the else portion  of the statement enter the Sweet Alert*/
            Swal.fire({
            backdrop: false,
            title: "I'm Sorry",
            text: "Your input was not a number",
        }
        );        
    }
}


//Create the Business Logic

/*Declare a new function which calls the built in generateNumbers function and possesses the parameters of start and stop*/
function generateNumbers(start,stop){

    //Create a variable of numbers which will have it's values entered into an array
    let numbers = [];

    //Create a for-loop which declares a variable of i. the variable of i will consist of the previously defined "start" paramenter and as long as "i" is less than the previously defined stop, add 1 to the value. 
    for (let i = start; i <= stop; i++) {

        /*Within the scope of the loop, call the push function, which places the value of variable numbers within an array consisting of value of i*/
        numbers.push(i);        
    }

    //Return the vaule for numbers
    return numbers;
}


//Create the View Function

/*Declare a function which calls the built in displayNumbers function and possesses the parameter of numbersArray.*/
function displayNumbers(numbersArray){

    /*Create a variable of results which will be deined as the value contained within the element possesing the Id of "results"*/
    let results = document.getElementById("results");

    //Create a variable of div

    //if divisble by both

    //if divisible by 5

    //if divisible by 3

}

//ExtraCredit Use Tables