import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

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
          fullWidth
          sx={{
            mt: 2,
          }}
        />
      </form>
      <Button
        onClick={handleSubmit}
        variant='contained'
        color='success'
        sx={{
          fontWeight: '600',
          my: 2,
          mr: 2,
        }}
      >
        <SearchIcon sx={{ color: 'white', pr: 0.5 }} />
        Search
      </Button>
      <Button
        onClick={() => {
          setCategories([]);
        }}
        variant='contained'
        color='danger'
        sx={{
          fontWeight: '600',
          my: 2,
          color: 'white',
        }}
      >
        <DeleteIcon sx={{ color: 'white', pr: 0.5 }} />
        Clear
      </Button>
    </div>
  );
};
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
