import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const [title, setTitle] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            title,
            link
        });
    }
    return (
        <PopupWithForm name="photo" title="Новое место" isOpen={isOpen} onClose={onClose} buttonText="Сохранить" onSubmit={handleSubmit}>
            <input id="title-input" className="form__input form__input_value_title" type="text" name="title" placeholder="Название" required minLength="2" maxLength="30" onChange={handleTitleChange}/>
            <span className="form__error title-input-error">Вы пропустили это поле.</span>
            <input id="link-input" className="form__input form__input_value_link" name="link" placeholder="Ссылка на картинку" required type="url" onChange={handleLinkChange}/>
            <span className="form__error link-input-error">Вы пропустили это поле.</span>
        </PopupWithForm>
    );
}