function PopupWithForm({name, isOpen, title, children, buttonText, onClose}) {
    return (
        <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <form className={`form form_${name}`} name={name}> 
                    <h2 className="form__title">{title}</h2>
                    {children}
                    <button aria-label="Кнопка подтверждения" className="form__submit-button" type="submit">{buttonText}</button>
                </form>
                <button aria-label="Кнопка закрыть" className="popup__close-button" type="button" onClick={onClose}/>
            </div>
        </div>
    );
}

export default PopupWithForm;