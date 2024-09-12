const mainHeading = document.querySelector("h1");

mainHeading.addEventListener("mouseover", function () {
  mainHeading.textContent = "Build an AR app";
});
mainHeading.addEventListener("mouseleave", function () {
  mainHeading.textContent = "Learn ARKit";
});
