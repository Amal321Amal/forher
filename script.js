const bar = document.getElementById("bar");
const status = document.getElementById("status");

const loadingText = [
"Preparing something special...",
"Connecting to the universe...",
"Searching 8 Billion Hearts...",
"Finding the brightest smile...",
"Almost there..."
];

let progress = 0;
let step = 0;

const loading = setInterval(() => {

    progress++;

    bar.style.width = progress + "%";

    if(progress % 20 === 0 && step < loadingText.length-1){

        step++;

        status.innerHTML = loadingText[step];

    }

    if(progress >= 100){

        clearInterval(loading);

        setTimeout(showMainScreen,700);

    }

},60);


function showMainScreen(){

    document.getElementById("loadingScreen").style.display="none";

    document.getElementById("mainScreen").style.display="flex";

    document.getElementById("sceneTitle").innerHTML="Hey 😊";

    document.getElementById("sceneText").innerHTML=
    "I built this little universe because I wanted to show you something special.";

}
