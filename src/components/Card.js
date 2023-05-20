import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = ( 
        `card__like-button ${isLiked && 'card__like-button_active'}` 
    );

    function handleClick() {
        props.onCardClick(props.card);
    }
    function handleLikeClick() {
        props.onCardLike(props.card);
    }
    function handleCardDelete() {
        props.onCardDelete(props.card);
    }
    
    return (
        <div className="card">
            {isOwn && <button aria-label="Кнопка удалить" className="card__delete-button" type="button" onClick={handleCardDelete}/>}
            <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
            <div className="card__row">
                <h2 className="card__title">{props.card.name}</h2>
                <div className="card__column">
                    <button aria-label="Кнопка нравится" className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"/>
                    <p className="card__likes-counter">{props.card.likes.length}</p>
                </div>
             </div>  
        </div>       
    );
}

export default Card;