/*const colours = ["Red", "Green", "Orange", "White", "Black",];
const btn = document.getElementById('btn');
const colour = document.querySelector(".colour")

btn.addEventListener("click", function(){
    // get random number between 0-3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber];
});

function getRandomNumber(){
   return Math.floor(Math.random() * colours.length);
} */



const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

btn.addEventListener("click", function(){
    

    let hexColour = '#';
    for(let i = 0; i < 6; i++) {
        hexColour += hex[getRandomNumber()];
    }

    colour.textContent = hexColour;
    document.body.style.backgroundColor = hexColour;

})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}