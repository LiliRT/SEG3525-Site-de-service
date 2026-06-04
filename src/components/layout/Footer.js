// src/components/layout/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import { Telephone, GeoAlt, Clock } from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <Container className="footer-container">
        <div className="footer-left">
          <div className="footer-item">
            <Telephone className="footer-icon" />
            <span>(613) 123-4567</span>
          </div>
          <div className="footer-item">
            <GeoAlt className="footer-icon" />
            <span>Ottawa, ON</span>
          </div>
          <div className="footer-item">
            <Clock className="footer-icon" />
            <span>Ouvert tous les jours 8h – 18h</span>
          </div>
          <div className="footer-item">
            <Clock className="footer-icon" />
            <span>Urgence 24/7</span>
          </div>
        </div>

        <div className="footer-right">
          <a href="/about">À propos</a>
          <a href="/services">Nos services</a>
          <a href="/contact">Contactez-nous</a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;