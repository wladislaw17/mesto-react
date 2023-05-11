class Api {
    constructor(options) {
        this._options = options;
    }

    _checkStatus(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getProfileInfo() {
        return fetch(`${this._options.baseUrl}/users/me`, {
            method: 'GET',
            headers: this._options.headers
        })
            .then(res => {
                return this._checkStatus(res);
            });
    }

    getInitialCards() {
        return fetch(`${this._options.baseUrl}/cards`, {
            method: 'GET',
            headers: this._options.headers
        })
            .then(res => {
                return this._checkStatus(res);
            });
    }

    updateProfileInfo(name, about) {
        return fetch(`${this._options.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._options.headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
            .then(res => {
                return this._checkStatus(res);
            });
    }

    addNewCard(name, link) {
        return fetch(`${this._options.baseUrl}/cards`, {
            method: 'POST',
            headers: this._options.headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then(res => {
                return this._checkStatus(res);
            });
    }

    deleteCard(cardId) {
        return fetch(`${this._options.baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._options.headers
        })
            .then(res => {
                return this._checkStatus(res);
            });
    }

    putLike(cardId) {
        return fetch(`${this._options.baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._options.headers
        })
            .then(res => {
                return this._checkStatus(res);
            });
    }

    deleteLike(cardId) {
        return fetch(`${this._options.baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._options.headers
        })
            .then(res => {
                return this._checkStatus(res);
            });
    }

    changeAvatar(link) {
        return fetch (`${this._options.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._options.headers,
            body: JSON.stringify({
                avatar: link
            })
        })
            .then(res => {
                return this._checkStatus(res);
            });
    }
}

const api = new Api({
    baseUrl: 'https://nomoreparties.co/v1/cohort-64',
    headers: {
      authorization: '85eb9114-1252-441c-8f96-dd737450a29e',
      'Content-Type': 'application/json'
    }
}); 

export default api;