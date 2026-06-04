// src/pages/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/layout/Layout';
import vet1 from '../images/vet1.jpg';
import vet2 from '../images/vet2.jpg';

function About() {
  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-4">À propos de nous</h1>

        <div className="timeline">
          <div className="timeline-item">
            <h5>2010</h5>
            <p>Ouverture de la clinique vétérinaire.</p>
          </div>
          <div className="timeline-item">
            <h5>2015</h5>
            <p>Expansion des services spécialisés.</p>
          </div>
          <div className="timeline-item">
            <h5>2022</h5>
            <p>Modernisation complète des installations.</p>
          </div>
        </div>

        <Row className="mt-5">
          <Col md={6} className="text-center">
            <img src={vet1} alt="Vétérinaire 1" className="vet-img" />
            <h5 className="mt-2">Dre. Martin</h5>
            <p>Chirurgie et médecine générale</p>
          </Col>

          <Col md={6} className="text-center">
            <img src={vet2} alt="Vétérinaire 2" className="vet-img" />
            <h5 className="mt-2">Dr. Lopez</h5>
            <p>Urgences et soins intensifs</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default About;