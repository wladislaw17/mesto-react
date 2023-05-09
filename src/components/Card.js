function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="card">
            <button aria-label="Кнопка удалить" className="card__delete-button" type="button"></button>
            <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
            <div className="card__row">
                <h2 className="card__title">{props.card.name}</h2>
                <div className="card__column">
                    <button aria-label="Кнопка нравится" className="card__like-button" type="button"></button>
                    <p className="card__likes-counter">{props.card.likes.length}</p>
                </div>
             </div>  
        </div>       
    );
}

export default Card;