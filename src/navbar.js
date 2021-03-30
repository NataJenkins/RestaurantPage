const navbar = (() => {
  const contentContainer = document.querySelector('#content');

  const nav = document.createElement('nav');
  nav.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#home"
        >Home</a
      >
      <a class="nav-item nav-link" href="#menu">Menu</a>
      <a class="nav-item nav-link" href="#about">About</a>
    </div>
  </div>
</nav>`;
  contentContainer.appendChild(nav);
})();

export default navbar;
