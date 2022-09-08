import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const GifExpertApp = () => {
  // const categories = ["One Punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(['Nice']);

  // const handleAdd = () => {
  //   // setCategories([...categories, "HunterXHunter"]);

  //   setCategories((cats) => [...cats, "HunterXHunter"]);
  // };

  return (
    <>
      <Toolbar>
        <AppBar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 5,
            py: 2,
          }}
          color='background'
        >
          <Typography color='primary' fontSize={'30px'}>
            GifApp
          </Typography>
          <Typography color='primary' fontSize={'25px'}>
            Tobias Ajras
          </Typography>
        </AppBar>
      </Toolbar>
      <AddCategory setCategories={setCategories} />
      <hr />

      <Container>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </Container>
    </>
  );
};

export default GifExpertApp;
