function onTabClick(event) {
  const activeTabs = document.querySelectorAll('.active');

  // deactivate tab
  activeTabs.forEach((tab) => {
    tab.className = tab.className.replace('active', ' ');
  });

  // activate new tab
  document.getElementById(event.target.href.split('#')[1]).className
    += ' active';
  console.log(event.target.href.split('#')[1]);
}

const element = document.querySelector('.navbar-nav');

element.addEventListener('click', onTabClick, false);

export default onTabClick;
