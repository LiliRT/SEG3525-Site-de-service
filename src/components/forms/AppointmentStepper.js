/* src/components/forms/AppointmentForm.js */
import React from 'react';

function AppointmentStepper({ currentStep }) {
  const steps = [
    'Informations',
    'Horaire',
    'Confirmation'
  ];

  return (
    <div className="appointment-stepper">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const active = stepNumber <= currentStep;

        return (
          <React.Fragment key={step}>
            <div className="step-item">
              <div
                className={`step-circle ${
                  active ? 'active' : ''
                }`}
              >
                {stepNumber}
              </div>

              <span>{step}</span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`step-line ${
                  stepNumber < currentStep
                    ? 'active'
                    : ''
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default AppointmentStepper;