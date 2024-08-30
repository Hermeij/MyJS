/*document.addEventListener("click", function () {
  console.log(" you clicked document page");
});
document.addEventListener("mouseOver", function () {

    const h1Element=document.querySelector("h1");
});*/
/*const header = document.querySelector("h1");
const orginalText = header.textContent;
const updatedText = "build an AR APP";
header.addEventListener("mouseover", function () {
  header.textContent = updatedText;
});
header.addEventListener("mouseout", function () {
  header.textContent = orginalText;
});
*/
document.addEventListener("click", function () {
  console.log("The document was clicked");
});

document.body.addEventListener("click", function () {
  console.log("The document body was clicked");
});
