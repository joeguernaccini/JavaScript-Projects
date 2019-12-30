function myDictionary(){
    var family = {
        dad: "Joe",
        mom: "Ashly",
        daughter: "Fiona",
        dog: "Nous",
    };
    delete family.mom;
    document.getElementById("Dictionary").innerHTML = family.mom;
}
   
