import React, { Fragment } from 'react';
import { Grid } from '@mui/material';

import './tabs.css';

const Tabs = ({ activeTab = 0, setActiveTab, tabsData, sx }) => {
  return (
    <Grid container className="tabs" rowGap={3} sx={{ ...sx }}>
      <Grid item xs={12} className="tabs__headers">
        {tabsData.map((tab, idx) => {
          return (
            <span
              key={idx}
              className={`tabs__headers-item ${
                activeTab === idx ? 'tabs__headers-item--active' : ''
              }`}
              onClick={() => {
                if (idx === activeTab) return;
                setActiveTab(idx, tab.imgUrl);
              }}
            >
              {tab.name}
            </span>
          );
        })}
      </Grid>
      <Grid item xs={12} className="tabs__content" height>
        {tabsData.map((tab, idx) =>
          activeTab === idx ? (
            <Fragment key={idx}>{tab.content}</Fragment>
          ) : null
        )}
      </Grid>
    </Grid>
  );
};

export default Tabs;
