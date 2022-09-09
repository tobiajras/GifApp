import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@mui/material';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((cats) => [inputValue, ...cats]);
    setInputValue('');
  };

  return (
    <div>
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
          sx={{
            mt: 2,
          }}
        />
      </form>
      <Button
        onClick={() => {
          setCategories([]);
        }}
        variant='contained'
        color='primary'
        sx={{
          my: 2,
        }}
      >
        Clear
      </Button>
    </div>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
