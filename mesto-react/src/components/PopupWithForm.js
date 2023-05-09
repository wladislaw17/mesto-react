function PopupWithForm(props) {
    return (
        <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <form className={`form form_${props.name}`} name="profile" noValidate> 
                    <h2 className="form__title">{props.title}</h2>
                    {props.children}
                </form>
                <button aria-label="Кнопка закрыть" className="popup__close-button" type="button" onClick={props.onClose}></button>
            </div>
        </div>
    );
}

export default PopupWithForm;