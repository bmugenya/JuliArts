import React, { useState } from 'react';
import faqsData from '../utils/faqs.json'
import { Accordion, OptForm } from '../components'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function FaqsContainer() {

     const [email, setEmail] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the email using an API endpoint on your server
      await axios.post('http://localhost:5000/api/subscribe', { email });

      // Clear the email input field
      setEmail('');

      // Display a success message to the user
      toast('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      // Display an error message to the user
      toast('An error occurred while sending the email. Please try again.');
    }
  };

  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm>
        <OptForm.Break />
          <OptForm.Base onSubmit={handleSubmit}>
          
          <OptForm.Input type="email"
          placeholder="Enter your email address"
          value={email}
         onChange={({ target }) => setEmail(target.value)} />
          <OptForm.Button type="submit">Get Started</OptForm.Button>
             </OptForm.Base >
      </OptForm>
    </Accordion>
  )
}
