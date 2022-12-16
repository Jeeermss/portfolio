import './case-study-card.css';
// import PLACEHOLDER_IMG from '../../assets/images/card-image.png';

const CaseStudyCard = ({ header, flag, contentHeader, contentDesc }) => {
  return <div className='card'>
    <div className='card-header'>
      <h4 className='heading-level-4' >{header}</h4>
      <p className='body-2'>{flag}</p>
    </div>
    <div className='card-media'>
      {/* <img src={PLACEHOLDER_IMG} alt='placeholder' /> */}
    </div>
    <div className='card-content'>
      <h4 className='heading-level-4-card'>{contentHeader}</h4>
      <p className='body-3'>
        {contentDesc}
      </p>
    </div>
  </div>
}

export default CaseStudyCard;