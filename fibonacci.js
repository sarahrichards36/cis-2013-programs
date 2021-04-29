//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
    var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
    var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = i + " " + j;//initialize the Fibonacci series output to include the first two numbers
    
	
	//validate that the user input intCount is a number and intCount is not less than 2 or intCount not greater than 100
    // write whatever kind of loop you want to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM 
	if (isNaN(intCount) || intCount<1|| intCount>100)
    {
        $("total_fib").value = "";
        $("output").value = "Enter a valid input";
        alert ("Sorry, enter a number between 1 and 100");
    }
    else
    {
        while (intCount >2) //intCount must be greater than 2
        {
            k=i+j; //adds first number in Fibonacci series with the second number
            i=j; //sets the first number equal to the second
            j=k; //sets second number equal to the first and second together
            intCount--;
            stringOutput = stringOutput + " " + k;
        }
        $("output").value = stringOutput;
    }
} 

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}