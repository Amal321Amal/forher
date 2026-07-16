const typing = document.getElementById("typing");
const message = document.getElementById("message");
const button = document.getElementById("continueBtn");

const title = "Hey 😊";
const text = "I just wanted to make you smile today.";

let i = 0;

function typeTitle() {
    if (i < title.length) {
        typing.innerHTML += title.charAt(i);
        i++;
        setTimeout(typeTitle, 120);
    } else {
        setTimeout(() => {
            message.innerHTML = text;
        }, 500);
    }
}

typeTitle();

button.onclick = function () {

    document.body.style.background = "#111";

    typing.innerHTML = "✨ Surprise ✨";

    message.innerHTML =
    "Some people make ordinary conversations feel special.<br><br>Thank you for being one of them. 🌸<br><br><b>— Amal ❤️</b>";

    button.innerHTML = "😊";
}
