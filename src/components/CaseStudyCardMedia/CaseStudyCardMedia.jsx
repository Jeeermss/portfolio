import React from 'react';
import { Card, CardMedia, CardContent } from '@mui/material';

import './case-study-card-media.css';

const CaseStudyCardMedia = ({ sx, cardContent, cardImageUrl }) => {
  return (
    <Card
      sx={{
        ...sx,
      }}
      className="case-study-card-media"
    >
      <CardMedia
        component="img"
        alt="card image"
        // height="325"
        loading="lazy"
        image={cardImageUrl}
        className="case-study-card-media__image"
      />
      <CardContent className="case-study-card-media__content">
        <span className="case-study-card-media__content-text">
          {cardContent}
        </span>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCardMedia;
