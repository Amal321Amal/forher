// =========================
// LOADING TRANSITION
// =========================

const loadingScreen = document.getElementById("loading-screen");
const mainScreen = document.getElementById("main-screen");

const title = document.getElementById("title");
const message = document.getElementById("message");
const button = document.getElementById("continueBtn");

// Wait for loading animation
setTimeout(() => {

    loadingScreen.style.opacity = "0";

    setTimeout(() => {

        loadingScreen.style.display = "none";

        mainScreen.style.display = "flex";

        showScene1();

    },1000);

},4200);


// =========================
// SCENE DATA
// =========================

const scenes = [

{

title:"Hey 😊",

text:"I wasn't sure whether to send this... but I thought maybe today could use a little smile."

},

{

title:"Wait... ✨",

text:"Don't rush. This isn't just another webpage. Every click is hiding something."

},

{

title:"For You 🌸",

text:"Some people make ordinary conversations feel unexpectedly special."

},

{

title:"Guess Who? ❤️",

text:"Yes... I'm talking about you, Angutty."

},

{

title:"😊",

text:"Thank you for existing exactly as you are."

}

];

let currentScene = 0;


// =========================
// TYPEWRITER EFFECT
// =========================

function typeWriter(element,text,speed=35){

element.innerHTML="";

let i=0;

const typing=setInterval(()=>{

element.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

}

},speed);

}


// =========================
// SHOW SCENE
// =========================

function showScene(index){

title.style.opacity=0;
message.style.opacity=0;

setTimeout(()=>{

title.innerHTML=scenes[index].title;

typeWriter(message,scenes[index].text);

title.style.opacity=1;
message.style.opacity=1;

},300);

}

function showScene1(){

showScene(0);

}


// =========================
// BUTTON
// =========================

button.addEventListener("click",()=>{

currentScene++;

if(currentScene<scenes.length){

showScene(currentScene);

}
else{

button.innerHTML="✨ More Coming Soon ✨";

button.disabled=true;

}

});
// ======================================
// CREATE ANIMATED STARS
// ======================================

const starsContainer = document.getElementById("stars");

for(let i = 0; i < 250; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * window.innerWidth + "px";

    star.style.top = Math.random() * window.innerHeight + "px";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDuration = (2 + Math.random() * 5) + "s";

    starsContainer.appendChild(star);

}
// ====================================
// SHOOTING STARS
// ====================================

function createShootingStar(){

    const star = document.createElement("div");

    star.classList.add("shooting-star");

    star.style.left =
        Math.random()*window.innerWidth+"px";

    star.style.top =
        Math.random()*250+"px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2500);

}

// Every 6 seconds

setInterval(()=>{

    createShootingStar();

},6000);
// =========================================
// CINEMATIC GALAXY BACKGROUND
// =========================================

function showScene1(){

    const starsContainer = document.getElementById("stars");
    starsContainer.innerHTML = "";

    // -----------------------------
    // Create 700 Stars
    // -----------------------------
    for(let i=0;i<700;i++){

        const star = document.createElement("div");
        star.className = "star";

        const size = Math.random()*3+1;

        star.style.width = size+"px";
        star.style.height = size+"px";

        star.style.left = Math.random()*100+"vw";
        star.style.top = Math.random()*100+"vh";

        star.style.opacity = Math.random();

        // Random brightness
        star.style.filter =
        `drop-shadow(0 0 ${Math.random()*8+2}px white)`;

        // Different animation speeds
        const twinkle =
        2 + Math.random()*6;

        const float =
        30 + Math.random()*60;

        star.style.animation =
        `twinkle ${twinkle}s infinite ease-in-out,
         floatStar ${float}s linear infinite`;

        starsContainer.appendChild(star);
    }

    // -----------------------------
    // Shooting Stars
    // -----------------------------

    function createMeteor(){

        const meteor=document.createElement("div");

        meteor.className="shooting-star";

        meteor.style.left=
        Math.random()*window.innerWidth+"px";

        meteor.style.top=
        Math.random()*250+"px";

        meteor.style.animationDuration=
        (1+Math.random())+"s";

        document.body.appendChild(meteor);

        setTimeout(()=>{
            meteor.remove();
        },2200);

    }

    setInterval(createMeteor,3500);

    // -----------------------------
    // Floating Galaxy Effect
    // -----------------------------

    let offset=0;

    setInterval(()=>{

        offset+=0.08;

        starsContainer.style.transform=
        `translateY(${Math.sin(offset)*10}px)
         translateX(${Math.cos(offset)*6}px)
         scale(${1+Math.sin(offset/2)*0.015})`;

    },40);

}
