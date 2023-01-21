import React, { useEffect, useState } from 'react';
import './page-road-map.css';

const PageRoadMap = () => {
  const [sectionsData, setSectionsData] = useState([]);
  const [sectionsTopOffset, setSectionsTopOffset] = useState([]);

  useEffect(() => {
    const sections = document.getElementsByClassName('page-section');
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

    window.onscroll = updateClientMid;
    window.onresize = updateClientMid;
  }, []);

  const handleItemClick = (offsetTop) => {
    if (!offsetTop) return;
    window.scroll(0, offsetTop);
  };

  return (
    <div className="page-road-map" id="page-road-map">
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
                ? 'assets/ellipse_checked.svg'
                : 'assets/ellipse.svg'
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
