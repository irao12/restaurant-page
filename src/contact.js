function initContact () {
    const main = document.querySelector('.main');
    main.textContent = '';
    
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactHeading = document.createElement('h1');
    contactHeading.textContent = 'Contact Us';

    const phoneHeading = document.createElement('h2');
    phoneHeading.textContent = 'Phone Number';
    phoneHeading.classList.add('phone-heading');

    const phoneNum = document.createElement('p');
    phoneNum.classList.add('phone-number');
    phoneNum.textContent = '23123-2323-23232';

    const addressHeading = document.createElement('h2');
    addressHeading.classList.add('address-heading');
    addressHeading.textContent = 'Address';
    const address = document.createElement('p');
    address.classList.add('address');
    address.textContent = 'Somewhere out there';

    const restaurantImage = document.createElement('img');
    restaurantImage.src = './images/restaurant.jpg';

    contact.appendChild(contactHeading);
    contact.appendChild(phoneHeading);
    contact.appendChild(phoneNum);
    contact.appendChild(addressHeading);
    contact.appendChild(address);
    contact.appendChild(restaurantImage);

    main.appendChild(contact);
}

export default initContact;