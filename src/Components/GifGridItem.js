import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const GifGridItem = ({ id, title, url }) => {
  return (
    <Card sx={{ maxWidth: 350, m: 1 }}>
      <CardMedia component='img' alt='gif' height='300' image={url} />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};
