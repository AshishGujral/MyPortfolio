import React from "react";
import OwlCarousel from "react-owl-carousel";
import "./TeamView.css";
import Kaisen from "../imgs/kaisen.jpeg";
import Eunchong from "../imgs/eunchong.jpeg";
import cheng from "../imgs/cheng.jpeg";

const testimonials = [
    {
      id: 1,
      name: "Kaisen Wu",
      image: Kaisen,
      review:
        "Ashish performed really excellent in our Android and JAVA projects. He is an amazing learner, communicator, and problem solver. In our projects, he not only completed his part perfectly but also helped other members to learn and implement. Looking forward to working with him again!",
      link: "https://www.linkedin.com/in/kaisen-wu/",
    },
    {
      id: 2,
      name: "Eunchong Choi",
      image: Eunchong,
      review:
        "I had a group project with Ashish. What I felt while working on the project with him was he knew how to approach the project effectively better than anyone else in our team members, and whenever we had difficulties while working on a project, he solved the problem with responsibility. He Identifies and resolves problems quickly. To make our app looks more professional, he added more extra functions to it. He is passionate about programming.",
      link: "https://www.linkedin.com/in/eunchong-choi-35b07922b/",
    },
    {
      id: 3,
      name: "Cheng Yi Chen",
      image: cheng,
      review:
        "I did Android and Java projects with Ashish. While working with him, I realised he is a responsible teammate and a professional at coding. During the project, whenever we had difficulties, he would always come up with better ideas and solve difficult tasks. He is always willing to help others. I enjoyed working with him.",
      link: "https://www.linkedin.com/in/cheng-yi-chen/",
    },
  ];

const Testimonial = ({ testimonial, isActive }) => {
  return (
    <div key={testimonial.id} className={`card ${isActive ? 'active' : 'inactive'}`} >
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="card-img-top"
      />
      <div className="card-body">
        <h5>
          {testimonial.name}
        </h5>
        <p className="card-text">{testimonial.review}</p>
      </div>
    </div>
  );
};

const TeamView = (onInViewChange) => {
  const options = {
    loop: true,
    center: true,
    margin: 0,
    items: 1,
    autoplay: true,
    dots:true,
    responsiveClass: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  };
  return (
    <div className="gtco-testimonials" id="teamview" >
      <h2 className="mb-5">
            <span className="text-danger"> Team Review </span>
            <span className="line"></span>
          </h2>
          <OwlCarousel {...options}>
      {testimonials.map((testimonial) => (
        <Testimonial
          key={testimonial.id}
          testimonial={testimonial}
        />
      ))}
    </OwlCarousel>
    </div>
  );
};

  
export default TeamView;
