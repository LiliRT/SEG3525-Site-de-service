// src/pages/EmergencyConfirmation.js
import React from 'react';
import Layout from '../components/layout/Layout';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { TelephoneFill, GeoAltFill } from 'react-bootstrap-icons';
import { useLocation, useNavigate } from 'react-router-dom';

function EmergencyConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  return (
    <Layout>
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-4">
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: '#198754',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '4rem'
              }}
            >
              ✓
            </div>
          </Col>

          <Col md={8}>
            <h2>
              Demande d'urgence reçue
            </h2>

            <p>
              Votre demande a été transmise à notre équipe.
            </p>

            {data && (
              <>
                <p>
                  <strong>Animal :</strong> {data.animalName}
                </p>

                <p>
                  <strong>Type :</strong> {data.animalType}
                </p>

                <p>
                  <strong>Niveau d'urgence :</strong> {data.urgencyLevel}
                </p>
              </>
            )}
          </Col>
        </Row>

        <div className="d-flex flex-wrap gap-2 mt-5">
          <Button className="bouton" href="tel:6131234567">
            <TelephoneFill className="me-1" />
            Appeler
          </Button>

          <Button className="bouton" href="https://www.google.com/maps">
            <GeoAltFill className="me-1" />
            Itinéraire
          </Button>

          <Button className="bouton" onClick={() => navigate('/')}>
            Retour à l'accueil
          </Button>

        </div>

      </Container>

    </Layout>
  );
}

export default EmergencyConfirmation;