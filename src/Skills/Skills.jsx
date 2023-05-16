import React from "react";
import Avatar from "@mui/material/Avatar";
import './Skills.css';
const Skills = (props) => {
    return (
      <div className="col-lg-4 about-card">
        <h3 className="font-weight-light">Skills</h3>
        <span className="line mb-5"></span>
        <div className="row" id="sk">
            
          {props.item.map((item, index) => (
            <div className="col-1 avtar pt-1" key={index}>
              <Avatar
                name="image"
                src={item.icon}
                sx={{
                  mr: 2,
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  transition: ".5s !important",
                  zIndex: 2,
                }}
              />
            
              <div className="col-10 ml-auto mr-3">
              <h6 className="head">{item.id}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default Skills;
