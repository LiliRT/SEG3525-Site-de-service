// src/pages/EmergencyConfirmation.js
import React from 'react';
import Layout from '../components/layout/Layout';
import { Container, Button, Row, Col, Card, Badge } from 'react-bootstrap';
import { TelephoneFill, GeoAltFill, CheckCircleFill } from 'react-bootstrap-icons';
import { useLocation, useNavigate } from 'react-router-dom';

function EmergencyConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  return (
    <Layout>
      <Container className="my-5 form">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
          <CheckCircleFill size={90} color="green" className="mb-3 mb-md-0 me-md-4 flex-shrink-0"/>

          <div className="text-start">
            <h2>
              Demande d'urgence reçue pour <strong>{data.animalName}</strong>.
            </h2>

            <p>
              Notre équipe est prête à vous accueillir <strong>24h / 24, 7j / 7</strong>.
              <br />
              Présentez-vous à la clinique dès que possible.
            </p>

            <p>Temps d'attente estimé : 30-45 minutes</p>
          </div>
        </div>

        <Card className="p-4 mb-4 carte appointment-summary">
          <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
            <h5 className="mb-0">Résumé de vos informations</h5>
            <Badge className="service-badge">{data.service}</Badge>
          </div>

          <Row className="summary-row g-3">
            <Col xs={12} md={4}>
              <div className="summary-section">
                <h6>Propriétaire</h6>

                <p><strong>Nom :</strong> {data.ownerName}</p>
                <p><strong>Téléphone :</strong> {data.phone}</p>
              </div>
            </Col>

            <Col xs={12} md={4}>
              <div className="summary-section">
                <h6>Animal</h6>

                <p><strong>Nom :</strong> {data.animalName}</p>
                <p><strong>Âge :</strong> {data.animalAge}</p>

                <p>
                  <strong>Type :</strong>{" "}
                  {data.animalType === "Autre"
                    ? data.otherAnimalType
                    : data.animalType}
                </p>
              </div>
            </Col>

            <Col xs={12} md={4}>
              <div className="summary-section">
                <h6>Urgence</h6>

                <p><strong>Niveau d'urgence :</strong> {data.urgencyLevel}</p>
                <p><strong>Symptômes :</strong> {data.symptoms}</p>
              </div>
            </Col>
          </Row>
        </Card>

        <Row className="g-2 mt-4">
          <Col md={6}>
            <Button className="w-100 bouton" href="tel:6131234567">
              <TelephoneFill className="me-2" />
              Appeler
            </Button>
          </Col>

          <Col md={6}>
            <Button className="w-100 bouton" href="https://www.google.com/maps">
              <GeoAltFill className="me-2" />
              Itinéraire
            </Button>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button variant="outline-secondary" size="sm" onClick={() => navigate('/')}>
            Retour à l'accueil
          </Button>
        </div>
      </Container>

    </Layout>
  );
}

export default EmergencyConfirmation;