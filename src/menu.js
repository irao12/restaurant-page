
function createMenuItem (name, price, description, image){
    const item = document.createElement('div');
    item.classList.add('menu-item');

    const itemName = document.createElement('h2');
    itemName.textContent = name;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = price;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    const itemImage = document.createElement('img');
    itemImage.src=image;

    item.appendChild(itemName);
    item.appendChild(itemPrice);
    item.appendChild(itemImage);
    item.appendChild(itemDescription);

    return item;
}

function createMenuList() {
    const menuList = document.createElement('div');
    menuList.classList.add('menu-list');
    const plainPizza = createMenuItem('Plain Pizza', '$11',
                                      'A pizza pie with our signature\
                                      tomato sauce, premium mozarella cheese, \
                                      and delicious crust',
                                      './images/plainpizza.jpg'
                                     );
    const pepperoniPizza = createMenuItem('Pepperoni Pizza', '$13',
                                      'A pizza pie with our \
                                      tomato sauce, mozarella cheese, \
                                      and locally produced pepperoni',
                                      './images/pepperonipizza.jpg'
                                     );
    const margheritaPizza = createMenuItem('Margherita Pizza', '$15',
                                           'A beautifully made margherita pizza\
                                           with home-grown basil, amazing cheese',
                                           './images/margheritapizza.jpg'
                                          );
    const randomPizza = createMenuItem('Build Your Own Pizza', '$11 + $2 per topping',
                                           'Have your own preferences? You can build \
                                           your own pizza with our fresh ingredients',
                                           './images/randompizza.jpg'
                                          );                                      
    menuList.appendChild(plainPizza);
    menuList.appendChild(pepperoniPizza);
    menuList.appendChild(margheritaPizza);
    menuList.appendChild(randomPizza);

    return menuList;
}

function initMenu () {
    const main = document.querySelector('.main');
    main.textContent = '';

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuHeading = document.createElement('h1');
    menuHeading.classList.add('menu-heading');
    menuHeading.textContent = 'Menu';

    const menuList = createMenuList();

    menu.appendChild(menuHeading);
    menu.appendChild(menuList);

    main.appendChild(menu);
}

export default initMenu;