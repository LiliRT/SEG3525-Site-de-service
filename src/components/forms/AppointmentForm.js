/* src/components/forms/AppointmentForm.js */
import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function AppointmentForm({ onSubmit, preselectedService, initialData }) {
  const defaultForm = {
    ownerName: "",
    email: "",
    phone: "",
    newClient: "no",

    animalName: "",
    animalAge: "",
    animalType: "",
    otherAnimalType: "",
    breed: "",
    weight: "",
    service: "",
    notes: "",
  };
  
const [formData, setFormData] = useState(() => ({
  ...defaultForm,
  ...initialData,
  service: preselectedService || initialData?.service || "",
}));

  const refs = {
    ownerName: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    newClient: useRef(null),

    animalName: useRef(null),
    animalAge: useRef(null),
    animalType: useRef(null),
    otherAnimalType: useRef(null),
    weight: useRef(null),
  };

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        service: preselectedService,
      }));
    }
  }, [preselectedService]);

  const getErrors = (data) => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\(\d{3}\)\s?|\d{3}[- ]?)\d{3}[- ]?\d{4}$/;

    if (!data.ownerName.trim()) {
      newErrors.ownerName = "Nom requis.";
    } else if (data.ownerName.trim().length < 2) {
      newErrors.ownerName = "Minimum 2 caractères.";
    }

    if (!data.email.trim()) {
      newErrors.email = "Courriel requis.";
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = "Courriel invalide. Format attendu : nom@example.com";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Téléphone requis.";
    } else if (!phoneRegex.test(data.phone)) {
      newErrors.phone = "Format attendu : 613-123-4567";
    }

    if (!data.animalName.trim()) {
      newErrors.animalName = "Nom de l'animal requis.";
    }

    if (!data.animalAge.trim()) {
      newErrors.animalAge = "Âge requis.";
    }

    if (!data.animalType) {
      newErrors.animalType = "Type d'animal requis.";
    }

    if (data.animalType === "Autre") {
      if (!data.otherAnimalType.trim()) {
        newErrors.otherAnimalType = "Veuillez préciser le type d'animal.";
      } else if (data.otherAnimalType.trim().length < 2) {
        newErrors.otherAnimalType = "Minimum 2 caractères.";
      }
    }

    if (!data.weight.trim()) {
      newErrors.weight = "Poids requis.";
    }

    if (!data.service) {
      newErrors.service = "Service requis.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      if (name === "animalType" && value !== "Autre") {
        updated.otherAnimalType = "";
      }

      return updated;
    });
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
      <h5 className="mb-3">Propriétaire</h5>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="form">Nom du propriétaire <span className="text-danger">*</span></Form.Label>
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
            <Form.Label className="form">Courriel <span className="text-danger">*</span></Form.Label>
            <Form.Control
              ref={refs.email}
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="form">Téléphone <span className="text-danger">*</span></Form.Label>
            <Form.Control
              ref={refs.phone}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="form">Nouveau client <span className="text-danger">*</span></Form.Label>

            <div className="d-flex gap-4 mt-2">
              <Form.Check
                type="radio"
                label="Oui"
                name="newClient"
                value="yes"
                checked={formData.newClient === "yes"}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Non"
                name="newClient"
                value="no"
                checked={formData.newClient === "no"}
                onChange={handleChange}
              />
            </div>
          </Form.Group>
        </Col>
      </Row>

      <h5 className="mt-4 mb-3">Animal</h5>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="form">Nom <span className="text-danger">*</span></Form.Label>
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
            <Form.Label className="form">Âge <span className="text-danger">*</span></Form.Label>
            <Form.Control
              ref={refs.animalAge}
              name="animalAge"
              placeholder="Ex: 3 ans, 6 mois"
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
            <Form.Label className="form">Type d'animal <span className="text-danger">*</span></Form.Label>

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
              name="breed"
              value={formData.breed}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="form">Poids <span className="text-danger">*</span></Form.Label>
            <Form.Control
              ref={refs.weight}
              name="weight"
              placeholder="Ex: 12 kg"
              value={formData.weight}
              onChange={handleChange}
              isInvalid={!!errors.weight}
            />
            <Form.Control.Feedback type="invalid">
              {errors.weight}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="form">Service demandé<span className="text-danger">*</span></Form.Label>

            <Form.Select
              name="service"
              value={formData.service}
              onChange={handleChange}
              isInvalid={!!errors.service}
            >
              <option value="">Choisir</option>
              <option>Examen général</option>
              <option>Toilettage</option>
              <option>Vaccination</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              {errors.service}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label className="form">Autres détails</Form.Label>

        <Form.Control
          as="textarea"
          rows={3}
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </Form.Group>

      <Button className="bouton" type="submit">
        Continuer
      </Button>
    </Form>
  );
}

export default AppointmentForm;