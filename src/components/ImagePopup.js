function ImagePopup(props) {
    return (
        <div className={`popup popup_view ${props.card.link ? 'popup_opened' : ''}`}>
            <div className="popup__content">
                <img 
                    className="popup__image" 
                    src={`${props.card ? props.card.link : ''}`} 
                    alt={`${props.card ? props.card.name : ''}`} 
                />
                <p className="popup__caption">{`${props.card ? props.card.name : ''}`}</p>
                <button aria-label="Кнопка закрыть" className="popup__close-button" type="button" onClick={props.onClose} />
            </div>
        </div>
    );
}

export default ImagePopup;