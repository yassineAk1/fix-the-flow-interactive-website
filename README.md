
# Milledoni 


## Beschrijving

Milledoni helpt gebruikers bij het vinden van het perfecte cadeau door een overzichtelijke catalogus met filters, persoonlijke lijsten en gedetailleerde productinformatie. De website biedt zowel inspiratie als praktische aankoopopties.

![Mockup Result (3)](https://github.com/user-attachments/assets/03a9d918-c962-432f-a0e9-78ecc6dabf78)

### Responsive

De website is **mobile-first** ontworpen met breakpoints op 768px en 1024px:

**Mobile (< 768px)**
- Gestapelde layout
- Compacte navigatie met iconen
- Product grid in 2 kolommen


**Tablet (768px - 1023px)**
- CSS Grid layout met named areas voor detail pagina
- Grid template: `1.8fr 1.1fr 1.1fr`
- Product grid uitbreiding naar 3 kolommen


**Desktop (≥ 1024px)**
- Geoptimaliseerde grid: `2fr 1fr 1fr`
- Product grid met 4 kolommen
- Volledig logo (fullLogo.svg) via picture element
- Max-width van 1400px

**Picture element implementatie:**
```html
<picture>
  <source srcset="assets/fullLogo.svg" media="(min-width:770px)">
  <img src="assets/Group117.svg" alt="milledoni Logo">
</picture>
```

### Toegankelijk

**Toetsenbordnavigatie**
- Skip-to-content link: `<a href="#main" class="skip">Skip to main content</a>`
- Focus states op alle interactieve elementen

**Screen reader ondersteuning**
- Semantische HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA labels: `aria-label="Add to list"`, `aria-label="Pagination"`, `aria-label="Filter opties"`


**Formulieren**
- `<label for="">` koppelingen
- `autocomplete="email"` voor email veld
- Required attribute op email input
- Fieldsets voor radio button groepen

**Visueel**
- `.visually-hidden` class voor screen reader-only content
- Alt teksten op alle afbeeldingen
- Voldoende kleurcontrast via huisstijl

### Huisstijl

De Milledoni huisstijl wordt gebruikt via externe stylesheet:

```html
<link rel="stylesheet" href="https://yassineak1.github.io/look-and-feel-styleguide/styleguide-milledoni.css" />
```

**Typografische classes:**
- `.font-xl` - Extra large (product titels)
- `.font-l` - Large (back button)
- `.font-m` - Medium (body tekst)

**Visuele elementen:**
- Decoratieve strik: `.bow-decoration`
- Responsive logo's via picture element
- Custom iconen voor alle acties
- Afgeronde hoeken en subtiele shadows

### Interactief

**1. Add to List functionaliteit - Detail Pagina**

De add to list button op de detail pagina geeft feedback met animaties en een popup.

**JavaScript (detailPagina.js):**
```javascript
// STAP 1: Selecteer elementen in de DOM
const button = document.querySelector(".addbutton");
const textContent = button.querySelector(".listButton-text");
const iconContent = button.querySelector(".listButton-icon");
const popup = document.querySelector(".popup");

// STAP 2: Koppel een event aan de button
button.addEventListener("click", function () {
  // STAP 3: Geef feedback aan de gebruiker
  const isAdded = button.classList.toggle("added");
  
  if (isAdded) {
    textContent.textContent = "Added";
    iconContent.src = "assets/check.svg";
    popup.classList.add("show");
    button.classList.add("ready");
    
    setTimeout(() => {
      popup.classList.remove("show");
    }, 1500);
  } else {
    textContent.textContent = "Add to";
    iconContent.src = "assets/addlist.svg";
  }
  
  console.log("button clicked");
});
```



**CSS Animaties:**
```css
.addbutton.added {
  animation: confetti-pop 0.6s ease;
}

.addbutton.added .listButton-icon {
  animation: icon-spin-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes confetti-pop {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes icon-spin-in {
  0% { transform: scale(0) rotate(-180deg); opacity: 0; }
  70% { transform: scale(1.2) rotate(20deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
}
```


**Popup Feedback Systeem:**
```css
.popup {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.7);
  opacity: 0;
  transition: 0.3s ease;
  pointer-events: none;
}

.popup.show {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
```

**2. Save Button functionaliteit - Home Pagina**

Op de home pagina heeft elk product een save button die de status visueel bijhoudt.

**JavaScript (home.js):**
```javascript
// STAP 1: Selecteer alle buttons in de DOM
const buttons = document.querySelectorAll(".add-list");

// STAP 2: Loop door alle buttons en voegt event listeners toe
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const iconContent = button.querySelector(".saveButtonHome");
    const isSaved = button.classList.toggle("saved");
    
    // STAP 3: geeft feedback aan de gebruiker
    if (isSaved) {
      iconContent.src = "assets/check.svg";
    } else {
      iconContent.src = "assets/addlist.svg";
    }
    
    console.log("button clicked");
  });
});
```



**CSS Hover Effects:**
```css
.article-product:hover {
  transform: translateY(-3px);
}

.add-list:hover {
  transform: scale(1.15);
}
```

## Kenmerken

### HTML Structuur

**Home pagina (index.html):**
```
<header>
  <a class="skip"> - Skip to main content
  <a class="logo"> - Picture element met responsive logo
  <nav class="nav-icons"> - Navigatie iconen
  
<main id="main">
  <form class="search-bar">
    <h2 class="heading-search"> - "I'm looking for a gift for... my uncle"
    <input type="search">
    <div class="community"> - Community badge
    
  <section class="gifts">
    <div class="bow-decoration"> - Decoratief element
    <h1> - "Get inspired by the world of Milledoni"
    <form class="filter-form"> - Nested details elementen
    <article class="article-product"> (x9) - Product cards
      <a class="gift-listing">
        <div class="article-product-img">
        <div class="article-tags">
        <div class="product-info">
          <p class="product-title">
          <div class="listing-footer"> - Saved/Given stats
      <button class="add-list">
    <nav class="pagination">
    
<footer>
  <form class="newsletter-form">
  <nav class="footer-links">
  <section class="legal">
```
![Mockup Result (6)](https://github.com/user-attachments/assets/e428b83d-2387-4566-9a6b-2b92d5bf7d6d)
**Detail pagina (detail.html):**
```
<header class="detail-pagina-header">
  <a class="logo">
  <nav class="nav-icons">
  
<main> - CSS Grid Layout
  <a class="back-button"> - Back navigatie
  
  <div class="product-info">
    <h1 class="title">
    <p> - Beschrijving met details element
    <p class="font-m"> - Prijs
    <div class="button-wrapper">
      <button class="addbutton">
      <button class="shareButton addbutton">
      
  <div class="product-gallery">
    <div class="gallery-main">
      <img class="popup"> - Popup voor feedback
      <button class="nav prev">
      <img class="main-img">
      <button class="nav next">
      
  <section class="product-description">
  
  <section class="product-details">
    <article class="detail-item"> - Why this gift
    <article class="detail-item"> - Good to know
    
  <section class="reviews-section">
    <div class="review-item"> (x3)
      <input type="range" data-color="">
      
  <section class="map-section">
    <iframe> - Google Maps embed
    
  <section class="shop-online">
    <ul class="shop-list"> - Online retailers
    
  <section class="shop-in-person">
    <ul class="shop-list"> - Fysieke locaties
    
  <section class="recommendations">
    <div class="recommendations-grid">
      <article class="article-product"> (x4)
      
<footer class="footer-detail">
  <form class="newsletter-form">
  <nav class="footer-links">
  <div class="legal">
```

### CSS Technieken

**1. CSS Grid voor Detail Pagina Layout**

```css
@media (min-width: 768px) {
  main {
    display: grid;
    grid-template-columns: 1.8fr 1.1fr 1.1fr;
    grid-template-areas:
      "back back back"
      "gallery info info"
      "gallery details details"
      "description details details"
      "description reviews reviews"
      "map reviews reviews"
      "map reviews reviews"
      "map shopOnline shopInPerson"
      "recommendations recommendations recommendations";
    max-width: 1400px;
    margin: 0 auto;
    gap: 1rem;
  }
}
```

**Grid area toewijzingen:**
```css
.back-button { grid-area: back; }
.product-gallery { grid-area: gallery; }
.product-info { grid-area: info; }
.product-details { grid-area: details; }
.reviews-section { grid-area: reviews; }
.product-description { grid-area: description; }
.shop-online { grid-area: shopOnline; }
.shop-in-person { grid-area: shopInPerson; }
.map-section { grid-area: map; }
.recommendations { grid-area: recommendations; }
```

**2. Responsive Product Grid**

```css
.recommendations-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 728px) {
  .recommendations-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}

@media (min-width: 1024px) {
  .recommendations-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
}
```

**3. Button Animaties voor Add to List**

```css
.addbutton.added {
  animation: confetti-pop 0.6s ease;
}

.addbutton.added .listButton-icon {
  animation: icon-spin-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes confetti-pop {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes icon-spin-in {
  0% { transform: scale(0) rotate(-180deg); opacity: 0; }
  70% { transform: scale(1.2) rotate(20deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
}

.addbutton.ready:not(.added) {
  animation: confetti-reverse 0.5s ease;
}

.addbutton.ready:not(.added) .listButton-icon {
  animation: icon-spin-out 0.5s ease;
}
```

**4. Hover Effects**

```css
.article-product:hover {
  transform: translateY(-3px);
}

.add-list:hover {
  transform: scale(1.15);
}

summary:hover {
  color: var(--accentcolor);
}
```




### JavaScript Functionaliteit

**Bestanden:**
- `detailPagina.js` - Add to list interactie met popup feedback
- `home.js` - Save button interacties voor productlijst

**detailPagina.js - Add to List met animaties:**

```javascript
// STAP 1: Selecteer elementen in de DOM
const button = document.querySelector(".addbutton");
const textContent = button.querySelector(".listButton-text");
const iconContent = button.querySelector(".listButton-icon");
const popup = document.querySelector(".popup");

// STAP 2: Koppel een event aan de button
button.addEventListener("click", function () {
  // STAP 3: Geef feedback aan de gebruiker
  const isAdded = button.classList.toggle("added");
  
  if (isAdded) {
    textContent.textContent = "Added";
    iconContent.src = "assets/check.svg";
    popup.classList.add("show");
    button.classList.add("ready");
    
    setTimeout(() => {
      popup.classList.remove("show");
    }, 1500);
  } else {
    textContent.textContent = "Add to";
    iconContent.src = "assets/addlist.svg";
  }
  
  console.log("button clicked");
});
```

**Gebruikte technieken:**
- `querySelector` 
- `classList.toggle` 
- `setTimeout` 
- Icon swap via `src` attribute

**home.js - Multiple Save Buttons:**

```javascript
// STAP 1: Selecteer alle buttons in de DOM
const buttons = document.querySelectorAll(".add-list");

// STAP 2: Loop door alle buttons en voegt event listeners toe
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const iconContent = button.querySelector(".saveButtonHome");
    const isSaved = button.classList.toggle("saved");
    
    // STAP 3: geeft feedback aan de gebruiker
    if (isSaved) {
      iconContent.src = "assets/check.svg";
    } else {
      iconContent.src = "assets/addlist.svg";
    }
    
    console.log("button clicked");
  });
});
```

**Gebruikte technieken:**
- `querySelectorAll` voor meerdere elementen
- `forEach` loop voor 
- Toggle 




## Bronnen



## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
```
