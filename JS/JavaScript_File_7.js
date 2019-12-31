

var x = 20;
var y = 100;

function multiply(){
    var sum = x * y;
    document.getElementById("multiply").innerHTML = sum;
}

function sub(){
    var a = 20;
    var b = 39;
    var sum = a - b;
    document.getElementById("sub").innerHTML = sum;
}

function add(){
    var sum = a + b;
    document.getElementById("add").innerHTML = sum;
    console.log();
}


function condition_1(){
    if (new Date().getHours() > 3){
    document.getElementById("Condition").innerHTML = "It's after 3.";
    }
    console.log()
}

function monthCondition(){
    if (new Date().getMonth() >= 3){
        document.getElementById("month").innerHTML = "It's winter.";
    }
}

function foodLike(){
    var answer;
    food = document.getElementById("food").value;
    if (food === "cake"){
        answer = "Word.";
    }
    else {
        answer = "Gross.";
    }
    document.getElementById("Food_Like").innerHTML = answer;
}

function Time_Function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else{
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}





















