





function firstFunction(){
    var A = document.getElementById("Joe");
        A.style.opacity = "100%"
        
    var B = document.getElementById("Joe_2");
        B.style.opacity = "100%";    
       
}

function concatFunction(){ 
    var sentence = "Ahhhhhh....";
    sentence += " that's much better!";
    document.getElementById("concatenate").innerHTML = sentence;
}


function secondFunction(){
    var c = 9;
    var d = 9;
    var sum = (c * d);
    document.getElementById("multiply").innerHTML = sum;
}

function additionFunction(){
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2+2 = " + addition;

}