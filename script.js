document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded");
  const demoButton = document.querySelector("demoButton");
  console.log(demoButton);
  const displayCoordinates = document.getElementById("coordinates");

  demoButton.addEventListener("click", () => {
    console.log("button clicked")
    displayCoordinates.textContent = "Coordinates: 41.838506, -87.627907";
  })
});
