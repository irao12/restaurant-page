function createIntroText() {
    const introText = document.createElement('div');
    introText.classList.add('intro-text');
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = "Joe's Pizzeria";
    const restaurantDescription = document.createElement('p');
    restaurantDescription.textContent = "Welcome! Here at Joe's Pizzeria, we make the most delicious pizza in the city. \
                                        With a unique style originated from our family, we aim to provide our customers \
                                        excellent service and the highest quality pizza."
    introText.appendChild(restaurantName);
    introText.appendChild(restaurantDescription);

    return introText;
}

function createMainPizzaImg () {
    const mainPizzaImg = document.createElement('div');
    mainPizzaImg.classList.add('main-pizza-img');
    return mainPizzaImg;
}

function createIntro() {
    const intro = document.createElement('div');
    intro.classList.add("intro");
    const introText = createIntroText();
    intro.appendChild(introText);
    const mainPizzaImg = createMainPizzaImg();
    intro.appendChild(mainPizzaImg);

    return intro;
}

function createHome() {
    const main = document.querySelector('.main');

    const home = document.createElement('div');
    home.classList.add("home");
    const intro = createIntro();
    home.appendChild(intro);
    main.appendChild(home);
}

export default createHome;