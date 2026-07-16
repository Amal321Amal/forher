// ======================================================
// STEP 3 : CINEMATIC GALAXY ENGINE
// ======================================================

const starsContainer = document.getElementById("stars");
const shootingContainer = document.getElementById("shootingStars");

// --------------------------------------
// Create Random Stars
// --------------------------------------

function createStars(){

    for(let i=0;i<1200;i++){

        const star=document.createElement("div");

        star.className="star";

        const size=Math.random()*3+1;

        star.style.width=size+"px";
        star.style.height=size+"px";

        star.style.left=Math.random()*100+"vw";
        star.style.top=Math.random()*100+"vh";

        star.style.opacity=Math.random();

        star.style.animationDuration=
        (2+Math.random()*6)+"s";

        starsContainer.appendChild(star);

    }

}

createStars();

// --------------------------------------
// Shooting Stars
// --------------------------------------

function shootingStar(){

    const star=document.createElement("div");

    star.className="shootingStar";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top=Math.random()*250+"px";

    shootingContainer.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2200);

}

setInterval(shootingStar,4500);

// --------------------------------------
// Loading Screen Demo
// --------------------------------------

const progress=document.getElementById("progressBar");

const boot=document.getElementById("bootText");

const status=document.getElementById("statusText");

const loading=document.getElementById("loadingScreen");

const story=document.getElementById("story");

const title=document.getElementById("sceneTitle");

const text=document.getElementById("sceneText");

let width=0;

const messages=[

"Initializing System",

"Connecting to Universe",

"Scanning Earth",

"Searching Human Database",

"Searching 8 Billion People",

"Target Found",

"Verifying Identity"

];

let index=0;

const loader=setInterval(()=>{

    width++;

    progress.style.width=width+"%";

    if(width%15===0 && index<messages.length){

        boot.innerHTML=messages[index];

        status.innerHTML=messages[index];

        index++;

    }

    if(width>=100){

        clearInterval(loader);

        setTimeout(()=>{

            loading.style.display="none";

            story.style.display="flex";

            title.innerHTML="ANGUTTY";

            text.innerHTML="Welcome to your own little universe ✨";

        },800);

    }

},60);
