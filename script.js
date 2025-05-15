
const messages = [
    "Take one deep breath and smile 💜",
    "You're doing amazing, Wenza! Keep it up 🌸",
    "Pharmacy is tough, but you're tougher 💊",
    "This is your daily dose of 'You're enough' 💐",
    "Dr. Kudzi says: Take breaks, you deserve them 💜",
    "Keep calm and crush that pharmacology exam 🧪",
    "You + Coffee + Sleep = Impossible, but hang in there ☕💊",
    "Every pill you learn brings you closer to your dream 💡",
    "Side effect of this capsule: Extreme confidence 🌟",
    "Take one smile with water every morning 💧😊"
];

document.getElementById("prescriptionBtn").addEventListener("click", () => {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("messageText").textContent = msg;
    document.getElementById("capsuleMessage").classList.remove("hidden");
});
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.textContent = "🌸";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (2 + Math.random() * 3) + "s";
    flower.style.fontSize = (16 + Math.random() * 24) + "px";
    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 5000);
}

setInterval(createFlower, 300);

