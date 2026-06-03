import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Navbar.css';
import logo from '../../assets/images/logo.png';
import { Telephone, GeoAlt, Clock } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="navbar-wrapper">

      {/* ================= TOP BAR ================= */}
      <div className="navbar-top">

        {/* LEFT: logo */}
        <div className="navbar-left">
          <a href="/">
            <img src={logo} alt="Logo" className="logo" />
            <span className="brand-name">Clinique Vétérinaire</span>
          </a>
        </div>

        {/* RIGHT: info + urgence + burger */}
        <div className="navbar-right">

          {/* INFO (desktop visible, mobile optional via CSS) */}
          <div className="navbar-info">
            <div>
              <Telephone className="navbar-icon" />
              <span>(613) 123-4567</span>
            </div>
            <div>
              <GeoAlt className="navbar-icon" />
              <span>Ottawa, ON</span>
            </div>
          </div>

          <Button variant="danger" className="urgence-btn" onClick={() => navigate('/emergency')}>
            URGENCE
          </Button>

          <div className="burger" onClick={() => setOpen(!open)}>
            ☰
          </div>

        </div>

      </div>

      {/* ================= BOTTOM BAR (desktop) ================= */}
      <div className="navbar-bottom desktop-only">
        <a href="/about">À propos</a>
        <a href="/services">Nos services</a>
        <a href="/contact">Contactez-nous</a>
      </div>

      {/* ================= MOBILE MENU ================= */}
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