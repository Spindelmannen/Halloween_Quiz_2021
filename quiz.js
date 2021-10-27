
//let themeDiv = document.querySelector("themediv");//hämtar parent
//MODE KNAPP
let switchMode = document.querySelector("#theme");//hämtar lightmode knapp
switchMode.addEventListener("click", () => {
let body = document.querySelector("body"); //Hämtar body och sparar den i variabel
let label = document.querySelectorAll("label");
let input = document.querySelectorAll("input");
let mainDiv = document.querySelector("#content");


    if (body.style.background === "lightskyblue") { //om bakgrunden är lightskyblue när vi clickar...
    body.style.background = "darkslategray"; //...så blir den darkslategray
    mainDiv.style.color = "white";
    switchMode.innerHTML ="<strong>I want daylight!</strong>";
} else {
    body.style.background = "lightskyblue";//om den nu är darkslategray istället så blir den lightskyblue när vi clickar
    mainDiv.style.color = "black";
    switchMode.innerHTML ="<strong>Give me darkness!</strong>";
}
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
    });
    


//RESTART KNAPP
let startaOm = document.querySelector("#restart"); 
startaOm.addEventListener("click",() => { //en knapp som refreshar sidan.
    window.location.reload();
    valdaSvar.forEach((item) => {
        valdaSvar.remove();
    })
});

//let checkBox = document.getElementsByClassName("checkbox");

let resultatBox = document.createElement("div")
let resultatText = document.createElement("p")
let answers = document.querySelectorAll(".question"); //hämtar rätta radiosvar
let resultat = document.querySelector("#doneButton") // resultat knapp

//CHECK ANSWERS KNAPP
resultat.addEventListener("click", () => {
resultatText.innerHTML = "";
let poäng =0;

    //en forEach loop genom alla rätta radiosvar och lägger 1 poäng på varje rätta radiosvar
    answers.forEach((item) => {
        if (item.checked === true){
            poäng++;
        }
    });

    //Checkboxes
    if (document.querySelector("#q8a1").checked === true && document.querySelector("#q8a4").checked === true 
    && !document.querySelector("#q8a3").checked === true && !document.querySelector("#q8a2").checked === true) {
        poäng++;
    } else {
        poäng+0;
    };

resultatText.innerHTML = "<strong>You Scored: "+poäng +"/10 Points!</strong>";
if (poäng >=8){
    resultatText.style.color = "green";
} else if (poäng >=5) {
    resultatText.style.color = "orange"; 
} else {
    resultatText.style.color = "red";
}

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
    console.log(poäng);
resultat.appendChild(resultatBox);
resultatBox.appendChild(resultatText);
});

