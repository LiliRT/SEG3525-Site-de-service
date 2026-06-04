/* src/components/forms/AppointmentForm.js */
import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function AppointmentForm({ onSubmit, preselectedService, initialData }) {
  const [formData, setFormData] = useState(
    initialData || {
      ownerName: '',
      phone: '',
      animalName: '',
      animalType: '',
      otherAnimalType: '',
      breed: '',
      service: preselectedService || '',
      notes: ''
    }
  );

  useEffect(() => {
    if (preselectedService) {
        setFormData(prev => ({
        ...prev,
        service: preselectedService
        }));
    }
    }, [preselectedService]);

    const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => {
      const updated = {
        ...prev,
        [name]: value
      };

      if (
        name === 'animalType' &&
        value !== 'Autre'
      ) {
        updated.otherAnimalType = '';
      }

      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Nom du propriétaire</Form.Label>
            <Form.Control
              required
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Nom de l'animal</Form.Label>
        <Form.Control
          required
          name="animalName"
          value={formData.animalName}
          onChange={handleChange}
        />
      </Form.Group>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Type d'animal</Form.Label>
            <Form.Select
              required
              name="animalType"
              value={formData.animalType}
              onChange={handleChange}
            >
              <option value="">Choisir</option>
              <option>Chien</option>
              <option>Chat</option>
              <option>Lapin</option>
              <option>Autre</option>
            </Form.Select>
          </Form.Group>
          {formData.animalType === 'Autre' && (
            <Form.Group className="mb-3">
              <Form.Label>
                Précisez le type d'animal
              </Form.Label>

              <Form.Control
                required
                name="otherAnimalType"
                value={formData.otherAnimalType}
                onChange={handleChange}
                placeholder="Ex. Furet, Perroquet, Hamster..."
              />
            </Form.Group>
          )}
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Race</Form.Label>
            <Form.Control
              name="breed"
              value={formData.breed}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Service</Form.Label>
        <Form.Select
          required
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Choisir</option>
          <option>Examen général</option>
          <option>Toilettage</option>
          <option>Vaccination</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Informations supplémentaires</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </Form.Group>

      <Button type="submit">
        Continuer
      </Button>
    </Form>
  );
}

export default AppointmentForm;