import initWebsite from './website.js';
import initMenu from './menu.js'
import initHome from './home.js';
import initContact from './contact.js'

initWebsite();

document.querySelector('.home-button').addEventListener('click', initHome);
document.querySelector('.menu-button').addEventListener('click', initMenu);
document.querySelector('.contact-button').addEventListener('click', initContact);