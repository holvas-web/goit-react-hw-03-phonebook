import React from 'react';
import { Button, Item, List } from './ContactList.styled';


export const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({id, name, number}) => (
      <Item key={id}>
        <p>{name}: {number}</p>
        <Button onClick={() =>onDeleteContact(id)}>Delete</Button>
      </Item>
    ))}
  </List>
);

//  <Item key={contact.id}>
//       export const ContactList = ({ contacts, deleteContact }) => (
//   <List>
//     {contacts.map(contact => (
//        <p>{contact.name}: {contact.number}</p>
//         <Button onClick={() => deleteContact(contact.id)}>Delete</Button>
//       </Item>
//     ))}
//   </List>
// );