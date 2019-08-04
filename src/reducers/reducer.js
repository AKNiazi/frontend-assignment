import * as actions from '../actions/actions';

export const reducer = function (state, action) {
  state = Object.assign({}, state);
  const actionHandlers = {
    [actions.SET_RECORDS_LIMIT]() {
      return Object.assign({}, state, {
        recordsLimit: action.recordsLimit,
      });
    },
    [actions.SET_CURRENCIES_DATA]() {
      return Object.assign({}, state, {
        currencies: action.currencies,
      });
    },
    [actions.HIDE_ERROR_ALERT]() {
      return Object.assign({}, state, {
        showAlert: false,
      });
    },
    [actions.ALERT_MESSAGE]() {
      return Object.assign({}, state, {
        alertMessage: action.message,
        alertType: action.messageType,
        showAlert: true
      });
    }
  };
  if (action.type in actionHandlers) {
    return actionHandlers[action.type]();
  }
  return state;
};
