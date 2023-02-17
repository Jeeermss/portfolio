import React, { useEffect, useState } from 'react';
import { IconButton, Backdrop, Grow } from '@mui/material';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import './page-road-map.css';

const PageRoadMap = ({ showMore }) => {
  const [sectionsData, setSectionsData] = useState([]);
  const [sectionsTopOffset, setSectionsTopOffset] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const sections = document.getElementsByClassName('page-section');
    const pageSectionsContainer = document.getElementById('page-road-map');
    const footerContainer = document.querySelectorAll('.footer');
    let sectionsArr = [];
    let sectionsTop = [];
    const cMid =
      (window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight) +
      window.scrollY / 2;
    const getSections = () => {
      sectionsArr = [];
      for (let section = 0; section < sections.length; section++) {
        const sectionLabel = sections[section].dataset.sectionLabel;
        sectionsArr.push({
          sectionLabel,
          isCurrentSection: false,
        });
      }
      setSectionsData(sectionsArr);
      updateIndicators(sectionsTop, cMid);
    };

    function updateSectionTops(clientMid) {
      sectionsTop = [];
      for (let s = 0; s < sections.length; s++) {
        let h = sections[s].offsetTop;
        sectionsTop.push(h - 100);
      }
      setSectionsTopOffset(sectionsTop);
      updateIndicators(sectionsTop, clientMid);
    }

    function updateIndicators(secsTop, cMid) {
      if (!sectionsArr.length) return;
      let ls = 0;
      for (let s = 0; s < sections.length; s++) {
        if (secsTop[s] > cMid) {
          break;
        }
        ls = s;
      }
      for (let i = 0; i <= ls; i++) {
        setSectionsData(
          sectionsArr.map((sec, idx) => {
            sec.isCurrentSection = idx === ls ? true : false;

            return sec;
          })
        );
        // sectionsArr[i].isCurrentSection = true;
      }
    }

    function updateClientMid() {
      let clientMid = 0;
      let height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      clientMid = window.scrollY + height / 2;
      updateSectionTops(clientMid);
    }
    updateClientMid();
    getSections();

    pageSectionsContainer.style.bottom = `${footerContainer[0].clientHeight}px`;

    window.onscroll = updateClientMid;
    window.onresize = updateClientMid;
  }, [showMore]);

  const handleItemClick = (offsetTop) => {
    if (!offsetTop) return;
    window.scroll(0, offsetTop);
  };

  return (
    <div className="page-road-map" id="page-road-map" style={{ bottom: '0' }}>
      <div className="page-road-map__mobile">
        <IconButton
          aria-label="delete"
          className="page-road-map__mobile-icon"
          sx={{
            fontSize: '2rem',
            padding: 0,
          }}
          onClick={() => setIsDropdownOpen(true)}
        >
          <FormatListBulletedOutlinedIcon fontSize="42px" />
        </IconButton>
        <Backdrop
          sx={{
            color: '#fff',
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
          }}
          open={isDropdownOpen}
          onClick={() => setIsDropdownOpen(false)}
        >
          <Grow
            in={isDropdownOpen}
            style={{ transformOrigin: '0 0 0' }}
            {...(isDropdownOpen ? { timeout: 800 } : {})}
          >
            <div className="page-road-map__mobile-items">
              <span className="page-road-map__mobile-items-title">
                Contents
              </span>
              <div
                className="page-road-map__mobile-item"
                onClick={() => window.scroll(0, 0)}
              >
                <span className="page-road-map__mobile-item-label">
                  (Move to top)
                </span>
              </div>
              {sectionsData.map((section, idx) => (
                <div
                  className={`page-road-map__mobile-item ${
                    section.isCurrentSection
                      ? 'page-road-map__mobile-item--active'
                      : ''
                  }`}
                  key={idx}
                  onClick={() => handleItemClick(sectionsTopOffset[idx])}
                >
                  <span className="page-road-map__mobile-item-label">
                    {section.sectionLabel}
                  </span>
                </div>
              ))}
            </div>
          </Grow>
        </Backdrop>
      </div>
      {sectionsData.map((section, idx) => (
        <div
          className={`page-road-map__item ${
            section.isCurrentSection ? 'page-road-map__item--active' : ''
          }`}
          key={idx}
          onClick={() => handleItemClick(sectionsTopOffset[idx])}
        >
          <img
            src={`${
              section.isCurrentSection
                ? 'assets/ellipse_checked.webp'
                : 'assets/ellipse.webp'
            }`}
            alt="ellipse"
          />
          <span className="page-road-map__item-label">
            {section.sectionLabel}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PageRoadMap;
