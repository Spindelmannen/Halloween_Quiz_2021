
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

