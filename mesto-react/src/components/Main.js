import React from "react";
import api from '../utils/api';
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    let userId;

    React.useEffect(() => {
        Promise.all([api.getProfileInfo(), api.getInitialCards()])
            .then(results => {
                userId = results[0]._id;
                setUserName(results[0].name);
                setUserDescription(results[0].about);
                setUserAvatar(results[0].avatar);
                setCards(results[1]);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <img className="profile__avatar" src={userAvatar} alt="Аватар профиля"/>
                <button onClick={props.onEditAvatar} className="profile__avatar-change-button"></button>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button onClick={props.onEditProfile} aria-label="Кнопка изменить" className="profile__edit-button" type="button"></button>
                    <p className="profile__status">{userDescription}</p>
                </div>
                <button onClick={props.onAddPlace} aria-label="Кнопка добавить" className="profile__add-button" type="button"></button>
            </section>
            <section className="elements">
                {
                    cards.map((card) => <Card card={card} key={card._id} onCardClick={props.onCardClick}/>)
                }
            </section>
        </main>
    );
}

export default Main;