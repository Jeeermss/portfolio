import React from 'react';
import { Box, Avatar as AvatarComponent } from '@mui/material';

const Avatar = ({ avatarUrl, sx }) => {
  return (
    <Box
      sx={{
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
        sx={{ width: 200, height: 200 }}
      />
    </Box>
  );
};

export default Avatar;
