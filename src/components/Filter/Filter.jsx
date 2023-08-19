import { Input } from 'components/ContactForm/ContactForm.styled';
import React from 'react';

export const Filter = ({ value, onChange }) => (
  <Input type="text" value={value} onChange={onChange} placeholder="Search by name" />
);
