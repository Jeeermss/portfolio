import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Modal,
  Fade,
  Box,
} from '@mui/material';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';

import './case-study-card-media.css';

const modalBoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95%',
  bgcolor: 'background.paper',
  border: '1px solid #2f2c2f',
  boxShadow: 24,
  p: 1,
};

const CaseStudyCardMedia = ({ sx, cardContent, cardImageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card
      sx={{
        ...sx,
      }}
      className="case-study-card-media"
    >
      <div className="case-study-card-media__image-container">
        <CardMedia
          component="img"
          alt="card image"
          // height="325"
          loading="lazy"
          image={cardImageUrl}
          className="case-study-card-media__image"
          sx={{ minWidth: 900 }}
        />
        <IconButton
          sx={{
            display: { xs: 'block', md: 'none' },
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
          onClick={() => setIsModalOpen(true)}
        >
          <ZoomInMapIcon />
        </IconButton>
      </div>
      <CardContent className="case-study-card-media__content">
        <span className="case-study-card-media__content-text">
          {cardContent}
        </span>
      </CardContent>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        closeAfterTransition
      >
        <Fade in={isModalOpen}>
          <Box sx={modalBoxStyle}>
            <img alt="media" src={cardImageUrl} width="100%" />
          </Box>
        </Fade>
      </Modal>
    </Card>
  );
};

export default CaseStudyCardMedia;
