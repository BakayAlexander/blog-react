// https://the-one-api.dev/documentation
export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
    this._body = config.body;
  }

  _prepareDate = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  };

  // /quote?limit=6
  // /chapter?limit=4

  getLordOfTheRingsQoute() {
    return fetch(`${this._url}/character/?limit=4`, {
      headers: this._headers,
    }).then((res) => {
      return this._prepareDate(res);
    });
  }

  // editProfile(name, about) {
  //   return fetch(`${this._url}users/me`, {
  //     method: 'PATCH',
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       name: name,
  //       about: about,
  //     }),
  //   }).then((res) => {
  //     return this._prepareDate(res);
  //   });
  // }

  // editAvatar(avatar) {
  //   return fetch(`${this._url}users/me/avatar`, {
  //     method: 'PATCH',
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       avatar: avatar,
  //     }),
  //   }).then((res) => {
  //     return this._prepareDate(res);
  //   });
  // }

  // getCardsData() {
  //   return fetch(`${this._url}cards`, {
  //     headers: this._headers,
  //   }).then((res) => {
  //     return this._prepareDate(res);
  //   });
  // }

  // addNewCard(name, link) {
  //   return fetch(`${this._url}cards`, {
  //     method: 'POST',
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       name: name,
  //       link: link,
  //     }),
  //   }).then((res) => {
  //     return this._prepareDate(res);
  //   });
  // }

  // deleteCard(id) {
  //   return fetch(`${this._url}cards/${id}`, {
  //     method: 'DELETE',
  //     headers: this._headers,
  //   }).then((res) => {
  //     return this._prepareDate(res);
  //   });
  // }
  // 0;

  // putCardLikes(id) {
  //   return fetch(`${this._url}cards/${id}/likes`, {
  //     method: 'PUT',
  //     headers: this._headers,
  //   }).then((res) => {
  //     return this._prepareDate(res);
  //   });
  // }

  // deleteCardLikes(id) {
  //   return fetch(`${this._url}cards/${id}/likes`, {
  //     method: 'DELETE',
  //     headers: this._headers,
  //   }).then((res) => {
  //     return this._prepareDate(res);
  //   });
  // }

  // changeLikeCardStatus(id, condition) {
  //   return fetch(`${this._url}cards/${id}/likes`, {
  //     method: condition ? 'PUT' : 'DELETE',
  //     headers: this._headers,
  //   }).then((res) => {
  //     return this._prepareDate(res);
  //   });
  // }
}

const api = new Api({
  url: 'https://the-one-api.dev/v2',
  headers: {
    authorization: 'Bearer jO0CoEpHG72NNcBK9_f2',
    'content-type': 'application/json',
  },
});

export default api;
