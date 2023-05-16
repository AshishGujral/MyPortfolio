import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import Javaicon from "../icons/Java-Emblem.jpeg";
import Cicon from "../icons/c.png";
import Androidicon from "../icons/android.png";
import CSSicon from "../icons/css.png";
import Htmlicon from "../icons/html.png";
import JavaScripticon from "../icons/javascript.png";
import Mysqlicon from "../icons/mysql.png";
import Phpicon from "../icons/php.png";
import "./About.css";
import Skills from "../Skills/Skills";

const skill = [
    { icon: Javaicon, id: "Java" },
    { icon: Cicon, id: "C" },
    { icon: Androidicon, id: "Android" },
    { icon: CSSicon, id: "CSS" },
    { icon: Htmlicon, id: "Html" },
    { icon: JavaScripticon, id: "Java" },
    { icon: Mysqlicon, id: "MySql" },
    { icon: Phpicon, id: "Php" },
]
const About = () => {
  return (
    <div className="container-fluid">
      <div id="about" className="row about-section">
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light">Who am I ?</h3>
          <span className="line mb-5"></span>
          <h5 className="about-text" style={{opacity:0.8}}>
          As a passionate web developer, I strive to create unique and innovative web solutions that leave a lasting impact. From front-end design to back-end development, I'm always up for a challenge and eager to learn something new. 
So grab a cup of coffee ☕️ and let's dive into the world of web development together! 🌐💻
          </h5>
        </div>
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light">Personal Info</h3>
          <span className="line mb-5"></span>
          <ul className="mt40 info list-unstyled" >
            <li>
              <span>Email</span> : ashishgujral22@gmail.com
            </li>
            <li>
              <span>Phone</span> : +1(604) 389-4545
            </li>
            <li>
              <span>Skype</span> : Ashish Gujral{" "}
            </li>
            <li>
              <span>Address</span> : 2649 james street, Abbotsford,BC.
            </li>
          </ul>
          <ul className="social-icons pt-3">
            <Link
              href="https://www.linkedin.com/in/ashishgujral22/"
              color="inherit"
            >
      
              <LinkedInIcon />
            </Link>
            <Link href="https://twitter.com/Ashishgujral22" color="inherit">
              <TwitterIcon />
            </Link>
            <Link href="mailto:ashishgujral22@gmail.com" color="inherit">
         
              <GoogleIcon />
            </Link>
            <Link href="https://www.instagram.com/ashugujral/" color="inherit">

              <FacebookIcon />
            </Link>
            <Link href="https://github.com/AshishGujral" color="inherit">
              <GitHubIcon />
            </Link>
          </ul>
        </div>
       

        <Skills item = {skill}/>
      </div>
    </div>
  );
};

export default About;
