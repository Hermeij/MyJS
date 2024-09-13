const mainHeading = document.querySelector("h1");

mainHeading.addEventListener("mouseover", function () {
  mainHeading.textContent = "Build an AR app";
});
mainHeading.addEventListener("mouseleave", function () {
  mainHeading.textContent = "Learn ARKit";
});

// exercise event listener
const heroModule = document.querySelector(".hero__module");

function removeModuleChild() {
  heroModule.lastElementChild.remove();
  document.removeEventListener("click", removeModuleChild);
}

document.addEventListener("click", removeModuleChild);

// add favorites exercise
const nanoCardTitle = document.getElementsByClassName(
  "card--nanodegree__title"
);

// adds button under title for each card
for (const card of nanoCardTitle) {
  // creates btn for each card
  const button = document.createElement("button");
  button.textContent = "Add to Favorites";
  button.classList.add("button");
  button.classList.add("button--primary");
  card.appendChild(button);

  // click event
  button.addEventListener("click", function (e) {
    // defaults
    e.preventDefault();
    e.target.classList.toggle("favorite");
    console.log(e.target.classList.contains("favorite"));

    // star element
    const stars = document.createElement("p");
    stars.textContent = "🌟🌟🌟";

    // toggle logic
    if (e.target.classList.contains("favorite")) {
      e.target.textContent = "Remove from favorite";
      e.target.appendChild(stars);
    } else {
      e.target.textContent = "Add to Favorites";
      stars.remove();
    }

    //
  });
}
