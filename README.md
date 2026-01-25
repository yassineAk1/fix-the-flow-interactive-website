# Milledoni 

## Beschrijving

Milledoni helpt gebruikers bij het vinden van het perfecte cadeau. Je kan zoeken, filteren en producten opslaan in je eigen lijsten.

![Mockup Result (3)](https://github.com/user-attachments/assets/03a9d918-c962-432f-a0e9-78ecc6dabf78)

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Code conventies](#code-conventies)
  * [Bronnen](#bronnen)

### Responsive

De website is mobile-first gebouwd met breakpoints op 768px en 1024px.

**Mobile (< 768px)**
- Alles onder elkaar gestapeld
- 2 kolommen voor producten
- Compact logo

![Free iPhone 15 Pro Hand Mockup (Mockuuups Studio)](https://github.com/user-attachments/assets/a4dd1a63-0eeb-4fa5-a452-c916c00669f1)  
<img width="937" height="1424" alt="Free Rock iPhone 15 Pro Mockup (Mockuuups Studio)" src="https://github.com/user-attachments/assets/53d11fd9-5afc-4d89-b8f8-48e8b8c6faaf" />


**Tablet (768px - 1023px)**
- CSS Grid layout voor detail pagina
- 3 kolommen voor producten

  <img width="1243" height="1398" alt="Free iPad mockup with wedding theme (Mockuuups Studio)" src="https://github.com/user-attachments/assets/f5b302c6-f568-4c27-b4bb-be9cfae0b012" />
<img width="3371" height="1938" alt="Free iPad Pro mockup on white table (Mockuuups Studio)" src="https://github.com/user-attachments/assets/945ead1d-d666-4a8f-bf28-f00eacc580f7" />


**Desktop (≥ 1024px)**
- Volledig logo zichtbaar
- 4 kolommen voor producten
- Max-width van 1400px voor leesbaarheid

<img width="1542" height="1206" alt="Free Macbook Pro Space Gray mockup on the wooden table (Mockuuups Studio)" src="https://github.com/user-attachments/assets/0f54067b-d87f-43dd-b225-ea541a90d3b6" />
![Mockup Result](https://github.com/user-attachments/assets/bba7fe06-bd86-4eaa-9be9-529d83765fca)  


**Responsive logo met picture element:**

Op mobile zie je het kleine logo, op desktop het volledige.

### Toegankelijkheid

**Toetsenbord navigatie:**
- Skip link om direct naar content te gaan
- Focus states op alle knoppen en links
- Tab door alle interactieve elementen

**Screen readers:**
- Semantische HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA labels op knoppen: `aria-label="Add to list"`
- Alt teksten op alle afbeeldingen

**Formulieren:**
- Labels gekoppeld aan inputs met `for` attribute
- `required` op belangrijke velden
- `autocomplete="email"` voor email

### Huisstijl

De Milledoni huisstijl komt uit een externe stylesheet:

https://github.com/yassineAk1/fix-the-flow-interactive-website/blob/971a601a12a4048c89049b27b3d6ae262416fe43/index.html#L8

**Typografie classes:**
- `.font-xl` - Grote titels
- `.font-l` - Medium tekst
- `.font-m` - Normale tekst

**Visuele elementen:**
- Decoratieve strik bovenaan (`.bow-decoration`)
- Custom iconen voor alle acties
- Afgeronde hoeken en schaduwen

### Belangrijke features

**1. Add to List - Detail Pagina**

Als je op de "Add to list" knop klikt gebeurt er het volgende:
- Button animatie (schaalt even groter)
- Icon draait en verandert naar vinkje
- Tekst verandert naar "Added"
- Popup verschijnt onderaan scherm
- Na 1.5 seconde verdwijnt popup weer

**Hoe het werkt:**
```javascript
const button = document.querySelector(".addbutton");
const textContent = button.querySelector(".listButton-text");
const iconContent = button.querySelector(".listButton-icon");
const popup = document.querySelector(".popup");

button.addEventListener("click", function () {
  const isAdded = button.classList.toggle("added");
  
  if (isAdded) {
    textContent.textContent = "Added";
    iconContent.src = "assets/check.svg";
    popup.classList.add("show");
    
    setTimeout(() => {
      popup.classList.remove("show");
    }, 1500);
  } else {
    textContent.textContent = "Add to";
    iconContent.src = "assets/addlist.svg";
  }
});
```

Ik toggle een class `.added` op de button. CSS zorgt dan voor de animaties:
```css
.addbutton.added {
  animation: confetti-pop 0.6s ease; /* Button schaalt */
}

.addbutton.added .listButton-icon {
  animation: icon-spin-in 0.5s; /* Icon draait */
}
```

**2. Save Button - Home Pagina**

Op de home pagina heeft elk product een hartje om op te slaan. Als je klikt verandert het icoon naar een vinkje.
```javascript
const buttons = document.querySelectorAll(".add-list");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const iconContent = button.querySelector(".saveButtonHome");
    const isSaved = button.classList.toggle("saved");
    
    if (isSaved) {
      iconContent.src = "assets/check.svg";
    } else {
      iconContent.src = "assets/addlist.svg";
    }
  });
});
```

Hier gebruik ik `querySelectorAll` omdat er meerdere buttons zijn. Dan loop ik erdoorheen met `forEach`.

## Kenmerken

### HTML Structuur

**Home pagina:**
- Header met logo en navigatie iconen
- Search bar met "I'm looking for a gift for..."
- Filter form met details elements (inklapbaar)
- Product grid met 9 producten
- Elke product card heeft een save button
- Pagination onderaan
- Footer met newsletter en links

**Detail pagina:**
- Header met back button
- CSS Grid layout voor alles
- Product gallery met voor/volgende knoppen
- Product info met add to list button
- Reviews sectie met sliders
- Google Maps voor winkel locatie
- Aanbevelingen onderaan

### CSS Technieken

**CSS Grid voor Detail Pagina:**

De hele detail pagina gebruikt CSS Grid met named areas. Zo kan ik makkelijk elementen positioneren:
```css
main {
  display: grid;
  grid-template-columns: 1.8fr 1.1fr 1.1fr;
  grid-template-areas:
    "back back back"
    "gallery info info"
    "gallery details details"
    "description details details";
}

.product-gallery { grid-area: gallery; }
.product-info { grid-area: info; }
```

**Responsive Product Grid:**
```css
.recommendations-grid {
  grid-template-columns: repeat(2, 1fr); /* Mobile: 2 kolommen */
}

@media (min-width: 728px) {
  .recommendations-grid {
    grid-template-columns: repeat(3, 1fr); /* Tablet: 3 kolommen */
  }
}

@media (min-width: 1024px) {
  .recommendations-grid {
    grid-template-columns: repeat(4, 1fr); /* Desktop: 4 kolommen */
  }
}
```

**Animaties:**

Button pop animatie:
```css
@keyframes confetti-pop {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
```

Icon spin animatie:
```css
@keyframes icon-spin-in {
  0% { transform: scale(0) rotate(-180deg); }
  100% { transform: scale(1) rotate(0deg); }
}
```

### JavaScript

**Twee bestanden:**
- `detailPagina.js` - Add to list met popup
- `home.js` - Save buttons op home pagina

**Wat ik gebruik:**
- `querySelector` om elementen te pakken
- `addEventListener` voor click events
- `classList.toggle` om classes aan/uit te zetten
- `setTimeout` voor de popup timer
- `forEach` om door meerdere buttons te loopen

## Code conventies

### HTML
- Witregels tussen grote secties
- Semantische tags waar mogelijk
- ARIA labels op interactieve elementen

### CSS
- Media queries genest in de selector
- Logische volgorde (top naar beneden van de pagina)
- BEM-achtige naming voor classes

### JavaScript
- Duidelijke variabele namen
- Comments bij elk stap


# Bronnen
