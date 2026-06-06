// src/pages/AppointmentConfirmation.js
import React from 'react';
import Layout from '../components/layout/Layout';
import { Container, Card, Button, Row, Col, Badge } from 'react-bootstrap';
import { CheckCircleFill, TelephoneFill, GeoAltFill, CalendarPlusFill, PlusCircleFill } from 'react-bootstrap-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import AppointmentStepper from '../components/forms/AppointmentStepper';

function AppointmentConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  const getFullDateLabel = (dateStr) => {
    if (!dateStr) return '';

    // Parse date string "23 Juin 2026"
    const [day, monthName, year] = dateStr.split(' ');

    const monthNames = [
      'Janvier','Février','Mars','Avril','Mai','Juin',
      'Juillet','Août','Septembre','Octobre','Novembre','Décembre'
    ];

    const monthIndex = monthNames.indexOf(monthName);

    if (monthIndex === -1) return dateStr;

    const dateObj = new Date(parseInt(year), monthIndex, parseInt(day));

    const weekDaysFull = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];

    return `${weekDaysFull[dateObj.getDay()]} ${dateStr}`;
  };

  const addToCalendar = () => {
    if (!data?.appointmentDate || !data?.appointmentTime) return;

    const monthNames = [
      'Janvier','Février','Mars','Avril','Mai','Juin',
      'Juillet','Août','Septembre','Octobre','Novembre','Décembre'
    ];

    const [day, monthName, year] = data.appointmentDate.split(' ');

    const monthIndex = monthNames.indexOf(monthName);
    if (monthIndex === -1) return;

    const [hour, minute] = data.appointmentTime.split(':');

    const startDate = new Date(
      Number(year),
      monthIndex,
      Number(day),
      Number(hour),
      Number(minute)
    );

    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // +1h

    const format = (date) =>
      date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const event = `
  BEGIN:VCALENDAR
  VERSION:2.0
  BEGIN:VEVENT
  SUMMARY:Rendez-vous vétérinaire
  DTSTART:${format(startDate)}
  DTEND:${format(endDate)}
  DESCRIPTION:Service: ${data.service}
  END:VEVENT
  END:VCALENDAR
    `.trim();

    const blob = new Blob([event], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'RDV-Friends&Pets.ics';
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <Layout>
      <Container className="my-5 form">
        <div className="text-center mb-5">
          <AppointmentStepper currentStep={3} />

          <CheckCircleFill size={90} color="green"/>

          <h2 className="mt-3">
            Rendez-vous confirmé pour <strong>{data.animalName}</strong>!
          </h2>
        </div>

        <Card className="p-4 mb-4 carte appointment-summary">
          <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
            <h5 className="mb-0">Résumé du rendez-vous</h5>
            <Badge className="service-badge">{data.service}</Badge>
          </div>

          <Row className="summary-row g-3">
            <Col xs={12} md={4}>
              <div className="summary-section">
                <h6>Propriétaire</h6>

                <p><strong>Nom :</strong> {data.ownerName}</p>
                <p><strong>Email :</strong> {data.email}</p>
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
                <h6>Rendez-vous</h6>

                <p><strong>Date :</strong> {getFullDateLabel(data.appointmentDate)}</p>
                <p><strong>Heure :</strong> {data.appointmentTime}</p>
              </div>
            </Col>
          </Row>
        </Card>

        <Row className="g-2 mt-4">
          <Col md={3}>
            <Button className="w-100 bouton" onClick={addToCalendar}>
              <CalendarPlusFill className="me-2" />
              Calendrier
            </Button>
          </Col>

          <Col md={3}>
            <Button className="w-100 bouton" onClick={() => navigate('/appointment')}>
              <PlusCircleFill className="me-2" />
              Prendre un autre RDV
            </Button>
          </Col>

          <Col md={3}>
            <Button className="w-100 bouton" href="tel:6131234567">
              <TelephoneFill className="me-2" />
              Appeler
            </Button>
          </Col>

          <Col md={3}>
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

export default AppointmentConfirmation;