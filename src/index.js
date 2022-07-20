import initWebsite from './website.js';
import initMenu from './menu.js'
import initHome from './home.js';

initWebsite();

document.querySelector('.home-button').addEventListener('click', initHome);
document.querySelector('.menu-button').addEventListener('click', initMenu);
