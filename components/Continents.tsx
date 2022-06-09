import * as React from 'react';
import { Continent } from '../types/types';
import { Box } from '@mui/material';
import Loader from './Loader';
import ContinentItem from './ContinentItem';
import Error from './Error';

interface ComponentProps {
  continents: Continent[];
  loading: boolean;
  error: string;
}

export default function Continents({
  continents,
  loading,
  error,
}: ComponentProps) {
  return (
    <React.Fragment>
      {!loading && continents.length > 0 ? (
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            mt: 6,
            '@media screen and (min-width: 600px)': {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
            },
            ml: { sm: 6, md: 0 },
          }}
        >
          {continents.map((continent: Continent) => (
            <ContinentItem key={continent} continent={continent} />
          ))}
        </Box>
      ) : (
        <Loader />
      )}
      {error && <Error error={error} />}
    </React.Fragment>
  );
}
