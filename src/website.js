import createHome from "./home";

function createNavbar() {
    const navbar = document.createElement('ul');
    navbar.classList.add('navbar');

    const homeButton = document.createElement('li');
    const menuButton = document.createElement('li');
    const contactButton = document.createElement('li');

    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';

    homeButton.classList.add('nav-button');
    menuButton.classList.add('nav-button');
    contactButton.classList.add('nav-button');

    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    return navbar;
}

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Joe\'s Pizzeria';

    const navbar = createNavbar();

    header.appendChild(restaurantName);
    header.appendChild(navbar);

    return header;
}

function createMain() {
    const main = document.createElement('div');
    main.classList.add('main');
    return main;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = 'created by irao12';
    return footer;
}

function initWebsite() {
    const content = document.querySelector('#content');

    const header = createHeader();
    const main = createMain();
    const footer = createFooter();

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);

    createHome();
}

export default initWebsite;