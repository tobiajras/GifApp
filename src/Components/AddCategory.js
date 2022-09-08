import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue('');
    }
  };

  return (
    <form className='formInput' onSubmit={handleSubmit}>
      <TextField
        color='background'
        id='filled-basic'
        label='Search Gif'
        variant='outlined'
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        autoFocus
        fullWidth
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
