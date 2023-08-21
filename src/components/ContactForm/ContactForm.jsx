import React, { Component } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
import {ErrorMessage} from './Errors';


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    errors: {
      name: '',
      number: '',
    },
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    const numberPattern = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

    let newErrors = { name: '', number: '' };

    if (!namePattern.test(name)) {
      newErrors.name = "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
    }

    if (!numberPattern.test(number)) {
      newErrors.number = "Invalid phone number format. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +";
    }

    this.setState({ errors: newErrors });

    if (newErrors.name || newErrors.number) {
      this.setState({ errors: newErrors });
      return;
    }

    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '', errors: { name: '', number: '' } });
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
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name my contain only letters, apostrophe, dash and spaces."
            required
            value={name}
            onChange={this.handleChange}
          />

          {this.state.errors.name && <ErrorMessage>{this.state.errors.name}</ErrorMessage>}
        </Label>

        <Label htmlFor="">
          Number
          <Input
            type="tel"
            name="number"
            pattern="[0-9\s\-()+]+"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
          
          {this.state.errors.number && <ErrorMessage>{this.state.errors.number}</ErrorMessage>}
        </Label>
        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }
}




// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: ''
//   };

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { name, number } = this.state;

//     if (this.props.isNameAlreadyExists(name)) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     const newContact = {
//       id: nanoid(),
//       name,
//       number
//     };

//     this.props.addContact(newContact);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Label htmlFor="">
//           Name
//           <Input
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces."
//             required
//           />
//         </Label>
        
//         <Label htmlFor="">
//           Number
//         <Input
//           type="tel"
//           name="number"
//           value={number}
//           onChange={this.handleChange}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//         </Label>
//         <Button type="submit">Add contact</Button>
//       </Form>
//     );
//   };
// };
