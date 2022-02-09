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

  getLordOfTheRingsQoute() {
    return fetch(`${this._url}/character/?limit=4`, {
      headers: this._headers,
    }).then((res) => {
      return this._prepareDate(res);
    });
  }
}

const api = new Api({
  url: 'https://the-one-api.dev/v2',
  headers: {
    authorization: 'Bearer jO0CoEpHG72NNcBK9_f2',
    'content-type': 'application/json',
  },
});

export default api;
