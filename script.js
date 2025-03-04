document.addEventListener("DOMContentLoaded", () => {
  const demoButton = document.querySelector("input[value='Demo']");
  const displayCoordinates = document.getElementById("coordinates");

  demoButton.addEventListener("click", () => {
    console.log("button clicked");
    displayCoordinates.textContent = "Coordinates: 41.838506, -87.627907";
  })
});
