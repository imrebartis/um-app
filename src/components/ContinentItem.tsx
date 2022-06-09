// tslint:disable
import * as React from 'react';
import { Continent } from '../types/types';
import { Typography, Button } from '@mui/material';
import AppContext from '../context/AppContext';

interface ComponentProps {
  continent: Continent;
}

export default function ContinentItem({ continent }: ComponentProps) {
  const {
    state: { continentName },
    dispatch,
  } = React.useContext(AppContext);

  const [selectedContinent, setSelectedContinent] =
    React.useState(continentName);

  const handleContinentOnClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const continentButtonText =
      event.currentTarget.childNodes[0].textContent.toLowerCase();
    setSelectedContinent(continentButtonText);
    dispatch({
      type: 'continent-update',
      payload: continentButtonText,
    });
  };

  return (
    <Button
      data-testid='continent-button'
      variant='outlined'
      sx={Boolean(continentName) && continentName === selectedContinent
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
