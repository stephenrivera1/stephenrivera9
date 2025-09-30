const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gif = document.querySelector(".gif");

const messages = [
  "Are you sure?",
  "Sure najudd naaa?? :(",
  "final najud na? kay mag hilak nakoo",
  "Last chanceee!",
  "Mag mahay judkaaa!",
  "Hangyooo naniiii!",
];

// GIFs shown when clicking "No"
const noGifs = [
  "https://media1.tenor.com/m/meANmw3hopUAAAAd/long-tears.gif",
  "https://media.tenor.com/N4CS9Sjw_1IAAAAM/sad-spiderman.gif",
  "https://media.tenor.com/aGgnqxZUzeUAAAAM/sad.gif",
  "https://media1.tenor.com/m/_7OhBdyoxl8AAAAC/emoji-sad.gif", 
  "https://media1.tenor.com/m/meANmw3hopUAAAAd/long-tears.gif"
];

let messageIndex = 0;
let noGifIndex = 0;

// Handle No button
noBtn.addEventListener("click", () => {
  noBtn.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Grow Yes button
  let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (currentSize * 2) + "px";

  // Bounce Yes button
  yesBtn.classList.add("bounce");
  setTimeout(() => yesBtn.classList.remove("bounce"), 400);

  // Change GIF (cycle through sad ones)
  gif.src = noGifs[noGifIndex];
  noGifIndex = (noGifIndex + 1) % noGifs.length;
});

// Handle Yes button
yesBtn.addEventListener("click", () => {
  // Just redirect → happy GIF will show in yes_page.html
  window.location.href = "yes_page.html";
});
