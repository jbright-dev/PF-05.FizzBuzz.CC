//Create the Controller Function

//Declare a new function that calls the built in getValues function the numbers
function getValues(){

    /* Within the scope-block of the function create a variable of startValue that is defined as the value of the document-element possessing the id of startValue*/
    let startValue = document.getElementById("startValue").value;

    /* Within the scope-block of the function create a variable of endValue that is defined as the value of the document-element possessing the id of endValue*/
    let endValue = document.getElementById("endValue").value;

    /*The variable startValue is defined as the value of the called built-in parseInt function and the value of the pass-through variable startValue*/
    startValue = parseInt(startValue);

    /*The variable endValue is defined as the value of the called built-in parseInt function and the value of the pass-through variable endValue*/
    endValue = parseInt(endValue);

    /*Create an if-else statement where if the value of the built-in isInteger function with the individual parameters of startValue and endValue is a Number...*/
    if (Number.isInteger(startValue) && Number.isInteger(startValue)) {
        
        /*...Within the scope block of the if statement create a variable of numbers which is defined as the value of the called built-in generateNumbers function with the parameters of startValue and endValue*/
        let numbers = generateNumbers(startValue,endValue);

        /*Call the built in displayValues function using the parameter of numbers, which was the value of the passed-through variable numbers*/
        displayValues(numbers);
    
    //...or
    } else {

        /*Trigger a Sweet Alert*/
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

    /*Create a variable of numbers is defined as an array*/
    let numbersArray = [];

    /*Create a for-loop where we create a variable of i which is defined as the value of start. As long as the value of i is less than or equal to the value of stop, add one to the value of i*/ 
    for (let i = start; i <= stop; i++) {

        /*Within the scope-block of the loop, the value of i is appended to the end of the array named numbersArray*/
        numbersArray.push(i);        
    }

    //Return the vaule for the variable numbersArray
    return numbersArray;
}


//Create the View Function

/*Declare a new function which calls the function displayNumbers function and possesses the parameter of displayArray.*/
function displayValues(displayArray) {

        /*Create a variable of results which is defined as the value of the document element possessing the Id of "results"*/
        let results = document.getElementById("results");

        
        /*Create a for-loop where we create a variable of index which is defined as the value of zero. As long as the value of index is less than the lengh of the array "displayArray", add one to the value of index*/
        for (let index = 0; index < displayArray.length; index++) {

            /*Within the scope-block of the for statement, create a variable of div which is defined as the value of the created document element "div"*/
            let div = document.createElement("div");

            /*The created variable div contains inner HTML which is defined as the value of the index of the array "display Array"*/
            div.innerHTML = displayArray[index];
        
            /*Create a variable of arrayNumber which is defined as the value of the contents within the index of the numbersArray array*/
            let arrayNumber = displayArray[index];
        
            /*Create an if-else statement where if the value of the variable arrayNumber is a modulous of three*/
            if (arrayNumber % 3===0)

            {

                /*Within the scope block of the if-statement add the text string "fizz" to the class of the div variable*/
                div.classList.add("fizz");
                div.classList.add("border");

                /*if not, create an if statement where if the value of the variable arrayNumber is a modulous of five*/

                }else if (arrayNumber % 5===0)
                
                {

                /*Within the scope block of the if-statement add the text string "buzz" to the class of the div variable*/
                div.classList.add("buzz");
                div.classList.add("border");
                
                /*if not, create an if statement where if the value of the variable arrayNumber is a modulous of three and five*/
                }else if (arrayNumber % 3===0 || arrayNumber % 5===0)

                {

                /*Within scope, if the statement add the text string "fizzBuzz" to the class of the div variable*/
                div.classList.add("fizzBuzz");
                div.classList.add("border");
                
                /*If not*/
                } else {

                /*Within the scope block of the if statements add the text string "nfnb" to the class of the div variable*/
                div.classList.add("nfnb");
                div.classList.add("border");
            
            }

        /*Add the text string "col" to the scope block to the class of the div variable*/
        div.classList.add("col-2");

        /*append the value of the dive variable to the results variable*/
        results.appendChild(div);

    }
 
}



//if divisible by 5
/*if divisible by 3*/