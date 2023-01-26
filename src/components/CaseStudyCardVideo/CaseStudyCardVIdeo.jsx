import React from 'react';
import { Card, CardContent } from '@mui/material';
import ReactPlayer from 'react-player/lazy';

import './case-study-card-video.css';

const CaseStudyCardVideo = ({
  sx,
  cardContent,
  cardVideoUrl,
  cardVideoThumbnail = false,
}) => {
  return (
    <Card
      sx={{
        ...sx,
      }}
      className="case-study-card-video"
    >
      <ReactPlayer
        url={cardVideoUrl}
        width="100%"
        light={cardVideoThumbnail}
        playing={!!cardVideoThumbnail}
        // muted={true}
        controls={true}
        className="case-study-card-video__player"
      />
      <CardContent className="case-study-card-video__content">
        <div className="case-study-card-video__content-text">
          {cardContent.map((content, idx) => (
            <p key={idx}>{content}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCardVideo;
