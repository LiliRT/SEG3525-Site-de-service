// src/pages/Emergency.js
import React from 'react';
import Layout from '../components/layout/Layout';
import EmergencyForm from '../components/forms/EmergencyForm';
import { Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Emergency() {
  const navigate = useNavigate();
  const handleSubmit = (formData) => {
    navigate('/emergency-confirmation', {
      state: formData
    });
  };

  return (
    <Layout>
      <Container className="my-5 form">
        <h1 className="mb-4 text-danger">
          Consultation d'urgence
        </h1>

        <Alert variant="warning">
          Si votre animal est en danger immédiat,
          veuillez également nous appeler directement.
        </Alert>

        <EmergencyForm onSubmit={handleSubmit} />
      </Container>
    </Layout>
  );
}

export default Emergency;