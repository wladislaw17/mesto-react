import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete, cards }) {
    const currentUser = React.useContext(CurrentUserContext);
    return (
        <main className="content">
            <section className="profile">
                <img className="profile__avatar" src={currentUser.avatar} alt="Аватар профиля"/>
                <button onClick={onEditAvatar} className="profile__avatar-change-button" />
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button onClick={onEditProfile} aria-label="Кнопка изменить" className="profile__edit-button" type="button"></button>
                    <p className="profile__status">{currentUser.about}</p>
                </div>
                <button onClick={onAddPlace} aria-label="Кнопка добавить" className="profile__add-button" type="button"></button>
            </section>
            <section className="elements">
                {
                    cards.map((card) => <Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete}/>)
                }
            </section>
        </main>
    );
}

export default Main;