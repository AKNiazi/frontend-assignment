import { baseUrl, defaultSize } from '../constants';

export const SET_RECORDS_LIMIT = 'SET_RECORDS_LIMIT';
export function setRecordsLimit(limit) {
  return {
    type: SET_RECORDS_LIMIT,
    recordsLimit: limit,
  };
}

export const SET_CURRENCIES_DATA = 'SET_CURRENCIES_DATA';
export function setCurrenciesData(data) {
  return {
    type: SET_CURRENCIES_DATA,
    currencies: data,
  };
}

export const HIDE_ERROR_ALERT = 'HIDE_ERROR_ALERT';
export function hideErrorAlert() {
  return {
    type: HIDE_ERROR_ALERT
  };
}

export const ALERT_MESSAGE = 'ALERT_MESSAGE';
export function alertMessage(messageType, message = null) {
  return {
    type: ALERT_MESSAGE,
    messageType,
    message
  };
}

export function getCurrencies(limit = defaultSize) {
  return function (dispatch) {
    dispatch(setRecordsLimit(limit));
    let url = `${baseUrl}/fetch_records`;
    if (limit !== 'all') {
      url = `${url}?limit=${parseInt(limit, 10)}`
    }
    return fetch(url, {
        method: 'GET',
      })
      .then(
        response => {
          dispatch(alertMessage('success', 'currencies records loaded'))
          return response.json();
        },
        error => {
          console.log(error);
          dispatch(alertMessage('danger', error.message))
        }
      )
      .then(json => {
        dispatch(setCurrenciesData((json && json.data) ? json.data : [] ));
      })
  };
}
