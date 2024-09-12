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
