// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import heroImage from '../images/hero.jpg';
import { Telephone, GeoAlt, Calendar, ExclamationTriangle } from 'react-bootstrap-icons';
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
            <h2>Clinique Vétérinaire</h2>
            <p>{slogans[current]}</p>
          </div>
        </div>

        <Container className="mt-3">
          <Row className="g-2">
            <Col xs={6}>
              <Button className="w-100" variant="danger" onClick={() => navigate('/emergency')}>
                <ExclamationTriangle className="me-1" />
                Urgence
              </Button>
            </Col>
            <Col xs={6}>
              <Button className="w-100" variant="primary" onClick={() => navigate('/appointment')}>
                <Calendar className="me-1" />
                RDV
              </Button>
            </Col>
            <Col xs={6}>
              <Button className="w-100" variant="outline-primary">
                <GeoAlt className="me-1" />
                Itinéraire
              </Button>
            </Col>
            <Col xs={6}>
              <Button className="w-100" variant="outline-secondary">
                <Telephone className="me-1" />
                Appeler
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
            <h1>Clinique Vétérinaire</h1>
            <h4 className="text-muted">{slogans[current]}</h4>
            <div className="mt-3">
              <Button variant="danger" className="me-2" onClick={() => navigate('/emergency')}>
                <ExclamationTriangle className="me-1" />
                URGENCE
              </Button>
              <Button
                variant="primary"
                onClick={() =>
                  navigate('/appointment')
                }
              >
                Prendre rendez-vous
              </Button>
            </div>
            <div className="mt-3">
              <Button size="sm" className="ms-3" variant="outline-primary">
                Itinéraire
              </Button>
              <GeoAlt className="me-1" />
              123 Rue des Animaux, Montréal
            </div>
            <div className="mt-3">
              <Button size="sm" className="ms-3" variant="outline-secondary">
                Appeler
              </Button>
              <Telephone className="me-1" />
              (514) 123-4567
            </div>
          </Col>
          <Col md={6}>
            <div className="home-image-wrapper">
              <img src={heroImage} alt="Clinique" />
            </div>
          </Col>
        </Row>

        {/* <div className="home-info p-3 bg-light rounded"> */}
          {/* <Row> */}
            {/* <Col md={6} className="mb-2">
              
            </Col>
            <Col md={6}>
              <Telephone className="me-1" />
              (514) 123-4567
              <Button size="sm" className="ms-3" variant="outline-secondary">
                Appeler
              </Button>
            </Col> */}
          {/* </Row> */}
        {/* </div> */}
      </Container>
    </div>
  </Layout>
  );
}

export default Home;