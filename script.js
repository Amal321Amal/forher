/* ==========================================================
                PROJECT ANGUTTY
             CINEMATIC STORY ENGINE v1.0
==========================================================*/

// ==========================================================
// ELEMENTS
// ==========================================================

const loadingScreen = document.getElementById("loadingScreen");
const story = document.getElementById("story");

const progressBar = document.getElementById("progressBar");

const bootTitle = document.getElementById("bootTitle");
const bootText = document.getElementById("bootText");
const statusText = document.getElementById("statusText");

const sceneTitle = document.getElementById("sceneTitle");
const sceneText = document.getElementById("sceneText");
const nextButton = document.getElementById("nextButton");

const starsContainer = document.getElementById("stars");
const shootingContainer = document.getElementById("shootingStars");

// ==========================================================
// BOOT MESSAGES
// ==========================================================

const bootMessages = [

"Powering Quantum Core...",
"Connecting to Universe...",
"Searching Earth...",
"Scanning Human Database...",
"8,126,543,921 Humans Found",
"Filtering Results...",
"Searching...",
"Searching...",
"Searching...",
"One Match Found",
"Identity Verification...",
"Welcome."

];

// ==========================================================
// STORY SCENES
// ==========================================================

const scenes = [

{
title:"ANGUTTY",

text:"Identity verified successfully.<br><br>Welcome to your own little universe ✨",

button:"ACCESS PROFILE"
},

{
title:"Question 01",

text:"Can I borrow just two minutes of your day?",

button:"Yes ❤️"
},

{
title:"Question 02",

text:"Do you believe small things can make someone smile?",

button:"Maybe 😊"
},

{
title:"Question 03",

text:"Among billions of stars...<br><br>can one still be special?",

button:"Continue"
},

{
title:"Question 04",

text:"If someone spent hours building something only to make you smile...<br><br>would you keep watching?",

button:"Yes"
},

{
title:"Secret",

text:"Actually...<br><br>None of these questions had a correct answer.",

button:"Continue"
},

{
title:"One Truth",

text:"They were only here because I wanted a little more of your time ❤️",

button:"Continue"
}

];

// ==========================================================
// CURRENT SCENE
// ==========================================================

let currentScene = 0;

// ==========================================================
// TYPEWRITER
// ==========================================================

function typeWriter(element,text,speed=25){

element.innerHTML="";

let i=0;

const timer=setInterval(()=>{

element.innerHTML=text.substring(0,i);

i++;

if(i>text.length){

clearInterval(timer);

}

},speed);

}

// ==========================================================
// SHOW SCENE
// ==========================================================

function showScene(index){

const scene=scenes[index];

sceneTitle.style.opacity=0;
sceneText.style.opacity=0;
nextButton.style.opacity=0;

setTimeout(()=>{

sceneTitle.innerHTML=scene.title;

typeWriter(sceneText,scene.text,18);

nextButton.innerHTML=scene.button;

sceneTitle.style.opacity=1;
sceneText.style.opacity=1;
nextButton.style.opacity=1;

},400);

}

// ==========================================================
// NEXT BUTTON
// ==========================================================

nextButton.onclick=()=>{

currentScene++;

if(currentScene<scenes.length){

showScene(currentScene);

}else{

nextButton.style.display="none";

sceneTitle.innerHTML="TO BE CONTINUED";

sceneText.innerHTML="The real story begins in Part 2... ❤️";

}

};

// ==========================================================
// LOADING
// ==========================================================

let width=0;

let message=0;

const loader=setInterval(()=>{

width++;

progressBar.style.width=width+"%";

if(width%10===0 && message<bootMessages.length){

bootText.innerHTML=bootMessages[message];

statusText.innerHTML=bootMessages[message];

message++;

}

if(width>=100){

clearInterval(loader);

setTimeout(()=>{

loadingScreen.style.display="none";

story.style.display="flex";

showScene(0);

},600);

}

},35);

// ==========================================================
// STARS
// ==========================================================

function createStars(){

for(let i=0;i<800;i++){

const star=document.createElement("div");

star.className="star";

const size=Math.random()*3+1;

star.style.width=size+"px";

star.style.height=size+"px";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=(2+Math.random()*6)+"s";

starsContainer.appendChild(star);

}

}

createStars();

// ==========================================================
// SHOOTING STAR
// ==========================================================

function shootingStar(){

const star=document.createElement("div");

star.className="shootingStar";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top=Math.random()*250+"px";

shootingContainer.appendChild(star);

setTimeout(()=>{

star.remove();

},2000);

}

setInterval(shootingStar,4500);
