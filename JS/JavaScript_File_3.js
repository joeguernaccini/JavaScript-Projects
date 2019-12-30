


function addFunction(){
    var add = 9 + 10;
    document.getElementById("math").innerHTML = "nine plus ten equals " + add;
}

function subFunction(){
    var sub = 19 -10;
    document.getElementById("math_2").innerHTML = "19 - 10 equals " + sub;
}

function multFunction(){
    var mult = 19 * 10;
    document.getElementById("math_3").innerHTML = "19 times 10 equals " + mult;
}

function divFunction(){
    var div = 19 / 10;
    document.getElementById("math_4").innerHTML = "19 divided by 10 equals " + div;
}

function lottaMath(){
    var lotta = 5 * 5 / 3 + 198 * .03;
    document.getElementById("lotta").innerHTML = 
    "5 * 5 / 3 + 198 * .03 equals " + lotta;
}

function modFunction(){
    var mod = 5 % 2;
    document.getElementById("mod").innerHTML =
    "The remainder of 5 divided by 2 is " + mod;
}

function unaryFunction() {
    var unary = 2;
    document.getElementById("unary").innerHTML =
        "The unary of 2 is " + - unary;
}

function incrementFunction(){
    var x = 55;
    x++;
    document.getElementById("increment").innerHTML = x;
}

function decrementFunction(){
    var y = 55;
    y--;
    document.getElementById("decrement").innerHTML = y;
}

function randomFunction(){
    var r = (Math.random());
    document.getElementById("random").innerHTML = r;
}

function minFunction(){
    
    document.getElementById("min").innerHTML =
    Math.min(5, 356, 98, 45);
}
