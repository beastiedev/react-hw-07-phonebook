import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactListContainer from './components/ContactList/ContactListContainer';
import Filter from './components/Filter';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
