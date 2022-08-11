import * as React from 'react';
import { Country } from '../types/types';
import { Box, Grid } from '@mui/material';
import CountryItem from './CountryItem';
import Loader from './Loader';
import Error from './Error';

interface ComponentProps {
  countries: Country[];
  loading: boolean;
}

export default function Countries({
  countries,
  loading,
}: ComponentProps) {
  return (
    <React.Fragment>
      {!loading && (countries.length > 0) ? (
        <Box
          sx={{
            flexGrow: 1,
            mt: { xs: 5, sm: 6 },
            ml: { sm: 9.75, md: 4.5 },
            maxWidth: { md: '45.5rem' },
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            {countries.map((country: Country) => (
              <Grid
                key={country.numericCode}
                item
                xs={1}
                sm={4}
                md={3}
                sx={{
                  pt: { xs: '1.5rem !important', sm: '1rem !important' },
                  textAlign: { xs: 'center', sm: 'left' },
                }}
              >
                <CountryItem country={country} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
}
