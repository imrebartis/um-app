import * as React from 'react';
import { Continent } from '../types/types';
import { Typography, Button } from '@mui/material';
import AppContext from '../context/AppContext';
import { makeStyles } from '@mui/styles';

interface ComponentProps {
  continent: Continent;
}

const useStyles = makeStyles((theme) => ({
  clickedButton: {
    color: theme.clicked.color,
    borderColor: theme.clicked.borderColor,
  },
  notClickedButton: {
    color: theme.notClicked.color,
    borderColor: theme.notClicked.borderColor,
  },
}));

export default function ContinentItem({ continent }: ComponentProps) {
  const classes = useStyles();

  const {
    state: { continentName },
    dispatch,
  } = React.useContext(AppContext);

  const [selectedContinent, setSelectedContinent] =
    React.useState(continentName);

  const handleContinentOnClick = (
    event: React.MouseEvent<HTMLButtonElement>
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
      data-testid="continent-button"
      variant="outlined"
      sx={{
        mb: 2,
        fontSize: 3,
        textTransform: 'none',
        mr: { sm: 6 },
        '&: last-of-type': {
          mr: { md: 0 },
        },
      }}
      className={
        Boolean(continentName) && continentName === selectedContinent
          ? classes.clickedButton
          : classes.notClickedButton
      }
      onClick={handleContinentOnClick}
    >
      <Typography variant="h5" component="span">
        {continent}
      </Typography>
    </Button>
  );
}
