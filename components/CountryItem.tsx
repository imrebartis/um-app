import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Country } from '../types/types';
import { makeStyles } from '@mui/styles';

interface ComponentProps {
  country: Country;
}

const useStyles = makeStyles((theme) => ({
  clickedBox: {
    color: theme.clicked.color,
    borderColor: theme.clicked.borderColor,
  },
  notClickedBox: {
    color: theme.notClicked.color,
    borderColor: theme.notClicked.borderColor,
  },
}));

export default function CountryItem({ country }: ComponentProps) {
  const classes = useStyles();

  const [clicked, setClicked] = React.useState(false);

  const handleCountryOnClick = () => {
    setClicked(!clicked);
  };

  return (
    <Box
      onClick={handleCountryOnClick}
      sx={{
        cursor: 'pointer',
        '@media screen and (max-width: 600px)': {
          display: 'flex',
          justifyContent: 'center',
        },
      }}
      className={clicked ? classes.clickedBox : classes.notClickedBox}
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
