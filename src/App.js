import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  handleAddContact = (contact) => {
    if (this.contactExists(contact)) {
      return alert(`${contact.name} is already in contacts`);
    }
    this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  }

  handleDeleteContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(item => item.id !== id),
    }));
  }

  handleOnFilter = (filter) => {
    this.setState({ filter: filter });
  }

  contactExists(newContact) {
    return !!(this.state.contacts.filter(contact => contact.name === newContact.name)).length;
  }

  getContacts() {
    if (this.state.filter) {
      return this.state.contacts.filter(contact => (new RegExp(`${this.state.filter}`, 'i')).test(contact.name))
    } else {
      return this.state.contacts;
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter onFilter={this.handleOnFilter} />
        <ContactList contacts={this.getContacts()} onDelete={this.handleDeleteContact} />
      </div>
    );
  }
}

export default App;
