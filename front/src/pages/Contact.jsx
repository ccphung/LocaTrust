import React from 'react'
import styled from 'styled-components'

const ContactContainer = styled.div`
  margin: 4rem auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 500px;
  max-width: 1024px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactTitle = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: #520058;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    border-color: #520058;
    outline: none;
  }
`;

const ContactTextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  &:focus {
    border-color: #520058;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #520058;
  color: #fff;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background-color: #73008c;
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé');
  };

  return (
    <ContactContainer>
      <ContactTitle>Nous contacter</ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <ContactInput type="text" name="name" placeholder="Nom" required />
        <ContactInput type="email" name="email" placeholder="Email" required />
        <ContactTextArea name="message" placeholder="Votre message" required />
        <SubmitButton type="submit">Envoyer un message</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};


export default Contact