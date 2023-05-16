
import './PortfolioItem.css';
function PortfolioItem({ category, imageSrc, linkUrl, title, subtitle }) {
  return (
    <div className={`col-md-6 col-lg-4 ${category} new`}>
      <div className="portfolio-item">
        <img
          src={imageSrc}
          className="img-fluid"
          alt={title}
          height="200px"
        />
        <div className="content-holder">

          <div className="text-holder">
            <h6 className="title">{title}</h6>
            <p className="subtitle">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem ;