export const userInfoSelectors = {
    nameSelector: '.profile__title',
    jobSelector: '.profile__subtitle',
}

export const userInfoInputSelectors = {
    profile_name: document.querySelector('input[name=name]'),
    profile_job: document.querySelector('input[name=profile_job]'),
}

export const addButton = document.querySelector('.add-button');

export const formConfig = {
    fieldSelector: '.form__field',
    inputSelector: '.form__input',
    placeholderSelector: '.form__placeholder',
    inputErrorSelector: '.form__input-error',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active',
    freezePlaceholderClass: 'form__placeholder_is-fixed'
};