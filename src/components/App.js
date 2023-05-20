import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

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
        setSelectedCard(card);
    }
    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditProfilePopupOpen(false);
        setSelectedCard({name: '', link: ''});
    }
    function handleCardLike(card) {
        const isLiked = card.likes.some(like => like._id === currentUser._id);
        api.changeLikeCardStatus(card._id, isLiked)
            .then(newCard => {
                setCards(cards => cards.map((card) => card._id === newCard._id ? newCard : card));
            })
            .catch(err => {
                console.log(err);
            });
    }
    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards(cards => cards.filter((curCard) => curCard._id !== card._id));
            })
            .catch(err => {
                console.log(err);
            });
    }
    function handleUpdateUser({ name, description }) {
        api.updateProfileInfo(name, description)
            .then((newInfo) => {
                setCurrentUser(newInfo);
                closeAllPopups();
            })
            .catch(err => {
                console.log(err);
            });
    }
    function handleUpdateAvatar({ avatar }) {
        api.changeAvatar(avatar)
            .then((newInfo) => {
                setCurrentUser(newInfo);
                closeAllPopups();
            })
            .catch(err => {
                console.log(err);
            });
    }
    function handleAddPlaceSubmit({ title, link }) {
        api.addNewCard(title, link)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch(err => {
                console.log(err);
            })
    }

    React.useEffect(() => {
        Promise.all([api.getProfileInfo(), api.getInitialCards()])
            .then(([info, cards]) => {
                setCurrentUser(info);
                setCards(cards);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />
                <Main
                    onEditAvatar={handleEditAvatarClick} 
                    onEditProfile={handleEditProfileClick} 
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                    cards={cards}
                />
                <Footer />
                <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
                <PopupWithForm name="confirm" title="Вы уверены?" onClose={closeAllPopups} buttonText="Да"/>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;