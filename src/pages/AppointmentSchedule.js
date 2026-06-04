// src/pages/AppointmentSchedule.js
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import AppointmentStepper from '../components/forms/AppointmentStepper';

function AppointmentSchedule() {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state;
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const monthNames = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ];

  const weekDays = [
    'Lun',
    'Mar',
    'Mer',
    'Jeu',
    'Ven',
    'Sam',
    'Dim'
  ];

  const slots = [
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00'
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const isCurrentMonth =
    month === currentMonth &&
    year === currentYear;

  const firstDay = new Date(year, month, 1);
  let startDay = firstDay.getDay() - 1;

  if (startDay < 0) {
    startDay = 6;
  }

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = [];

  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const previousMonth = () => {
    if (isCurrentMonth) {
      return;
    }

    setCurrentDate(
      new Date(year, month - 1, 1)
    );
    setSelectedDay(null);
    setSelectedTime('');
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(year, month + 1, 1)
    );
    setSelectedDay(null);
    setSelectedTime('');
  };

  const handleNext = () => {
    navigate('/appointment-confirmation', {
      state: {
        ...formData,
        appointmentDate: `${selectedDay} ${monthNames[month]} ${year}`,
        appointmentTime: selectedTime
      }
    });
  };

  return (
    <Layout>
      <Container className="my-5">
        <h2 className="mb-3">
          Choisir un horaire
        </h2>

        <AppointmentStepper currentStep={2} />

        <Card className="p-3 mb-4">
          <h5>Informations du rendez-vous</h5>

          <p>
            <strong>Service :</strong> {formData.service}
          </p>

          <p>
            <strong>Animal :</strong>{' '}
            {formData.animalType === 'Autre' ? formData.otherAnimalType : formData.animalType}
          </p>

          <p>
            <strong>Race :</strong> {formData.breed}
          </p>
        </Card>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <Button variant="outline-secondary" onClick={previousMonth} disabled={isCurrentMonth}>
            <ChevronLeft />
          </Button>

          <h4 className="mb-0"> {monthNames[month]} {year} </h4>

          <Button variant="outline-secondary" onClick={nextMonth}>
            <ChevronRight />
          </Button>
        </div>

        <div className="calendar-grid">
          {weekDays.map(day => (
            <div key={day} className="calendar-header">
              {day}
            </div>
          ))}

          {calendarDays.map((day, index) => {
            const cellDate = day ? new Date(year, month, day): null;
            const isPastDay = cellDate && cellDate < today;

            return (
              <div key={index} className="calendar-cell">
                {day && (
                  <Button
                    className="calendar-button"
                    variant={
                      selectedDay === day
                        ? 'primary'
                        : 'outline-primary'
                    }
                    disabled={isPastDay}
                    onClick={() => {
                      setSelectedDay(day);
                      setSelectedTime('');
                    }}
                  >
                    {day}
                  </Button>
                )}
              </div>
            );
          })}
        </div>

        {selectedDay && (
          <>
            <h5 className="mt-5">
              Disponibilités du {selectedDay}
            </h5>

            <Row className="g-2 mt-2">
              {slots.map(slot => (
                <Col md={2} xs={6} key={slot}>
                  <Button
                    className="w-100"
                    variant={
                      selectedTime === slot
                        ? 'success'
                        : 'outline-success'
                    }
                    onClick={() =>
                      setSelectedTime(slot)
                    }
                  >
                    {slot}
                  </Button>
                </Col>
              ))}
            </Row>
          </>
        )}

        {selectedDay && selectedTime && (
          <Card className="mt-4 p-3">
            <strong>
              Rendez-vous sélectionné
            </strong>

            <p className="mb-0 mt-2">
              {selectedDay} {monthNames[month]} {year}
              {' à '}
              {selectedTime}
            </p>
          </Card>
        )}

        <div className="d-flex justify-content-between mt-5">
          <Button variant="secondary" onClick={ () => navigate('/appointment', { state: formData }) }>
            Retour
          </Button>

          <Button
            disabled={
              !selectedDay ||
              !selectedTime
            }
            onClick={handleNext}
          >
            Suivant
          </Button>
        </div>
      </Container>
    </Layout>
  );
}

export default AppointmentSchedule;