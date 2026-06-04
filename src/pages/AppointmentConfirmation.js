// src/pages/AppointmentConfirmation.js
import React from 'react';
import Layout from '../components/layout/Layout';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { CheckCircleFill, Telephone, GeoAlt, CalendarPlus } from 'react-bootstrap-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import AppointmentStepper from '../components/forms/AppointmentStepper';

function AppointmentConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  return (
    <Layout>
      <Container className="my-5">
        <div className="text-center mb-5">
          <AppointmentStepper currentStep={3} />

          <h2 className="mt-3">
            Rendez-vous confirmé !
          </h2>

          <CheckCircleFill size={90} color="green"/>
        </div>

        <Card className="p-4">
          <Row>
            <Col md={6}>
              <p>
                <strong>Service :</strong> {data.service}
              </p>

              <p>
                <strong>Animal :</strong> {data.animalName}
              </p>

              <p>
                <strong>Type :</strong> {data.animalType}
              </p>

              <p>
                <strong>Race :</strong> {data.breed}
              </p>
            </Col>

            <Col md={6}>
              <p>
                <strong>Date :</strong> {data.appointmentDate}
              </p>

              <p>
                <strong>Heure :</strong> {data.appointmentTime}
              </p>
            </Col>
          </Row>
        </Card>

        <Row className="g-2 mt-4">
          <Col md={3}>
            <Button className="w-100">
              <CalendarPlus className="me-2" />
              Calendrier
            </Button>
          </Col>

          <Col md={3}>
            <Button className="w-100" variant="outline-primary" onClick={() => navigate('/appointment')}>
              Nouveau RDV
            </Button>
          </Col>

          <Col md={3}>
            <Button className="w-100" variant="outline-success">
              <GeoAlt className="me-2" />
              Itinéraire
            </Button>
          </Col>

          <Col md={3}>
            <Button className="w-100" variant="outline-secondary">
              <Telephone className="me-2" />
              Appeler
            </Button>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button variant="link" onClick={() => navigate('/')}>
            Retour à l'accueil
          </Button>
        </div>
      </Container>
    </Layout>
  );
}

export default AppointmentConfirmation;