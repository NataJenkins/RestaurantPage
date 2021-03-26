const Menu = (() => {
  const contentContainer = document.querySelector("#content");

  const menu = document.createElement("div");
  menu.innerHTML = `
    <div class="menu-contain">
<div class="menu-ite">
  <div class="dish">Amygdalota</div>
  <div class="price">$2.00</div>
</div>
<div class="menu-ite">
  <div class="dish">Courgette Balls</div>
  <div class="price">$4.00</div>
</div>
<div class="menu-ite">
  <div class="dish">Dolmadakia</div>
  <div class="price">$4.00</div>
</div>
<div class="menu-ite">
  <div class="dish">Tomatokeftedes</div>
  <div class="price">$8.00</div>
</div>
<div class="menu-ite">
  <div class="dish">Feta Me Meli</div>
  <div class="price">$10.00</div>
</div>
</div>
`;
  menu.setAttribute("class", "js-menu");
  contentContainer.appendChild(menu);
})();

export default Menu;
