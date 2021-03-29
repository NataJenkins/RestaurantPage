const About = (() => {
  const contentContainer = document.querySelector("#content");

  const about = document.createElement("div");
  about.innerHTML = `
  <div class="about-container" id="about">
  <h1>About Us</h1>
  <div class="about-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
    placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus,
    pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus
    pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit
    amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id
    quam. Nulla bibendum vulputate ante, non malesuada eros lobortis
    euismod
  </div>
</div>
  `;
  about.setAttribute("class", "js-about");
  contentContainer.appendChild(about);
})();

export default About;
