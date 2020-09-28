import { createStore, combineReducers } from 'redux';

import contactFormReducer from './contactForm/contactFormReducer';

const store = createStore(
  combineReducers({
    contactForm: contactFormReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
