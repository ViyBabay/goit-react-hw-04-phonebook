import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContact = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normilizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  // }

  // onAddContact = contact => {
  //   if (
  //     this.state.contacts.filter(
  //       element => element.name.toLowerCase() === contact.name.toLowerCase()
  //     ).length > 0
  //   ) {
  //     return alert(`${contact.name} is already in contacts`);
  //   }
  //   this.setState(prevState => {
  //     const arr = [...prevState.contacts, contact];
  //     return { contacts: arr };
  //   });
  // };

  onAddContact = contactItem => {
    if (
      this.state.contacts.filter(
        elem => elem.name.toLowerCase() === contactItem.name.toLowerCase()
      ).length > 0
    ) {
      return alert(`${contactItem.name} is already in contacts`);
    }
    this.setState(prevState => {
      const arr = [...prevState.contacts, contactItem];
      return { contacts: arr };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.onAddContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.filterContact} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
