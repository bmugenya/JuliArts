import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/nav.css';
import Modal from '@mui/material/Modal';
import Subscribe from './Subscribe';

const Nav = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    console.log('error');
  };


  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="nav-bar">
      <div className="logo-container">
        <a href="/" className="link">
          <img
            className="nav_logo"
            src={'/images/misc/logo.png'}
            alt="netflix logo"
          />
        </a>
      </div>

      <div className="link-container">
        <a href="/gallery" className="link">
          <span>Gallery</span>
        </a>
                <a href="/training" className="link">
          <span>Training</span>
        </a>
                <a href="/about" className="link">
          <span>How it works</span>
        </a>
                <a href="/contact" className="link">
          <span>Contact</span>
        </a>
      </div>

      <div type="button" onClick={handleOpen} className="button-container">
        <button className="nav_btn">Get Started</button>
      </div>

   <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
       <Subscribe />
      </Modal>

    </div>
  );
};

export default Nav;
