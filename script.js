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
