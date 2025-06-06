import React, { useState } from 'react';
import Stepper, { Step } from './Stepper.jsx';
import emailjs from 'emailjs-com';
import '../styles/contact.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Proszę podaj swoje imię.';
    if (!formData.email.trim()) return 'Proszę podaj swój email.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return 'Podaj poprawny adres email.';
    if (!formData.message.trim()) return 'Proszę wpisz wiadomość.';
    return '';
  };

  const handleFinalStep = () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    setLoading(true);

    emailjs.send('service_wmg695b', 'template_iy70b8b', formData, 'SjC7TurRL55zbcRgX')
      .then(
        () => {
          alert('Email wysłany pomyślnie! Dziękujemy za kontakt.');
          setLoading(false);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Coś poszło nie tak, spróbuj ponownie.');
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-container">
      <Stepper
        initialStep={1}
        onStepChange={() => setError('')}
        onFinalStepCompleted={handleFinalStep}
        backButtonText="Poprzedni"
        nextButtonText={loading ? "Wysyłanie..." : "Dalej"}
        disableNext={loading}
      >
        <Step>
          <h2>Witamy!</h2>
          <p>Zapraszamy do kontaktu przez nasz prosty formularz krokowy.</p>
          <p>Kliknij „Dalej”, aby rozpocząć.</p>
        </Step>

        <Step>
          <h2>Podaj swoje dane</h2>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Twoje imię"
            className="input-field"
            disabled={loading}
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Twój email"
            type="email"
            className="input-field"
            disabled={loading}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Twoja wiadomość"
            rows={5}
            className="textarea-field"
            disabled={loading}
          />
          {error && <p className="error-message">{error}</p>}
        </Step>

        <Step>
          <h2>Gotowe! Dziękujemy</h2>
        </Step>
      </Stepper>
    </div>
  );
};

export default ContactMe;
