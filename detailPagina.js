// STAP 1: Selecteer elementen in de DOM
// 1.1 Selecteer de button waarmee de interactie geactiveerd wordt
const button = document.querySelector(".addbutton");

// 1.2 Selecteer de tekst binnen de button die aangepast moet worden
const textContent = button.querySelector(".listButton-text");

// 1.3 Selecteer het icon binnen de button die aangepast moet worden
const iconContent = button.querySelector(".listButton-icon");

// 1.4 Selecteer de popup die moet verschijnen
const popup = document.querySelector(".popup");

// STAP 2: Koppel een event aan de button
// Wacht tot iemand op de button klikt
button.addEventListener("click", function () {
  // STAP 3: Geef feedback aan de gebruiker
  // 3.1 Toggle de 'added' class en sla de boolean op
  const isAdded = button.classList.toggle("added");

  // 3.2 Als de class is toegevoegd, dus is true is
  if (isAdded) {
    // 3.3 Verander de tekst naar 'Added'
    textContent.textContent = "Added";

    // 3.4 Verander het icon naar een check icon
    iconContent.src = "assets/check.svg";

    // 3.5 Toon de popup als extra feedback
    popup.classList.add("show");

    button.classList.add("ready");

    // 3.6 Verberg de popup automatisch na 1 seconde
    setTimeout(() => {
      popup.classList.remove("show");
    }, 1500);
  } else {
    // 3.7 Als de class is verwijderd, dus false
    // Zet de tekst terug naar 'Add to'
    textContent.textContent = "Add to";

    // Zet de icon terug naar de add to versie
    iconContent.src = "assets/addlist.svg";
  }

  // log in de console dat de button geklikt is
  console.log("button clicked");
});

// STAP 1: Selecteert elementen in de DOM

// 1.1 Selecteert alle sliders van het type "range"
const sliders = document.querySelectorAll('input[type="range"]');


// STAP 2: Loopt door elke slider heen


// 2.1 pakt alle sliders op de pagina
sliders.forEach(function (slider) {

  // STAP 3: Geeft visuele feedback aan de gebruiker

  // 3.1 Maak een functie die de slider-stijl bijwerkt
  function updateSlider() {

    // 3.2 Haalt de huidige waarde van de slider op
    const position = slider.value;

    // 3.3 Haal de kleur op uit het data-color attribuut
    const color = slider.dataset.color;

    // 3.4 Maakt een gradient:
    // Tot de huidige positie krijgt de slider kleur Daarna wordt de slider grijs
    slider.style.background =
      `linear-gradient(90deg, ${color} ${position}%, #e0e0e0 ${position}%)`;
  }

  // 3.5 Update de slider terwijl de gebruiker sleept
  slider.addEventListener("input", updateSlider);

  // 3.6 Zet de juiste startkleur wanneer de pagina laadt
  updateSlider();
});
