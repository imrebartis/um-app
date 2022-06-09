import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function PageHeading() {
  return (
    <Box sx={{ maxWidth: '35.3125', alignSelf: 'center' }}>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: 36,
          lineHeight: 1.5,
          textAlign: 'center',
          mt: 8,
        }}
      >
        Select a region and click on the countries you want to highlight
      </Typography>
    </Box>
  );
}
