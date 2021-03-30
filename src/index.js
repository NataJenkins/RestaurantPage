import navbar from './navbar';
import Home from './home';
import Menu from './menu';
import About from './about';
import onTabClick from './tabs';

const pageLoad = () => {
  navbar();
  Home();
  Menu();
  About();
  onTabClick();
};
pageLoad();
