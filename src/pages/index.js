import './index.css';
import { FormValidator, PopupWithForm} from "../components";
import {
    formConfig
} from "../utils/constants.js";
import '../pages/index.css';

(() => {
    function enableValidation(config) {
        const formList = Array.from(document.forms);
        formList.forEach((formElement) => {
            const validator = new FormValidator(formElement, config)
            const formName = formElement.getAttribute('name')
            formValidators[formName] = validator;
            validator.enableValidation();
        });
    }

    const formValidators = {};
    
    const addCardForm = new PopupWithForm(
        '#popup__add',
        (entry) => {
            fetch('http://online-teoretik.shme.xyz/api/v1/entries/', {
                method: 'POST', 
                body: JSON.stringify(entry),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token 26fa8cf190dc17b934e2b5365232b4ff9cc79ea6'
                }
            }).then(res => {
               alert('Заявка принята! В ближайшее время мы с Вами свяжемся.');
            }).catch(error => alert(error));
        });

    const buttonPopupList = document.querySelectorAll('.add-button');

    addCardForm.setEventListeners();
    buttonPopupList.forEach((buttonPopup) => {
       buttonPopup.addEventListener('click',
        (evt) => {
            formValidators['add'].resetValidation();
            addCardForm.open();
            console.log(evt.target.classList);
            if (evt.target.classList.contains('.add-button_block_price')) {
                const courseName = evt.target.closest('.price__content')
                    .querySelector('.price__title').textContent;
                    //todo add to notes in popup form 
            console.log(courseName);
            }
        }) 
    });

    enableValidation(formConfig);
})();
