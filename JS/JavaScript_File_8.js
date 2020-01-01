function slippers(){
    var st_1 = "I have ";
    var st_2 = "some dope ass ";
    var st_3 = "fuzzy bunny slippers.";
    var sentence = st_1.concat(st_2 + st_3);
    document.getElementById("fuzzies").innerHTML = sentence;
}

function sliceFunction(){
    var sentence = "You've got to run like an antelope out of control!";
    var section = sentence.slice (4, 5, 30);
    document.getElementById("slice").innerHTML = section;
}

function upperStr() {
    var string = "I feel I've never told you the story of the ghost.";
    var upp = string.toUpperCase();
    document.getElementById("upper").innerHTML = upp;
}

function to_Str(){
    var s = 239;
    document.getElementById("string").innerHTML = s.toString();
}

function precs(){
    var x = 123456789.123456789;
    document.getElementById("pre").innerHTML = x.toPrecision(9);
}

function fixed(){
    var x = 123.456789;
    document.getElementById("fix").innerHTML = x.toFixed(3);
}


















