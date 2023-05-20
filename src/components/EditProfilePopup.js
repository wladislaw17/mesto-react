import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]); 

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            description
        });
    }

    return (
        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} buttonText="Сохранить" onSubmit={handleSubmit}>
            <input 
                id="name-input" 
                className="form__input form__input_value_name" 
                type="text" 
                name="name" 
                value={name || ''} 
                minLength="2" 
                maxLength="40" 
                required 
                onChange={handleNameChange}
             />
            <span className="form__error name-input-error"></span>
            <input 
                id="status-input" 
                className="form__input form__input_value_status" 
                type="text" 
                name="status" 
                value={description || ''} 
                minLength="2" 
                maxLength="200" 
                required 
                onChange={handleDescriptionChange} 
            />
            <span className="form__error status-input-error"></span>
        </PopupWithForm>
    );
}