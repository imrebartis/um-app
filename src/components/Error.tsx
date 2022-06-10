import * as React from 'react';
import { Typography } from '@mui/material';

interface ComponentProps {
  error: string;
}

export default function Error({ error }: ComponentProps) {
  return (
    <Typography variant="h3" sx={{ color: 'primary.main' }}>
      Here's the rub: {error}
    </Typography>
  );
}
