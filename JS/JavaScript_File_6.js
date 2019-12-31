

function Ride_Function(){
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short":"You are tall enought";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

function ageVote(){
    var age, okVote;
    age = document.getElementById("age").value;
    okVote = (age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("vote").innerHTML = okVote + " to vote!"
}

function vehicle(make, model, year, color){
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}

var Jack = new vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle ("Ford", "Pinto", 1971, "Mustard");

function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drive a " + Erik.vehicle_color + "-colored " + Erik.vehicle_model +
    " manfactured in " + Erik.vehicle_year;
}

function phyAttributes(height, weight, hair_color, style){
    this.phyAttributes_height = height;
    this.phyAttributes_weight = weight;
    this.phyAttributes_hair_color = hair_color;
    this.phyAttributes_style = style;
}

var Joe = new phyAttributes ("5\'10\"", "190lbs", "bald", "fly");
var int = new phyAttributes("5","189","45","65" );

function myAttributes(){
    document.getElementById("New_and_This").innerHTML = "Joe is " +
    Joe.phyAttributes_height + " and weighs " + Joe.phyAttributes_weight + ". He is " 
    + Joe.phyAttributes_hair_color+ " but all the girls say his style is so "
    + Joe.phyAttributes_style + "."; 
}
function gotoFunction(){
    document.getElementById("goto").innerHTML = "Let's see " + int.phyAttributes_height;
}


function count_Func() {
    document.getElementById("counting").innerHTML = count();
    function count() {
        var starting = 9;
        function plusOne() {
            starting += 1;
        }
        plusOne();
        return starting;
    }
}

function nesting() {
    document.getElementById("nested_function").innerHTML = join_1();
    function join_1(){
        var a =  "Whatever you do... ";
        function join_2(){
            a += "take care of your shoes.";
        }
       join_2();
       return a;
        }
    }


    





























