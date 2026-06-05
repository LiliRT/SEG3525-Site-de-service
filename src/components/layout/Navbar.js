// src/components/layout/Navbar.js
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './Navbar.css';
import logo from '../../images/logo.png';
import logoDarkmode from '../../images/logo-darkmode.png';
import { Telephone, GeoAlt, Moon, Sun } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);

    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="navbar-wrapper">
      <div className="navbar-top">
        <div className="navbar-left">
          <a href="/" class="text-decoration-none">
            <img src={darkMode ? logoDarkmode: logo} alt="Logo" className="logo" />
            <span className="brand-name"> Clinique Vétérinaire Friends&Pets</span>
          </a>
        </div>

        <div className="navbar-right">
          <div className="navbar-info">
            <div>
              <a href="tel:6131234567">
                <Telephone className="navbar-icon" />
                <span>(613) 123-4567</span>
              </a>  
            </div>

            <div>
              <a href="https://maps.google.com">
                <GeoAlt className="navbar-icon" />
                <span>123 rue des Animaux, Ottawa, ON, A1B 2C3</span>
              </a>
            </div>
          </div>

          <Button variant="danger" className="bouton-urgence" onClick={() => navigate('/emergency')}><strong>URGENCE 24/7</strong></Button>

          <Button onClick={() => setDarkMode(prev => !prev)} className="bouton" >
            {darkMode ? <Sun /> : <Moon />}
          </Button>

          <div className="burger" onClick={() => setOpen(!open)}>☰</div>
        </div>
      </div>

      <div className="navbar-bottom desktop-only">
        <a href="/about">À propos</a>
        <a href="/services">Nos services</a>
        <a href="/contact">Contactez-nous</a>
      </div>

      {open && (
        <div className="mobile-menu">
          <a href="/about" onClick={() => setOpen(false)}>À propos</a>
          <a href="/services" onClick={() => setOpen(false)}>Nos services</a>
          <a href="/contact" onClick={() => setOpen(false)}>Contactez-nous</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;