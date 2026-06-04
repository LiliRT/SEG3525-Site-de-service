/* src/components/forms/EmergencyForm.js */
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function EmergencyForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    ownerName: '',
    phone: '',
    animalName: '',
    animalType: '',
    breed: '',
    urgencyLevel: '',
    symptoms: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
              <option>Oiseau</option>
              <option>Autre</option>
            </Form.Select>
          </Form.Group>
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
        <Form.Label>Niveau d'urgence</Form.Label>
        <Form.Select
          required
          name="urgencyLevel"
          value={formData.urgencyLevel}
          onChange={handleChange}
        >
          <option value="">Choisir</option>
          <option>Faible</option>
          <option>Moyen</option>
          <option>Élevé</option>
          <option>Critique</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Description des symptômes</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          required
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="danger" type="submit">
        Soumettre la demande d'urgence
      </Button>
    </Form>
  );
}

export default EmergencyForm;