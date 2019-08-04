import thunk from 'redux-thunk';
import { createStore, applyMiddleware  } from 'redux';
import { reducer } from '../reducers/reducer';


export default function configureStore() {

  return createStore(
    reducer,
    { currencies: [], showAlert: false },
    applyMiddleware(thunk),
  );
}
