// tslint:disable
import * as React from 'react';
import { Continent } from '../types/types';
import { Typography, Button } from '@mui/material';
import AppContext from '../context/AppContext';

interface ComponentProps {
  continent: Continent;
  key: Continent;
}

export default function ContinentItem({ continent }: ComponentProps) {
  const {
    state: { continentName },
    dispatch,
  } = React.useContext(AppContext);

  const handleContinentOnClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    dispatch({
      type: 'continent-update',
      payload: continent.toLowerCase(),
    });
  };

  return (
    <Button
      data-testid='continent-button'
      variant='outlined'
      sx={Boolean(continentName) && continentName === continent.toLowerCase()
        ? {
          mb: 2,
          fontSize: 3,
          textTransform: 'none',
          mr: { sm: 6 },
          '&: last-of-type': {
            mr: { md: 0 },
          },
          color: '#e3127e',
          borderColor: '#e3127e',
        } : {
          mb: 2,
          fontSize: 3,
          textTransform: 'none',
          mr: { sm: 6 },
          '&: last-of-type': {
            mr: { md: 0 },
          },
          color: '#000000',
          borderColor: '#000000',
        }}
      onClick={handleContinentOnClick}
    >
      <Typography variant='h5' component='span'>
        {continent}
      </Typography>
    </Button>
  );
}
