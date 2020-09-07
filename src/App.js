import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  }

  handleAddContact = (contact) => {
    this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  }

  handleDeleteContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(item => item.id !== id),
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />

        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList contacts={this.state.contacts} onDelete={this.handleDeleteContact} />
      </div>
    );
  }
}

export default App;
