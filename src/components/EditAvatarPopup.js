import PopupWithForm from "./PopupWithForm";
import React from "react";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatarRef = React.createRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }

    return (
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText="Сохранить">
            <input ref={avatarRef} id="avatar-input" className="form__input form__input_avatar" type="url" name="link" required />
            <span className="form__error avatar-input-error">Вы пропустили это поле.</span>
        </PopupWithForm>
    );
}