import { useState } from 'react';
import Tabs from '../../components/Tabs/Tabs';
import CaseStudyCardVideo from '../../components/CaseStudyCardVideo/CaseStudyCardVIdeo';

const PersonasTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const personasTabsData = [
    {
      name: 'Job Seekers',
      content: (
        <CaseStudyCardVideo
          // sx={{ my: 14 }}
          cardContent={[
            'The platform uses skill mapping technology to connect job seekers with information and opportunity they need to secure a rewarding trade career. Entry-level professionals, training individuals, and high school students have the ability to explore 36 different construction and maintenance trades, take a career quiz, connect and match job training to Job Seekers, and build a robust profile, which is essentially their portfolio.',
          ]}
          cardVideoUrl="https://www.youtube.com/watch?v=xcJtL7QggTI"
          cardVideoThumbnail="images/case_studies/career_starter/product_video_job_seekers.svg"
        />
      ),
    },
    {
      name: 'Employee Representatives',
      content: (
        <CaseStudyCardVideo
          // sx={{ my: 14 }}
          cardContent={[
            'The platform uses skill mapping technology to connect job seekers with information and opportunity they need to secure a rewarding trade career. Entry-level professionals, training individuals, and high school students have the ability to explore 36 different construction and maintenance trades, take a career quiz, connect and match job training to Job Seekers, and build a robust profile, which is essentially their portfolio.',
          ]}
          cardVideoUrl="https://vimeo.com/253989945"
          cardVideoThumbnail="images/case_studies/talent_pipeline/byf_collaborations_roadmap.svg"
        />
      ),
    },
  ];

  const handleSetActiveTab = async (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <Tabs
        activeTab={activeTab}
        setActiveTab={(tabIndex) => handleSetActiveTab(tabIndex)}
        tabsData={personasTabsData}
        sx={{ my: 15 }}
      />
    </div>
  );
};

export default PersonasTabs;