import React, { useState } from 'react';
import { RFIconButton } from '../RFIconButton';
import './RFInputForm.scss';

interface InputFormProps {
  onSubmit: (value: string) => void;
}

export const RFInputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form className='rf-inputform' onSubmit={handleSubmit}>
      <input className='rf-input' type="text" placeholder='Bạn đang nghĩ gì?' value={inputValue} onChange={handleChange} />
      <RFIconButton className='rf-button' icon='search' onClick={()=>{}}/>
    </form>
  );
};