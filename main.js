(() => {
  "use strict";
  const e = (() => {
      const e = document.querySelector("#content"),
        n = document.createElement("nav");
      (n.innerHTML =
        '\n  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">\n  <button\n    class="navbar-toggler"\n    type="button"\n    data-toggle="collapse"\n    data-target="#navbarNavAltMarkup"\n    aria-controls="navbarNavAltMarkup"\n    aria-expanded="false"\n    aria-label="Toggle navigation"\n  >\n    <span class="navbar-toggler-icon"></span>\n  </button>\n  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">\n    <div class="navbar-nav">\n      <a class="nav-item nav-link active" href="#home"\n        >Home</a\n      >\n      <a class="nav-item nav-link" href="#menu">Menu</a>\n      <a class="nav-item nav-link" href="#about">About</a>\n    </div>\n  </div>\n</nav>'),
        e.appendChild(n);
    })(),
    n = (() => {
      const e = document.querySelector("#content"),
        n = document.createElement("header");
      (n.innerHTML =
        '\n  <div class="home-container tab-content active" id="home">\n  <img class="bg-img" src="assets/images/main.jpg" />\n  <h1 class="welcome">Welcome</h1>\n  <h2>Greek Food and experience</h2>\n</div>'),
        n.setAttribute("class", "js-element"),
        e.appendChild(n);
    })(),
    a = (() => {
      const e = document.querySelector("#content"),
        n = document.createElement("div");
      (n.innerHTML =
        '\n    <div class="menu-contain tab-content" id="menu">\n<div class="menu-ite">\n  <div class="dish">Amygdalota</div>\n  <div class="price">$2.00</div>\n</div>\n<div class="menu-ite">\n  <div class="dish">Courgette Balls</div>\n  <div class="price">$4.00</div>\n</div>\n<div class="menu-ite">\n  <div class="dish">Dolmadakia</div>\n  <div class="price">$4.00</div>\n</div>\n<div class="menu-ite">\n  <div class="dish">Tomatokeftedes</div>\n  <div class="price">$8.00</div>\n</div>\n<div class="menu-ite">\n  <div class="dish">Feta Me Meli</div>\n  <div class="price">$10.00</div>\n</div>\n</div>\n'),
        n.setAttribute("class", "js-element"),
        e.appendChild(n);
    })(),
    t = (() => {
      const e = document.querySelector("#content"),
        n = document.createElement("div");
      (n.innerHTML =
        '\n  <div class="about-container tab-content" id="about">\n  <h1>About Us</h1>\n  <div class="about-text">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque\n    placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus,\n    pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus\n    pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit\n    amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id\n    quam. Nulla bibendum vulputate ante, non malesuada eros lobortis\n    euismod\n  </div>\n</div>\n  '),
        n.setAttribute("class", "js-element"),
        e.appendChild(n);
    })();
  function s(e) {
    document.querySelectorAll(".active").forEach((e) => {
      e.className = e.className.replace("active", " ");
    }),
      (document.getElementById(e.target.href.split("#")[1]).className +=
        " active"),
      console.log(e.target.href.split("#")[1]);
  }
  document.querySelector(".navbar-nav").addEventListener("click", s, !1);
  const i = s;
  e(), n(), a(), t(), i();
})();