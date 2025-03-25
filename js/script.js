let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];
console.log("Javascript linked")

// Answers

// Question 1
let hostName = document.getElementById("host-name");
// console.log(hostName)
hostName.innerHTML = "Nicole";

//Question 2
let instructionsButton = document.getElementById("instruction_button");
// console.log(instructionsButton);
instructionsButton.addEventListener("click", function()
{
    // console.log("yo im here");
    let questions = document.querySelectorAll(".question");
    // console.log(questions);
    for(let question of questions){
        // console.log("hi")
        //code from w3schools
        //triggering the display of questions and undoing , toggle instruction off/on
        if (question.style.display == "none"){
            question.style.display = "block";
            //set button to hide isntructions
            instructionsButton.innerHTML = "Hide Instructions";
        }   
        
        else{
            question.style.display = "none";
            //set text to show instructions
            instructionsButton.innerHTML = "Show Instructions";
        }

    }
})

//Question 3
let autoPopulateLast = document.getElementById("last_name");
let autoPopulateFirst = document.getElementById("first_name");
function downloadFile(){
   autoPopulateLast.value = "Doe"; 
}
autoPopulateLast.addEventListener("input", downloadFile);
// element.addEventListener("change", downloadFile);



//Question 4


//Question 5


//Question 6


//Question 7


//Question 8


//Extra challenge: reset button

