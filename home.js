// STAP 1: Selecteer alle buttons in de DOM
const buttons = document.querySelectorAll(".add-list");

// STAP 2: Loop door alle buttons en voegt event listeners toe
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Selecteert het icon binnen deze specifieke button
    const iconContent = button.querySelector(".saveButtonHome");

    // Toggle de class
    const isSaved = button.classList.toggle("saved");

    // STAP 3: geeft feedback aan de gebruiker
    // Verandert het icon
    if (isSaved) {
      iconContent.src = "assets/check.svg";
    } else {
      iconContent.src = "assets/addlist.svg";
    }

    console.log("button clicked");
  });
});
