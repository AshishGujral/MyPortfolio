import './PortfolioItem.css';

function PortfolioItem({ category, imageSrc, linkUrl, title, subtitle }) {
  
  const handleClick = () => {
    window.open(linkUrl, '_blank');
  };
  return (
    <div className={`col-md-6 col-lg-4 ${category} new`}>
      <div className="portfolio-item">
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} className="img-fluid" alt={title} style={{ height: '200px', width: '300px' }} />
        </a>
        <div className="content-holder" onClick={handleClick}>
          <div className="text-holder">
            <h6 className="title">{title}</h6>
            <p className="subtitle">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
