const addButton = document.querySelectorAll('.add-button');
const popup = document.querySelector('.popup');
const form = document.forms.zapic;

let closeButton = document.querySelector('.popup__close');
let saveButton = document.querySelector('.popup__form-submit');

function openPopup() {
    popup.classList.add('popup_opened');
}

// const escapeClosePopup = (evt) => {
//     if (evt.key === 'Escape') {
//         const openedPopup = document.querySelector('.popup_opened');
//         if (openedPopup) {
//             closePopup(openedPopup);
//         }
//     }
// };

// const openPopup = (popupElement) => {
//     popupElement.classList.add('popup_opened');
//     document.addEventListener('keydown', escapeClosePopup);
// };

// const closePopup = (popupElement) => {
//     popupElement.classList.remove('popup_opened');
//     document.removeEventListener('keydown', escapeClosePopup);
// };

// const openEditProfileForm = () => {
//     openPopup(popup);
// };



// function close() {
//     popup.classList.add('popup_hidden');
// }

// function save() {
//     title.textContent = formName.value
//     subtitle.textContent = formWork.value
//     close();
// }

saveButton.addEventListener('click', save);
addButton.forEach(b=>b.addEventListener('click', openPopup));
closeButton.addEventListener('click', close);