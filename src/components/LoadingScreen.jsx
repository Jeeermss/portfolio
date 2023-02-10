import React, { useEffect } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  color: '#c95d63 !important',
};

const LoadingScreen = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('overflow-y', 'hidden');

    return () => {
      document.documentElement.style.setProperty('overflow-y', 'auto');
    };
  }, []);

  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open
    >
      <CircularProgress sx={style} />
    </Backdrop>
  );
};

export default LoadingScreen;
