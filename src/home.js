const Home = (() => {
  const contentContainer = document.querySelector("#content");

  const header = document.createElement("header");
  header.innerHTML = `
  <div class="home-container tab-content active" id="home">
  <img class="bg-img" src="assets/images/main.jpg" />
  <h1 class="welcome">Welcome</h1>
  <h2>Greek Food and experience</h2>
</div>`;
  header.setAttribute("class", "js-element");
  contentContainer.appendChild(header);
})();

export default Home;
