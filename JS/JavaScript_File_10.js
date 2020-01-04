function call_loop(){
    var num = "";
    var a = 60;
    while (a > 40) {
        num += "<br>" + a;
        a--;
    }
    document.getElementById("loop").innerHTML = num;
}

function stringLength(){
    var a = "Bouncing 'round the room";
    var b = a.length;
    document.getElementById("string").innerHTML = b;
}

function for_Loop(){
    var positions = ["goalie", "winger", "center", "defense"];
    var spots = "";
    var p;
    for (p = 0; p < positions.length; p++){
        spots += positions[p] + "<br>";
    }
    document.getElementById("positions").innerHTML = spots;
}

function array_function() {
    var tie_color = [];
    tie_color[0] = "I'm feeling down.";
    tie_color[1] = "I'm feeling happy.";
    tie_color[2] = "the sun is shining.";
    document.getElementById("array").innerHTML = " I am waering this tie " +
    "today because " + tie_color[2];
}


function constant_Function() {
    const dwellings = {type: "single family", town:"Safety Harbor", roof:"shingle", stories:"one"};
    {
        let price = "$495k";
    
    document.getElementById("constant").innerHTML = " We recently " +
    "purchased a " + dwellings.stories + " story " + dwellings.type + 
        " home in " + dwellings.town + " that has a " +  dwellings.roof + " roof." +
    " The cost was " + price;
    }
}


function family() {
    var a = "Ashly";
    var b = "Joe";
    var c = "Fiona";
    return "The Guernaccini's consist of " + a +", " + b + " and " + c +"."; 
}
document.getElementById("names").innerHTML = family();


let hockey_player = {
    name: "Jack Hanson",
    team: "Charlestown Chiefs",
    position: "winger",
    age: "19",
    profile : function () {
        return this.name + " is a " + this.age + "-year old " + this.position + 
        " who plays for the " + this.team + ".";       
    }
};
document.getElementById("player").innerHTML = hockey_player.profile();


var text = "";
var b;
for (b = 60; b > 40; b--) {
    if (b === 55)
        { continue; }
    if (b === 50) 
        {break;}
        text += b + "<br>";
    }
document.getElementById("break").innerHTML = text;

























