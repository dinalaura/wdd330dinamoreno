// sum all the numbers up to the number provided
team = function(){
    let data = document.getElementById("text").value;
    if(isNaN(data)){
        document.getElementById("display").innerHTML = "Not a number"; // check if it's a number
    }
    else
    {
        var i;
        var sum = 0;
       for(i = 0; i <= data; i++){ // if i is less than data then a loop start
        sum = i + sum;
    document.getElementById("display").innerHTML = sum; // display the results of the loop
       }
    }
} 

// suma

sum = function(){
    let sum = parseFloat(document.getElementById("sum").value); // parse float the number
    let sumDos = parseFloat(document.getElementById("sumDos").value); // parse float the number
    if(isNaN(sum)){
        document.getElementById("sumDisplay").innerHTML = "Not a number"; // check if number
    }
    else if(isNaN(sumDos)){
        document.getElementById("sumDisplay").innerHTML = "Not a number";
    }
    else{
        var suma = sum + sumDos;
        document.getElementById("sumDisplay").innerHTML = suma; // display
    }
}

// resta  - arrow function

resta = () => {
let resta = parseFloat(document.getElementById("resta").value);
let restaDos = parseFloat(document.getElementById("restaDos").value);

var sub = resta - restaDos;
document.getElementById("restaDisplay").innerHTML = sub;
}

document.getElementById("restaBtn").addEventListener("click", resta)

