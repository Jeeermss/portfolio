import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

import './tabs.css';

const Tabs = ({ activeTab = 0, tabsData, sx }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    setActiveIndex(activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (tabsData && tabsData.length) {
      setData(tabsData);
    }
  }, [tabsData]);

  return (
    <Grid container className="tabs" rowGap={3} sx={{ ...sx }}>
      <Grid item xs={12} className="tabs__headers">
        {data.map((tab, idx) => {
          return (
            <span
              key={idx}
              className={`tabs__headers-item ${
                activeIndex === idx ? 'tabs__headers-item--active' : ''
              }`}
              onClick={() => {
                if (idx === activeIndex) return;
                setActiveIndex(idx);
              }}
            >
              {tab.name}
            </span>
          );
        })}
      </Grid>
      <Grid item xs={12} className="tabs__content" height>
        {data.map((tab, idx) => (
          <div
            key={idx}
            style={{ display: `${activeIndex === idx ? 'block' : 'none'}` }}
          >
            {tab.content}
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default Tabs;
