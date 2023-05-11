import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }
    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }
    function handleCardClick(card) {
        setSelectedCard({name: card.name, link: card.link});
    }
    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditProfilePopupOpen(false);
        setSelectedCard({name: '', link: ''});
    }
    
    return (
        <div className="page">
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick} 
                onEditProfile={handleEditProfileClick} 
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
            />
            <Footer />
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
            <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
                <input id="name-input" className="form__input form__input_value_name" type="text" name="name" defaultValue="Eve Eve" minLength="2" maxLength="40" required />
                <span className="form__error name-input-error"></span>
                <input id="status-input" className="form__input form__input_value_status" type="text" name="status" defaultValue="sinx^2+cosx^2=1" minLength="2" maxLength="200" required />
                <span className="form__error status-input-error"></span>
            </PopupWithForm>
            <PopupWithForm name="photo" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
                <input id="title-input" className="form__input form__input_value_title" type="text" name="title" placeholder="Название" required minLength="2" maxLength="30" />
                <span className="form__error title-input-error">Вы пропустили это поле.</span>
                <input id="link-input" className="form__input form__input_value_link" name="link" placeholder="Ссылка на картинку" required type="url" />
                <span className="form__error link-input-error">Вы пропустили это поле.</span>
            </PopupWithForm>
            <PopupWithForm name="confirm" title="Вы уверены?" onClose={closeAllPopups} buttonText="Да"/>
            <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
                <input id="avatar-input" className="form__input form__input_avatar" type="url" name="link" required />
                <span className="form__error avatar-input-error">Вы пропустили это поле.</span>
            </PopupWithForm>
        </div>
    );
}

export default App;