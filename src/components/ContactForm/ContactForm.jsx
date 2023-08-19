import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    if (this.props.isNameAlreadyExists(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number
    };

    this.props.addContact(newContact);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="">
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
          />
        </Label>
        
        <Label htmlFor="">
          Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  };
};
