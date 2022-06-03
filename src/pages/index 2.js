import './index.css';
import FormValidator from "../script/FormValidator.js";

const addButton = document.querySelectorAll('.add-button');
const addPopup = document.querySelector('#popup__add');
const addForm = document.forms['add'];

const nameInput = addForm.elements['name'];
const telefonInput = addForm.elements['telefon'];
const emailInput = addForm.elements['email'];
const infoInput = addForm.elements['info'];

const escapeClosePopup = (evt) => {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        if (openedPopup) {
            closePopup(openedPopup);
        }
    }
};

const openPopup = (popupElement) => {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', escapeClosePopup);
};

const closePopup = (popupElement) => {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', escapeClosePopup);
};

const openAddForm = () => {
    openPopup(addPopup);
};

// const placeAddSubmitHandler = (event) => {
//     event.preventDefault();
//     const card = new Card({
//         name: nameInput.value,
//         tel: telefonInput.value,
//         email: emailInput.value,
//         info: infoInput.value
//     }, '.place-template');
//     const cardElement = card.generateCard();
//     placeContainer.prepend(cardElement);
//     closePopup(AddPopup);
//     addForm.reset();
// };

const setCloseButtonHandler = (button) => {
    const popupElement = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popupElement));
    popupElement.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('popup'))
            closePopup(popupElement);
    });
};

(() => {
    renderElements();
    setCloseButtonHandler(addPopup.querySelector('.popup__close'));
    addButton.forEach.addEventListener('click', openAddForm);
    // profileForm.addEventListener('submit', profileEditSubmitHandler);
    // addForm.addEventListener('submit', placeAddSubmitHandler);
    // nameInput.value = nameElement.textContent;
    const selectors = {
        inputSelector: '.form__input',
        submitButtonSelector: '.form__submit',
        inactiveButtonClass: 'form__submit_disabled',
        inputErrorClass: 'popup__input_type_error',
        errorClass: 'form__input-error_active',
        freezePlaceholderClass: 'form__placeholder_is-fixed'
    };
    
    const addFormValidation = new FormValidator(selectors, addForm);
    addFormValidation.enableValidation();
})();
