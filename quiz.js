let switchMode = document.querySelector("#theme");//hämtar Theme-Mode knapp
let startaOm = document.querySelector("#restart"); // hämtar restart knappen
let answers = document.querySelectorAll(".question"); //hämtar rätta radiosvar
let resultat = document.querySelector("#doneButton") //hämtar Check Answer knapp
let resultatBox = document.createElement("div") //skapar en tom div.
let resultatText = document.createElement("p") //skapar en tom paragraf.

//MODE KNAPP
switchMode.addEventListener("click", () => { //en knapp som byter tema på sidan.
let body = document.querySelector("body"); //Hämtar body och sparar den internt i en variabel.
let mainDiv = document.querySelector("#content"); //hämtar diven med innehåll, sparar den internt.

    if (body.style.background === "lightskyblue") { //om bakgrunden är lightskyblue när vi clickar...
    body.style.background = "darkslategray"; //...så blir den darkslategray
    mainDiv.style.color = "white"; //allt i diven blir vitt
    switchMode.innerHTML ="<strong>I want Daylight!</strong>"; //ändrar knappens text.
} else {
    body.style.background = "lightskyblue";//om den nu är darkslategray istället så blir den lightskyblue när vi clickar
    mainDiv.style.color = "black"; // och allt i diven blir svart
    switchMode.innerHTML ="<strong>Give me Darkness!</strong>"; //ändrar knappens text
    }
});

//RESTART KNAPP
startaOm.addEventListener("click",() => { //en knapp som refreshar sidan.
    window.location.reload(); //när vi clickar så laddas sidan om.
});

//CHECK ANSWERS KNAPP
resultat.addEventListener("click", () => { //en knapp som visar hur många poäng man fått på quizet.
resultatText.innerHTML = ""; //varje gång vi clickar så återställer vi resustattexten till en tom string.
let poäng =0; //en intern variabel som skapas när vi clickar.

    //en forEach loop genom alla rätta radiosvar och lägger 1 poäng på varje rätta radiosvar
    answers.forEach((item) => {
        if (item.checked === true){ 
        poäng++; //för varje fråga med classen question som är checkad så plussar vi på 1 poäng.
        }
    });

    //Checkboxes
    if (document.querySelector("#q8a1").checked === true && document.querySelector("#q8a4").checked === true 
    && !document.querySelector("#q8a3").checked === true && !document.querySelector("#q8a2").checked === true) {
        poäng++;//om q8a1 och q8a4 är checkad medan q8a3 och q8a2 inte är checkade så plussar vi ett poäng.
    } else {
        poäng+0; // annars får vi inget poäng
    };

resultatText.innerHTML = "<strong>You Scored: "+poäng +"/10 Points!</strong>"; //vi ger våran skapade p element en text.
if (poäng >=8){
    resultatText.style.color = "green"; //om poäng har värdet 8 eller högre, blir texten grön.
} else if (poäng >5) {
    resultatText.style.color = "orange"; //om poäng har värdet större än 5, blir texten orange.
} else {
    resultatText.style.color = "red"; // annars blir den röd.
}
console.log(poäng);
resultat.appendChild(resultatBox); //appendar våran tomma div.
resultatBox.appendChild(resultatText);//appendar våran paragraf i diven.
});

//Gammal lösning som ersattes av forEach loop.
// if (document.querySelector("#q1a2").checked === true){
//     poäng++; 
// }
// if (document.querySelector("#q2a1").checked === true){
//     poäng++; 
// }
// if (document.querySelector("#q3a1").checked === true){
//     poäng++; 
// }
// if (document.querySelector("#q4a3").checked === true){
//     poäng++; 
// }
// if (document.querySelector("#q5a1").checked === true){
//     poäng++; 
// }
// if (document.querySelector("#q6a3").checked === true){
//     poäng++; 
// }
// if (document.querySelector("#q7a2").checked === true){
//     poäng++; 
// }
// if (document.querySelector("#q9a2").checked === true){
//     poäng++; 
// }
// if (document.querySelector("#q10a3").checked === true){
//     poäng++; 
// }

//ersätter forEach testerna med att hämta hela diven via Id.
 // label.forEach((text) => { //En forEach loop för alla label texter.
    //     if (body.style.background === "darkslategray") { //om bakgrunden är darkslategray...
    //     text.style.color = "white"; //..blir alla labels vita
    //     } else {
    //     text.style.color = "black"; //annars är labels svarta.
    //     }
    // });
    //     input.forEach((radiotext) => { 
    //         if (body.style.background !== "lightskyblue") { 
    //         radiotext.style.color = "white";
    //         console.log(input);
    //         } else {
    //         radiotext.style.color = "white"; 
    //         }
    //     });