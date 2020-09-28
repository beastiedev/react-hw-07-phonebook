import { configureStore } from '@reduxjs/toolkit';
import contactForm from './contactForm/contactFormReducer';

const store = configureStore({
  reducer: {
    contactForm
  }
});

export default store;
