// src/pages/Appointment.js
import React from 'react';
import Layout from '../components/layout/Layout';
import AppointmentForm from '../components/forms/AppointmentForm';
import { Container } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import AppointmentStepper from '../components/forms/AppointmentStepper';

function Appointment() {
  const navigate = useNavigate();
  const location = useLocation();
  const preselectedService = location.state?.service || '';
  const initialData = location.state || null;
  const handleSubmit = (formData) => {
    navigate('/appointment-schedule', {
      state: formData
    });
  };

  return (
    <Layout>
      <Container className="my-5 form">
        <h2 className="mb-4">
          Prendre un rendez-vous
        </h2>

        <AppointmentStepper currentStep={1} />

        <AppointmentForm onSubmit={handleSubmit} preselectedService={preselectedService} initialData={initialData} />
      </Container>
    </Layout>
  );
}

export default Appointment;