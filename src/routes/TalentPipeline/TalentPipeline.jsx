import CaseStudyIntro from '../../components/CaseStudyIntro/CaseStudyIntro';

import {
  summaryRoles,
  summary,
  problems,
  firstRowMembers,
  secondRowMembers,
} from '../../constants/talent-pipeline';
import './talent-pipeline.css';

const TalentPipeline = () => {
  return (
    <div className="talent-pipeline">
      <CaseStudyIntro
        pageTitle="Discover the Talent Pipeline"
        summaryRoles={summaryRoles}
        summary={summary}
        problems={problems}
        firstRowMembers={firstRowMembers}
        secondRowMembers={secondRowMembers}
      />
    </div>
  );
};

export default TalentPipeline;
