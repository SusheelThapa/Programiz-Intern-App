const Card = () => {
  return (
    <div className="card-horizontal">
      <div>
        <div className="card-image">
          <img
            src="https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/logos/docsumo-logo.jpeg"
            alt="company logo"
          />
        </div>
        <div className="card-details">
          <div className="card-languages">Photoshop</div>
          <div className="card-position">Senior Frontend Developer</div>
          <div className="card-other-details">Full Time</div>
        </div>
      </div>
      <div className="card-programming-languages">
        <ul>
          <li>Full Stack</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
