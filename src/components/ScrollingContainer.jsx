import React from 'react';
import { Container } from '@mui/material';

const ScrollingContainer = ({
  maxWidth = '100%',
  maxHeight = 720,
  sx,
  children,
}) => {
  return (
    <Container
      disableGutters
      maxWidth={maxWidth}
      sx={{
        maxHeight: maxHeight,
        height: 720,
        overflowY: 'auto',
        border: '1px solid #474747',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        ...sx,
      }}
    >
      {children}
    </Container>
  );
};

export default ScrollingContainer;
