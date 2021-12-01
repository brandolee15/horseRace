let horseNames = ["Jagan", "Phillip", "Safwan", "Brandon", "Zain", "Tatiana", "Anna", "Marina", "Yagnesh", "Eddie","Julian","Franklyn","Josh","Sharen","Hayden","Pete","Jakcika","Noamaan"]
let colors = ["red", "green", "yellow", "purple", "gold", "silver", "blue", "grey", "pink", "violet", "orange","Azure","Beige","Bisque","brown","greenyellow","chocolate","darkblue","darkmagenta"]

let list = document.getElementById("horses");

let load = () => {  //made function load to use in change color

    for (let names in horseNames) {
        let horsegif = document.createElement("img"); //creating image element in js [not in html yet]
        horsegif.setAttribute("src","./gif/horse.gif"); //adding the attribute and after comma is after the = (value of attribute)
        horsegif.classList.add("horse") //adding class for style
        let horse = document.createElement("li");  //creating list
        horse.innerHTML = horseNames[names];
        horse.style.color = colors[names]; //inline style
        list.appendChild(horse); //appends to html to the ordered list
        horse.appendChild(horsegif); //appends to html to the list item
    }
}

let target = document.getElementById("btn");
let title = document.getElementById("startRace");

let race = () => {
    title.innerHTML = "Race Results";
    target.innerHTML = "Race Again";
    for (let names in horseNames) {
    list.appendChild(list.children[Math.random() * names | 0]); //copy pasted from google
    } //list.children all is child elements
}

let target2 = document.getElementById("btn-2");

let changeColor = () => {
    title.innerHTML = "Start Race";
    while(list.firstChild){
        list.removeChild(list.firstChild) //stops from duplicating by removing list items
    }
    colors =colors.sort(() => Math.random() - 0.5)
    load()
}


target.addEventListener("click",race)  //when target is clicked, run race function
target2.addEventListener("click",changeColor)

window.addEventListener('DOMContentLoaded', load); //waits for html to load
//after html loads, runs function load
