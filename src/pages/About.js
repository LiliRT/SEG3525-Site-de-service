// src/pages/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/layout/Layout';
import { PersonCircle } from 'react-bootstrap-icons';

function About() {
  return (
    <Layout>
      <Container className="my-5 service">
        <h1 className="mb-4">À propos de nous</h1>

        <div className="timeline">
          <div className="timeline-item">
            <h5>2010</h5>
            <p>Ouverture de la clinique vétérinaire avec une petite équipe passionnée.</p>
          </div>

          <div className="timeline-item">
            <h5>2012</h5>
            <p>Ajout des premiers services de chirurgie et hospitalisation.</p>
          </div>

          <div className="timeline-item">
            <h5>2015</h5>
            <p>Expansion des services spécialisés : dermatologie et dentisterie animale.</p>
          </div>

          <div className="timeline-item">
            <h5>2018</h5>
            <p>Introduction d’un service d’urgence 24h/24 pour les cas critiques.</p>
          </div>

          <div className="timeline-item">
            <h5>2020</h5>
            <p>Digitalisation des dossiers patients et prise de rendez-vous en ligne.</p>
          </div>

          <div className="timeline-item">
            <h5>2022</h5>
            <p>Modernisation complète des installations et des équipements médicaux.</p>
          </div>

          <div className="timeline-item">
            <h5>2024</h5>
            <p>Lancement de services de télémédecine vétérinaire pour un suivi à distance.</p>
          </div>
        </div>

        <Row className="mt-5 justify-content-center">
          <Col md={5} className="text-center">
            <PersonCircle size={150}/>
            <h5 className="mt-2">Dre. Martin</h5>
            <p>Médecine générale et vaccination</p>
            <p className="text-start">
              Passionnée par le bien-être animal depuis l’enfance, elle accompagne les animaux
              et leurs familles avec douceur et précision. Elle se spécialise dans la prévention
              et le suivi médical à long terme.
            </p>
          </Col>

          <Col md={5} className="text-center">
            <PersonCircle size={150}/>
            <h5 className="mt-2">Dr. Lopez</h5>
            <p>Urgences et soins intensifs</p>
            <p className="text-start">
              Habitué aux situations critiques, il intervient sur les cas urgents avec sang-froid
              et expertise. Son objectif : stabiliser rapidement les animaux et maximiser leurs chances de rétablissement.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default About;