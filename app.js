const nanodegreeCard = document.querySelector(".card");
console.log(nanodegreeCard.textContent);

const nanodegreeCardOneTitle = document.querySelector(".card p");

nanodegreeCardOneTitle.innerHTML = "Expand Your Data Knowledge 📊";

// Adding content
const mainHeading = document.querySelector("h1");
const otherHeading = document.querySelector("h4");
const excitedText = document.createElement("span");

excitedText.textContent = "!!!";
mainHeading.appendChild(excitedText);
otherHeading.appendChild(excitedText);

// testimonials
const adviceHeading = document.createElement("h2");
const testimonialsSection = document.querySelector(".testimonials");

adviceHeading.textContent = "Advice for New Udacity Students";

testimonialsSection.appendChild(adviceHeading);

adviceHeading.insertAdjacentHTML(
  "afterend",
  "<p>Always strive to learn more than you already know. Reading documentation of something you don't understand is a great way to start!</p>"
);

// home page colors

const startButton = document.querySelector("#start-now");
const heroHomepage = document.querySelector(".hero--homepage");
const cards = document.querySelectorAll(".card");

// changes btn color
startButton.style.background = "#2015ff";
// changes btn radius
startButton.style.borderRadius = "5rem";

heroHomepage.classList.add("new-hero");

cards.forEach((card) => card.classList.add("new-card"));
