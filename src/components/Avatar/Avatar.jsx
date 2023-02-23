import React from 'react';
import { Box, Avatar as AvatarComponent } from '@mui/material';

const Avatar = ({ avatarUrl, sx }) => {
  return (
    <Box
      sx={{
        maxWidth: '100%',
        width: 400,
        height: 470,
        backgroundColor: '#F9F9F9',
        border: '1px solid #2F2C2F',
        borderRadius: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
    >
      <AvatarComponent
        alt="avatar"
        src={avatarUrl}
        sx={{ width: '100%', height: '100%', borderRadius: 0 }}
      />
    </Box>
  );
};

export default Avatar;
