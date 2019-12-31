document.write(typeof 5);
document.write('<br>');
document.write(5 < 6);
document.write('<br>');
document.write(5<2);
document.write('<br>');
document.write("I have been bald for " + 9, " years.");
document.write('<br>');
document.write((9*2) == 18);
document.write('<br>');
document.write((5+7) == (8+2));
document.write('<br>');
document.write('<br>');

    var age_1 = 12;
        age_2 =15;
        age_3 = 12;
        
        document.write(age_1 === age_3);
        document.write('<br>');
        document.write(age_1 === 4);
        document.write('<br>');
        document.write("one" === 1);
        document.write('<br>');
        document.write(age_1 === age_2);
document.write('<br>');
document.write('<br>');
document.write("Start of and, or, not");
document.write('<br>');
document.write((2+5)>(1+2) && (1+3)< (3*8));
document.write(4<3 && 5>1);
document.write('<br>');
document.write(8>9 || 9>8);
document.write(8<9 || 10<9);
document.write('<br>');
document.write(! 5<3);
document.write(! 5>3);








document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');



function falNanFunction(){
    document.getElementById("isNaN").innerHTML = isNaN(403);
}

function trNanFunction (){
    document.getElementById("nan_2").innerHTML = isNaN('"Holy SMokes');
}

function nanFunction(){
    document.getElementById("nan_1").innerHTML = 0/0;
}

function infinFunction(){
    document.getElementById("infin").innerHTML = 999999999e9999999999;
}

function negInfinFunction(){
    document.getElementById("negInfin").innerHTML = -9999999999e99999;
}

console.log(82/45);

console.log(5<4);
