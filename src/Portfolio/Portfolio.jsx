
import Web1 from '../imgs/web-1.jpg';
import Web2 from '../imgs/web-2.jpg';
import Html1 from '../imgs/html-1.jpg'
import Html2 from '../imgs/html-2.jpg'
import Html3 from '../imgs/html-3.jpg'
import Java from '../imgs/java.jpg'
import Android1 from '../imgs/android1.jpg'
import Android2 from '../imgs/android2.jpg'
import PortfolioItem from './PortfolioItem';
import Arduino from '../imgs/Arduino.jpg';
import './Portfolio.css';
import React, {useState} from 'react';

const portfolioData = [
  {
  category: 'web',
  imageSrc: Web1,
  linkUrl: "https://github.com/AshishGujral/Php-CrudOperation",
  title: 'WEB',
  subtitle: 'Php Crud Operation!',
  },
  {
  category: 'web',
  imageSrc: Web2,
  linkUrl: "https://github.com/AshishGujral/Php-LoginAuthentication",
  title: 'WEB',
  subtitle: 'Php user registration using Rest api!',
  },
  {
  category: 'html',
  imageSrc: Html1,
  linkUrl: Html1,
  title: 'JS',
  subtitle: 'Contact list using JS',
  },
  {
  category: 'html',
  imageSrc: Html2,
  linkUrl: Html2,
  title: 'Html',
  subtitle: 'Website using html and css',
  },
  {
  category: 'html',
  imageSrc: Html3,
  linkUrl: "https://github.com/AshishGujral/NodeJs-PortfolioProject",
  title: 'Node JS',
  subtitle: 'Portfolio website using node js',
  },
  {
  category: 'web',
  imageSrc: Java,
  linkUrl: "https://github.com/AshishGujral/LibraryManagement-Javaproject",
  title: 'Java',
  subtitle: 'Library Application',
  },
  {
    category: 'web',
    imageSrc: Arduino,
    linkUrl: 'https://github.com/AshishGujral/Synchome',
    title: 'Full Stack',
    subtitle: 'Using ESP32',
    },
  {
  category: 'android',
  imageSrc: Android1,
  linkUrl: "https://github.com/AshishGujral/BookShare",
  title: 'Android',
  subtitle: 'Bookshare App with login logout',
  },
  {
  category: 'android',
  imageSrc: Android2,
  linkUrl: Android2,
  title: 'Android',
  subtitle: 'Images app with volleySingleton',
  },
  ];

  const Portfolio = () => {
    const [filter, setFilter] = useState('all');
  
    const handleFilterClick = (filter) => {
      setFilter(filter);
    };
  
    const filteredItems =
      filter === 'all'
        ? portfolioData
        : portfolioData.filter((item) => item.category === filter);
  
    return (
      <section className="section bg-custom-gray" id="portfolio">
        <div className="containe">
          <h2 className="mb-5">
            <span className="text-danger">My Portfolio </span>
            <span className="line"></span>
          </h2>
          <div className="portfolio">
            <div className="filters">
              <button
                className={filter === 'all' ? 'active' : ''}
                onClick={() => handleFilterClick('all')}
              >
                All
              </button>
              <button
                className={filter === 'web' ? 'active' : ''}
                onClick={() => handleFilterClick('web')}
              >
                Js|Html|Css
              </button>
              <button
                className={filter === 'html' ? 'active' : ''}
                onClick={() => handleFilterClick('html')}
              >
                HTML
              </button>
              <button
                className={filter === 'android' ? 'active' : ''}
                onClick={() => handleFilterClick('android')}
              >
                Android
              </button>
            </div>
            <div className="portfolio-container">
              {filteredItems.map((item, index) => (
                <PortfolioItem
                  key={index}
                  category={item.category}
                  imageSrc={item.imageSrc}
                  linkUrl={item.linkUrl}
                  title={item.title}
                  subtitle={item.subtitle}
                  className={`portfolio-item ${
                    filter === 'all' || filter === item.category ? 'show' : ''
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  

export default Portfolio;
