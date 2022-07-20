import initHome from "./home";
import initMenu from "./menu";
import initContact from "./contact";

function updateSelected(selected) {
    const homeButton = document.querySelector('.home-button');
    const menuButton = document.querySelector('.menu-button');
    const contactButton = document.querySelector('.contact-button');

    if (document.querySelector('.selected'))
        document.querySelector('.selected').classList.remove('selected');

    switch (selected) {
        case 'home':
            homeButton.classList.add('selected');
            break;
        case 'menu':
            menuButton.classList.add('selected');
            break;
        case 'contact':
            contactButton.classList.add('selected');
            break;
    }
}

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
    homeButton.classList.add('home-button');

    menuButton.classList.add('nav-button');
    menuButton.classList.add('menu-button');
    
    contactButton.classList.add('nav-button');
    contactButton.classList.add('contact-button');

    homeButton.addEventListener('click', ()=>{
        initHome();
        updateSelected('home');
    });
    menuButton.addEventListener('click', ()=>{
        initMenu();
        updateSelected('menu');
    });
    contactButton.addEventListener('click', ()=>{
        initContact();
        updateSelected('contact');
    });

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

    const github = document.createElement('a');
    github.href='https://github.com/irao12';

    const githubIcon = document.createElement('img');
    githubIcon.classList.add('github-icon');
    githubIcon.src = '/images/GitHub-Mark-32px.png';
    github.appendChild(githubIcon);

    footer.appendChild(github);

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

    initHome();
    updateSelected('home');
}

export default initWebsite;