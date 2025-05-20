var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(event, tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


const text = ["signer", "veloper"];
let typingIndex = 0;
setInterval(() => {
  document.getElementById("typing-text").textContent = text[typingIndex % text.length];
  typingIndex++;
}, 2000);




const loader = document.getElementById("circle-loader");
const numDots = 8;
const radius = 15;
const dots = [];

// Create and append dots
for (let i = 0; i < numDots; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  loader.appendChild(dot);
  dots.push(dot);
}

// Animate the dots around the circle
let angle = 0;
function animateDots() {
  angle += 0.05;
  dots.forEach((dot, i) => {
    const offset = (2 * Math.PI / numDots) * i + angle;
    const x = Math.cos(offset) * radius + loader.clientWidth / 2 - 4;
    const y = Math.sin(offset) * radius + loader.clientHeight / 2 - 4;
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
  });
  requestAnimationFrame(animateDots);
}
animateDots();

// Update text every 2 seconds
const texts = ["Sending message...", "Connecting...", "Please wait..."];
let t = 0;
setInterval(() => {
  document.getElementById("loading-text").textContent = texts[t % texts.length];
  t++;
}, 2000);
