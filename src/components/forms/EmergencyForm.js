/* src/components/forms/EmergencyForm.js */
import React, { useState, useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function EmergencyForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    animalName: "",
    animalAge: "",
    animalType: "",
    otherAnimalType: "",
    breed: "",
    urgencyLevel: "Faible",
    symptoms: "",
  });

  const refs = {
    ownerName: useRef(null),
    phone: useRef(null),
    animalName: useRef(null),
    animalAge: useRef(null),
    animalType: useRef(null),
    otherAnimalType: useRef(null),
    symptoms: useRef(null),
  };

  const [errors, setErrors] = useState({});

  const getErrors = (data) => {
    const newErrors = {};

    const addError = (field, message) => {
      newErrors[field] = message;
    };

    const phoneRegex = /^(\(\d{3}\)\s?|\d{3}[- ]?)\d{3}[- ]?\d{4}$/.test(data.phone);

    if (!data.ownerName.trim()) {
      addError("ownerName", "Nom requis");
    } else if (!/^[a-zA-ZÀ-ÿ\s'-]{2,}$/.test(data.ownerName)) {
      addError("ownerName", "Minimum 2 caractères.");
    }

    if (!data.phone.trim()) {
      addError("phone", "Téléphone est requis.");
    } else if (!phoneRegex) {
      addError("phone", "Format attendu : 613-123-4567");
    }

    if (!data.animalName.trim()) {
      addError("animalName", "Nom de l'animal requis.");
    }

    // AGE
    if (!data.animalAge.trim()) {
      addError("animalAge", "Âge est requis.");
    }

    if (!data.animalType) {
      addError("animalType", "Type d'animal requis.");
    }

    if (data.animalType === "Autre") {
      if (!data.otherAnimalType.trim()) {
        addError("otherAnimalType", "Veuillez préciser le type d'animal.");
      } else if (data.otherAnimalType.trim().length < 2) {
        addError("otherAnimalType", "Minimum 2 caractères.");
      }
    }

    if (data.breed && data.breed.trim().length < 2) {
      addError("breed", "Poids requis.");
    }

    if (!data.symptoms.trim()) {
      addError("symptoms", "Veuillez décrire les symptômes.");
    } else if (data.symptoms.trim().length < 10) {
      addError(
        "symptoms",
        "Veuillez donner une description plus détaillée (min 10 caractères)."
      );
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 10) value = value.slice(0, 10);

    if (value.length >= 6) {
      value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`;
    } else if (value.length >= 3) {
      value = `${value.slice(0, 3)}-${value.slice(3)}`;
    }

    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = getErrors(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    } else {
      scrollToFirstError(newErrors);
    }
  };

  const scrollToFirstError = (errors) => {
    const firstErrorField = Object.keys(errors)[0];

    if (firstErrorField && refs[firstErrorField]?.current) {
      refs[firstErrorField].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      refs[firstErrorField].current.focus();
    }
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="form">
              Nom du propriétaire <span className="text-danger">*</span>
            </Form.Label>

            <Form.Control
              ref={refs.ownerName}
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              isInvalid={!!errors.ownerName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.ownerName}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="form">
              Téléphone <span className="text-danger">*</span>
            </Form.Label>

            <Form.Control
              ref={refs.phone}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="form">
              Nom de l'animal <span className="text-danger">*</span>
            </Form.Label>

            <Form.Control
              ref={refs.animalName}
              name="animalName"
              value={formData.animalName}
              onChange={handleChange}
              isInvalid={!!errors.animalName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.animalName}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="form">
              Âge de l'animal <span className="text-danger">*</span>
            </Form.Label>

            <Form.Control
              ref={refs.animalAge}
              name="animalAge"
              placeholder="Ex: 3 ans, 6 mois..."
              value={formData.animalAge}
              onChange={handleChange}
              isInvalid={!!errors.animalAge}
            />
            <Form.Control.Feedback type="invalid">
              {errors.animalAge}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="form">
              Type d'animal <span className="text-danger">*</span>
            </Form.Label>

            <Form.Select
              ref={refs.animalType}
              name="animalType"
              value={formData.animalType}
              onChange={handleChange}
              isInvalid={!!errors.animalType}
            >
              <option value="">Choisir</option>
              <option>Chien</option>
              <option>Chat</option>
              <option>Lapin</option>
              <option>Oiseau</option>
              <option value="Autre">Autre</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              {errors.animalType}
            </Form.Control.Feedback>

            {formData.animalType === "Autre" && (
              <Form.Control
                ref={refs.otherAnimalType}
                className="mt-2"
                name="otherAnimalType"
                placeholder="Précisez..."
                value={formData.otherAnimalType}
                onChange={handleChange}
                isInvalid={!!errors.otherAnimalType}
              />
            )}

            {errors.otherAnimalType && (
              <div className="text-danger small mt-1">
                {errors.otherAnimalType}
              </div>
            )}
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="form">Race</Form.Label>

            <Form.Control
              ref={refs.breed}
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              isInvalid={!!errors.breed}
            />
            <Form.Control.Feedback type="invalid">
              {errors.breed}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label className="form">Niveau d'urgence</Form.Label>

        <div className="radio d-flex gap-4 mt-2">
          {["Faible", "Moyen", "Élevé", "Critique"].map((level) => (
            <Form.Check
              key={level}
              id={`urgency-${level}`}
              type="radio"
              label={level}
              name="urgencyLevel"
              value={level}
              checked={formData.urgencyLevel === level}
              onChange={handleChange}
            />
          ))}
        </div>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label className="form">
          Description des symptômes <span className="text-danger">*</span>
        </Form.Label>

        <Form.Control
          as="textarea"
          rows={4}
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          isInvalid={!!errors.symptoms}
        />

        <Form.Control.Feedback type="invalid">
          {errors.symptoms}
        </Form.Control.Feedback>
      </Form.Group>

      <Button className="bouton-urgence" type="submit">
        Soumettre la demande d'urgence
      </Button>
    </Form>
  );
}

export default EmergencyForm;