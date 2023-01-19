import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './next-case-study.css';

const NextCaseStudy = ({ csLink, csName }) => {
  const location = useLocation();
  return (
    <div className="next-case-study">
      <span>Next Case Study >></span>
      <Link to={csLink} state={{ location }} replace>
        {csName}
      </Link>
    </div>
  );
};

export default NextCaseStudy;
