// src/pages/Services.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Layout from '../components/layout/Layout';
import service1 from '../images/service1.jpg';
import service2 from '../images/service2.jpg';
import service3 from '../images/service3.jpg';
import service4 from '../images/service4.jpg';
import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-4">Nos services</h1>

        <Row className="service-row align-items-center mb-4">
          <Col md={6}>
            <img src={service1} className="service-img" alt="Service 1" />
          </Col>
          <Col md={6}>
            <h4>Urgences</h4>
            <p>Soins rapides et disponibles 24/7. Remplir le formulaire de consultation d'urgence ci-dessous pour accélérer le processus lorsque vous êtes rendus sur place.</p>
            <Button 
              className="bouton-urgence" onClick={() => navigate('/emergency')}>Formulaire de consultation d'urgence</Button>
          </Col>
        </Row>

        <Row className="service-row align-items-center mb-4 flex-md-row-reverse">
          <Col md={6}>
            <img src={service2} className="service-img" alt="Service 2" />
          </Col>
          <Col md={6}>
            <h4>Examen général</h4>
            <p>Examens complets pour vos animaux.</p>
            <Button
              className="bouton"
              variant="primary"
              onClick={() =>
                navigate('/appointment', {
                  state: {
                    service: 'Examen général'
                  }
                })
              }
            >
              Prendre rendez-vous
            </Button>
          </Col>
        </Row>

        <Row className="service-row align-items-center mb-4">
          <Col md={6}>
            <img src={service3} className="service-img" alt="Service 3" />
          </Col>
          <Col md={6}>
            <h4>Toilettage</h4>
            <p>Soins de toilettage complets.</p>
            <Button
              className="bouton"
              variant="primary"
              onClick={() =>
                navigate('/appointment', {
                  state: {
                    service: 'Toilettage'
                  }
                })
              }
            >
              Prendre rendez-vous
            </Button>
          </Col>
        </Row>

        <Row className="service-row align-items-center mb-4 flex-md-row-reverse">
          <Col md={6}>
            <img src={service4} className="service-img" alt="Service 4" />
          </Col>
          <Col md={6}>
            <h4>Vaccination</h4>
            <p>Prévention et santé à long terme.</p>
            <Button
              className="bouton"
              variant="primary"
              onClick={() =>
                navigate('/appointment', {
                  state: {
                    service: 'Vaccination'
                  }
                })
              }
            >
              Prendre rendez-vous
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Services;