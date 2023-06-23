/* eslint-disable react/prop-types */
const Card = ({
  position,
  timing,
  location,
  keywords,
  company,
  company_logo,
  posted_on,
}) => {
  return (
    <div className="card-horizontal">
      <div>
        <div className="card-image">
          <img src={company_logo} alt="company logo" />
        </div>
        <div className="card-details">
          <div className="card-name">{company}</div>
          <div className="card-position">{position}</div>
          <div className="card-other-details">{timing}</div>
        </div>
      </div>
      <div className="card-programming-languages">
        <ul>
          {keywords.map((lang) => {
            return <li key={lang}>{lang}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
