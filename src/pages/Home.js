// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import heroImage from '../images/hero.jpg';
import { TelephoneFill, GeoAltFill, Calendar, ExclamationTriangle } from 'react-bootstrap-icons';
import Layout from '../components/layout/Layout';
import { useNavigate } from 'react-router-dom';

const slogans = [
    'Nous prenons soin de vos compagnons.',
    'Votre animal, notre priorité.',
    'Des soins vétérinaires de confiance.',
];

function Home() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Version mobile
  if (isMobile) {
    return (
    <Layout>
      <div className="home-mobile">
        <div className="home-mobile-hero">
          <img src={heroImage} alt="Clinique" />
          <div className="home-mobile-overlay">
            <h2>Clinique Vétérinaire Friends&Pets</h2>
            <p>{slogans[current]}</p>
          </div>
        </div>

        <Container className="mt-3">
          <Row className="g-2">
            <Col xs={6}>
              <Button className="w-100 bouton-urgence" onClick={() => navigate('/emergency')}>
                <ExclamationTriangle className="me-1" />
                Urgence
              </Button>
            </Col>
            <Col xs={6}>
              <Button className="w-100 bouton" onClick={() => navigate('/appointment')}>
                <Calendar className="me-1" />
                RDV
              </Button>
            </Col>
            <Col xs={6}>
              <Button className="w-100 bouton" href="tel:6131234567">
                <TelephoneFill className="me-2" />
                Appeler
              </Button>
            </Col>
            <Col xs={6}>
              <Button className="w-100 bouton" href="https://www.google.com/maps">
                <GeoAltFill className="me-1" />
                Itinéraire
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
    );
  }

  // Version ordinateur
  return (
  <Layout>
    <div className="home-desktop">
      <Container className="home">
        <Row className="align-items-center my-5">
          <Col md={6}>
            <h1>Clinique Vétérinaire Friends&Pets</h1>
            <h4 className="slogan">{slogans[current]}</h4>
            <div className="mt-3">
              <Button className="me-2 bouton-urgence" onClick={() => navigate('/emergency')}>
                <ExclamationTriangle className="me-1" />
                URGENCE
              </Button>
              <Button className="bouton" onClick={() => navigate('/appointment')}>
                Prendre rendez-vous
              </Button>
            </div>
            <div className="mt-3">
              <Button className="bouton" href="tel:6131234567">
                <TelephoneFill className="me-1" />
                Appeler
              </Button>
              <p>(613) 123-4567</p>
            </div>
            <div className="mt-3">
              <Button className="bouton" href="https://www.google.com/maps">
                <GeoAltFill className="me-1" />
                Itinéraire
              </Button>
              <p>123 Rue des Animaux, Montréal</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="home-image-wrapper">
              <img src={heroImage} alt="Clinique" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
  );
}

export default Home;