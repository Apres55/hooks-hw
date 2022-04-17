import React, { useState, useEffect } from 'react';
import Contacts from './components/AllContacts';
import ContactList from './components/ContactsList';
import './index.css';

const Contracts = () => {
    const [contacts, setContacts] = useState(Contacts);
    const [searchValue, setSearchValue] = useState('');
    
    const searchFilter = (e) => {
        setSearchValue(e.target.value);
        setContacts(Contacts);
    }
    useEffect(() => {
        setContacts(contacts.filter((contact) =>
        ((contact.firstName.toLowerCase().includes(searchValue) ||
        contact.lastName.toLowerCase().includes(searchValue) ||
        contact.phone.includes(searchValue))
        )));
    }
    ,[searchValue]);

    return (
        <div className="contact-box">
            <h1>Contacts</h1>
            <input type="text" placeholder="Search" onChange={searchFilter}/>
            <ol>
                <ContactList contactsData={contacts}/>
            </ol>
        </div>
    )
}

export default Contracts