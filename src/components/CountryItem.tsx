// tslint:disable
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Country } from '../types/types';

interface ComponentProps {
  country: Country;
}

export default function CountryItem({ country }: ComponentProps) {

  const [clicked, setClicked] = React.useState(false);

  const handleCountryOnClick = () => {
    setClicked(!clicked);
  };

  return (
    <Box
      onClick={handleCountryOnClick}
      sx={clicked ? {
        cursor: 'pointer',
        '@media screen and (max-width: 600px)': {
          display: 'flex',
          justifyContent: 'center',
        },
        color: '#e3127e',
        borderColor: '#e3127e',
      } : {
        cursor: 'pointer',
        '@media screen and (max-width: 600px)': {
          display: 'flex',
          justifyContent: 'center',
        },
        color: '#000000',
        borderColor: '#000000',
      }}
    >
      <Typography
        variant="h5"
        component="p"
        sx={{
          fontSize: '1.25rem',
          width: { xs: '10ch', sm: '13ch', md: '15ch' },
          '@media screen and (min-width:600px)': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        }}
      >
        {country.name}
      </Typography>
    </Box>
  );
}
