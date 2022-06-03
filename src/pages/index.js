import './index.css';
import { FormValidator, PopupWithForm, Section, UserInfo} from "../components";
import {
    formConfig,
    AddButton,
    userInfoInputSelectors,
    userInfoSelectors
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

    function setUserInfoInputs(inputData) {
        userInfoInputSelectors.profile_name.value = inputData.profile_name;
        userInfoInputSelectors.profile_job.value = inputData.profile_job;
    }

    const formValidators = {};
    
    const placeList = new Section({
            items: initialPlaces.reverse(),
            renderer: createCard
        },
        '.places');
    placeList.renderItems();

    const userInfo = new UserInfo(userInfoSelectors);
    const profileEditForm = new PopupWithForm(
        '#popup__edit-profile',
        (inputsData) => userInfo.setUserInfo(inputsData));
    profileEditForm.setEventListeners();
    profileEditButton.addEventListener('click', () => {
        setUserInfoInputs(userInfo.getUserInfo());
        formValidators['edit_profile'].resetValidation();
        profileEditForm.open();
    });

    const addCardForm = new PopupWithForm(
        '#popup__add')

    addCardForm.setEventListeners();
    addButton.addEventListener('click',
        () => {
            formValidators['add'].resetValidation();
            addCardForm.open();
        });

    enableValidation(formConfig);
})();
