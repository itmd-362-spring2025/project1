document.addEventListener("DOMContentLoaded", () => {
  const demoButton = document.querySelector("#demoButton");
  const displayCoordinates = document.getElementById("coordinates");

  demoButton.addEventListener("click", () => {
    displayCoordinates.textContent = "Coordinates: 41.838506, -87.627907";
  })
});
