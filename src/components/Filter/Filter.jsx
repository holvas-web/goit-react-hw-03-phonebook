import React from 'react';
import { Input } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ value, onChange }) => (
  <Input type="text" value={value} onChange={onChange} placeholder="Search by name" />
);
