import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

import { Alert, Container } from '@mui/material';

const GifExpertApp = () => {
  // const categories = ["One Punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(['Nice']);

  // const handleAdd = () => {
  //   // setCategories([...categories, "HunterXHunter"]);

  //   setCategories((cats) => [...cats, "HunterXHunter"]);
  // };

  return (
    <>
      <AddCategory setCategories={setCategories} />
      <hr />

      {categories.length >= 1 ? (
        categories.map((category, i) => {
          return (
            <Container key={i}>
              <GifGrid category={category} />
            </Container>
          );
        })
      ) : (
        <Alert
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
          severity='info'
        >
          Please do a Search
        </Alert>
      )}
    </>
  );
};

export default GifExpertApp;
