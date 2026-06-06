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
            <a href="tel:6131234567">(613) 123-4567</a>
          </div>
          <div className="footer-item">
            <GeoAlt className="footer-icon" />
            <a href="https://maps.google.com">123 rue des Animaux, Ottawa, ON, A1B 2C3</a>
          </div>
          <div className="footer-item">
            <Clock className="footer-icon" />
            <span>Ouvert tous les jours 8h – 18h</span>
          </div>
          <div className="footer-item">
            <Clock className="footer-icon urgence-icon" />
            <a href="/emergency"><strong className="text-danger">URGENCE 24/7</strong></a>
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