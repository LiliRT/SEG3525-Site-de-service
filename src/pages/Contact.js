// src/pages/Contact.js
import React from 'react';
import Layout from '../components/layout/Layout';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { GeoAltFill, TelephoneFill, ClockFill, SignpostFill } from 'react-bootstrap-icons';
import clinicImage from '../images/clinic.jpg';

function Contact() {
  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-4">
          Contactez-nous
        </h1>

        <Row className="align-items-center">
          <Col xs={{ order: 1 }} md={{ order: 2 }} lg={6}>
            <Card className="border-0 shadow-sm p-4">
              <h3 className="mb-4">
                Clinique Vétérinaire Friends&Pets
              </h3>

              <p>
                <GeoAltFill className="me-2 text-primary" />
                1234 rue des Animaux,
                Ottawa, ON, A1B 2C3
              </p>

              <p>
                <TelephoneFill className="me-2 text-primary" />
                (613) 123-4567
              </p>

              <div className="mb-4">
                <h5>
                  <ClockFill className="me-2" />
                  Heures d'ouverture
                </h5>

                <p className="mb-1">
                  Tous les jours : 8h00 à 18h00
                </p>

                <br></br>

                <p className="text-danger fw-bold">
                  Service d'urgence disponible 24 h / 24, 7 j / 7
                </p>
              </div>

              <div className="d-flex flex-wrap gap-2">
                <Button variant="success" href="tel:6131234567">
                  <TelephoneFill className="me-2" />
                  Appeler
                </Button>

                <Button variant="primary" href="https://maps.google.com" target="_blank">
                  <SignpostFill className="me-2" />
                  Itinéraire
                </Button>
              </div>
            </Card>
          </Col>

          <Col xs={{ order: 2 }} md={{ order: 1 }} lg={6} className="mt-4 mt-md-0">
            <img src={clinicImage} alt="Clinique vétérinaire" className="contact-img"/>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Contact;