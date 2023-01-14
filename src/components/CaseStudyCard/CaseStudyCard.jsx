import './case-study-card.css';

const CaseStudyCard = ({
  header,
  flag,
  contentHeader,
  contentDesc,
  cardImageUrl,
  cardImageAlt,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="heading-level-4">{header}</h4>
        <p className="card-header__flag body-2">{flag}</p>
      </div>
      <div className="card-media">
        <img src={cardImageUrl} alt={cardImageAlt} />
      </div>
      <div className="card-content">
        <h4 className="card-content__heading heading-level-4-card">
          {contentHeader}
        </h4>
        <p className="body-3 jm-typography-2">{contentDesc}</p>
      </div>
    </div>
  );
};

export default CaseStudyCard;
