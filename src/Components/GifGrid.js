import { Alert, AlertTitle, LinearProgress, Typography } from '@mui/material';
import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  if (!loading && images.length < 1 && category !== '') {
    return (
      <>
        <Typography
          color='background'
          className='animate__animated animate__fadeIn'
          fontSize={'30px'}
        >
          {category}
        </Typography>
        <Alert sx={{ display: 'flex', width: '100%', mb: 2 }} severity='error'>
          <AlertTitle>
            <strong>No results</strong>
          </AlertTitle>
          Please do another Search
        </Alert>
      </>
    );
  }

  return (
    <>
      <Typography
        color='background'
        className='animate__animated animate__fadeIn'
        fontSize={'30px'}
        sx={{}}
        width='90%'
        borderBottom='6px solid #F2CA52'
        pl={2}
        my={2}
      >
        {category}
      </Typography>
      {loading && <LinearProgress />}
      <div className='card-grid'>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} images={images} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
