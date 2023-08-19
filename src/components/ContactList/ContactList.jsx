import React from 'react';
import { Button, Item, List } from './ContactList.styled';


export const ContactList = ({ contacts, deleteContact }) => (
  <List>
    {contacts.map(contact => (
      <Item key={contact.id}>
        <p>{contact.name}: {contact.number}</p>
        <Button onClick={() => deleteContact(contact.id)}>Delete</Button>
      </Item>
    ))}
  </List>
);