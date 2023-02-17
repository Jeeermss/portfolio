import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleShowBtn = () => {
      if (window.scrollY <= 125) {
        setShowBtn(false);
        return;
      }
      setShowBtn(true);
    };
    window.addEventListener('scroll', handleShowBtn);

    return () => {
      window.removeEventListener('scroll', handleShowBtn);
    };
  }, []);

  return (
    <>
      {showBtn ? (
        <Fab
          aria-label="delete"
          className="scroll-to-top"
          sx={{
            padding: 0,
            position: 'fixed',
            bottom: { xs: 20, md: 40 },
            right: { xs: 20, md: 40 },
            backgroundColor: 'transparent',
            opacity: 0.5,
            '&:hover': {
              backgroundColor: '#f5f5f5',
              opacity: 1,
            },
            width: { xs: 40, md: 56 },
            height: { xs: 40, md: 56 },
          }}
          onClick={() => window.scroll(0, 0)}
        >
          <KeyboardArrowUpIcon
            sx={{
              fontSize: {
                xs: '2rem',
                md: '3rem',
              },
              color: '#474747',
            }}
          />
        </Fab>
      ) : null}
    </>
  );
};

export default ScrollToTop;
