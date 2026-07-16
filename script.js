// ===============================
// Elements
// ===============================

const loadingScreen = document.getElementById("loading-screen");
const revealScreen = document.getElementById("reveal-screen");

const bootText = document.getElementById("bootText");
const statusText = document.getElementById("statusText");
const progressBar = document.getElementById("progress-bar");

const continueBtn = document.getElementById("continueBtn");

// ===============================
// Boot Sequence
// ===============================

const messages = [
"Initializing...",
"Connecting...",
"Searching...",
"Looking for today's brightest smile...",
"Almost there...",
"Match Found ✨"
];

let msg = 0;
let progress = 0;

bootText.innerHTML = messages[0];
statusText.innerHTML = "Please wait...";

const interval = setInterval(()=>{

progress += 2;
progressBar.style.width = progress + "%";

if(progress==15){
bootText.innerHTML=messages[1];
statusText.innerHTML="Establishing connection...";
}

if(progress==35){
bootText.innerHTML=messages[2];
statusText.innerHTML="Scanning...";
}

if(progress==55){
bootText.innerHTML=messages[3];
statusText.innerHTML="This may take a moment...";
}

if(progress==80){
bootText.innerHTML=messages[4];
statusText.innerHTML="Preparing surprise...";
}

if(progress>=100){

clearInterval(interval);

bootText.innerHTML=messages[5];

statusText.innerHTML="Success ❤️";

setTimeout(()=>{

loadingScreen.classList.remove("active");

revealScreen.classList.add("active");

},1800);

}

},80);

// ===============================
// Continue Button
// ===============================

continueBtn.addEventListener("click",()=>{

document.querySelector(".glass-card").style.transform="scale(.95)";

document.querySelector(".glass-card").style.opacity="0";

setTimeout(()=>{

revealScreen.classList.remove("active");

document.getElementById("stars-screen").classList.add("active");

},700);

});
