import React from 'react';
import Navbar from '@/components/Navbar';
import { Box } from '@mui/material';

const BaseLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Box sx={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <Navbar />
      {children}
    </Box>
  );
};

export default BaseLayout;
