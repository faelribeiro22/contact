import React from 'react';
import './contact.css';

const Contact = () => {
  const val = localStorage.getItem('keyItemName');
  console.log('aquiiiiii', window.testeInfo);
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <h2>Testeeeeeeeeeeee</h2>
      <p>
        Esta é uma simples página de contato.
      </p>
    </div>
  );
}

export default Contact;