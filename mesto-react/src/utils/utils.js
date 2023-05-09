const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonAvatar = document.querySelector('.profile__avatar-change-button');

const profileNameInput = document.querySelector('.form__input_value_name');
const profileStatusInput = document.querySelector('.form__input_value_status');

const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const profileAvatar = document.querySelector('.profile__avatar');

const popupImageElement = document.querySelector('.popup__image');
const popupCaptionElement = document.querySelector('.popup__caption'); 

const photoTitleInput = document.querySelector('.form__input_value_title'); 
const photoLinkInput = document.querySelector('.form__input_value_link'); 
const avatarLinkInput = document.querySelector('.form__input_avatar');

const forms = document.querySelectorAll('.form');

const submitButtonProfile = document.querySelector('.popup_profile').querySelector('.form__submit-button');
const submitButtonPhoto = document.querySelector('.popup_photo').querySelector('.form__submit-button');
const submitButtonAvatar = document.querySelector('.popup_avatar').querySelector('.form__submit-button');

export { 
  buttonEdit, buttonAdd, buttonAvatar,
  profileNameInput, profileStatusInput, 
  profileName, profileStatus, profileAvatar,
  popupImageElement, popupCaptionElement, avatarLinkInput,
  photoLinkInput, photoTitleInput, forms,
  submitButtonProfile, submitButtonPhoto, submitButtonAvatar
};