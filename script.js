// PAGE NAVIGATION
function goToPage(page) {
    document.body.style.opacity = 0;
    setTimeout(() => {
        window.location.href = page;
    }, 500);
}


// TYPING EFFECT
const text = "Happy Father's Day Daddy❤️!!..Thank you for your endless Support and Love💕.We 3 Will make you Proud Always..Whatever it may be we will always love you Daddy!!..We are very lucky to been your Daughters😘..Thank you soo much for your endless Love towards the Family..You are always my Super Hero😎.Once again Happy Fathers Day Daddyy❤️. We Love You Sooo Muchhhhh😘❤️" 

let index = 0;

function startTyping() {
    const element = document.getElementById("typed-text");

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 40);
        }
    }

    type();
}


// MUSIC CONTROL
function toggleMusic() {
    const music = document.getElementById("bg-music");

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}


// SIMPLE CONFETTI EFFECT
function launchConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.background = "pink";
        confetti.style.top = Math.random() * window.innerHeight + "px";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.opacity = Math.random();
        confetti.style.borderRadius = "50%";

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}