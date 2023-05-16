import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import './Navbar.css';
import { Link } from "react-scroll";
import { useLocation } from 'react-router-dom';
import avatarImg from "../imgs/avatar.jpg"; // import the avatar image
import { useState, useEffect } from 'react';

const pages = [
  { label: "Home", id: "header" },
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  {
    label: (
      <Avatar
        name="image"
        className="brand-img"
        src={avatarImg}
        sx={{
          mr: 2,
          border: "10px solid white",
          boxShadow: "0 5px 1px rgba(128, 128, 128, 0.13)",
          width: 170,
          height: 170,
          borderRadius: "50%",
          transition: ".5s !important",
          zIndex: 2,
        }}
      />
    ),
    id: "avatar",
  },
  { label: "Portfolio", id: "portfolio" },
  { label: "TeamReview", id: "teamview" },
  { label: "Contact", id: "contact" },
];

const Text =(activeSection)=>{
  return (
    <ul className="navbar-nav brand">
    <li className="brand-txt">
        <h5 className="brand-title">Ashish Gujral</h5>
        <div className="brand-subtitle">Android Developer | Web Developer</div>
    </li>
</ul>
  );
}
function ResponsiveAppBar() {    
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [position, setPosition] = useState('static');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 510) {
        setPosition('fixed');
        
      } else {
        setPosition('static');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <AppBar position={position} color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: "80px" }}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) =>
                index == 3 ? null : (
                  <MenuItem
                    key={page.label}
                    onClick={()=>handleCloseNavMenu()}
                  >
                    <Link to={page.id} smooth={true} offset={-80} onClick={handleCloseNavMenu} >
                      <Typography textAlign="center">{page.label}</Typography>
                    </Link>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Ashish Gujral
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-evenly",
              },
            }}
          >
            {pages.map((page,index) => 
              position == 'fixed' && index==3? 
              <Text/>
              :
             ( <Button
              key={page.label}
              onClick={handleCloseNavMenu}
              className='navbar_app'
              sx={{
                my: 2,
                color: "black",
                display:"-webkit-flex",
                height: "80px",
                justifyContent: "space-evenly",
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: "15px",
                "&:hover": {
                  color: "#F85C70",
                }
              }}
            >

            
                {
                  <Link to={page.id} smooth={true} offset={-80} >
                    {page.label}
                  </Link>
                }
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
