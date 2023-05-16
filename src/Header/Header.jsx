
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from '@mui/material/Link';
import './Header.css';
const Header = () => {

  
  return (
    <header className="header">
      <div className="container">
      <div className="Icons">
        <Link href="https://www.linkedin.com/in/ashishgujral22/" color="inherit"> <LinkedInIcon/> </Link>
        <Link href="https://twitter.com/Ashishgujral22" color="inherit"> <TwitterIcon/> </Link>
        <Link href="mailto:ashishgujral22@gmail.com" color="inherit"> <GoogleIcon/> </Link>
        <Link href="https://www.instagram.com/ashugujral/" color="inherit"> <FacebookIcon/> </Link>
        <Link href="https://github.com/AshishGujral" color="inherit"> <GitHubIcon/> </Link>
    
      </div>
        <div className="header-content">
          <h4 className="header-subtitle">Hello, I am</h4>
          <div className="animated-info">
            <span className="animated-item">Ashish Gujral</span>
            <span className="animated-item">Android Developer</span>
            <span className="animated-item">Web Developer</span>
          </div>
          {/*
                  <button class="btn btn-primary btn-rounded"><i class="ti-printer pr-2"></i>Print Resume</button>
              */}
        </div>
      </div>
    </header>
  );
};

export default Header;
