
let allMessages = [
  "Your smile is the best medicine! 😉💊",
  "Even caffeine bows down to your energy! ☕⚡",
  "You're more powerful than ibuprofen. 💪",
  "You make serotonin jealous. ❤️",
  "Pharmacy school can't handle your brilliance! ✨",
  "You're the reason for the good side effects! 🌈",
  "You + Confidence = Cure for Everything!",
  "You're the human form of vitamin D. ☀️",
  "Finals fear you. Trust that!",
  "You're too compound to be broken!",
  "You're the formula for happiness.",
  "Your strength is stronger than any prescription.",
  "You're proof that brains and beauty belong together.",
  "Your determination deserves a Nobel Prize in Persistence!",
  "You're crushing stress like it's a placebo!",
  "You've got more heart than a cardio ward.",
  "Your dreams are in perfect dosage — one step at a time!",
  "You're a whole mood stabilizer wrapped in cuteness!",
  "You're a pharmacy of positivity, wrapped in brilliance."
];

let currentList = shuffleMessages([...allMessages]);

function shuffleMessages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showMessage() {
  if (currentList.length === 0) {
    currentList = shuffleMessages([...allMessages]);
  }
  const msg = currentList.pop();
  const msgBox = document.getElementById("messageBox");
  msgBox.textContent = msg;
  msgBox.style.display = "block";
}

// Falling flowers effect stays the same
function createFlower() {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.textContent = "🌸";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 3 + Math.random() * 2 + "s";
  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 5000);
}

setInterval(createFlower, 300);
