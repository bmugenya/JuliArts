import React, { useState } from 'react';
import axios from 'axios';
import { FaqsContainer } from '../containers/faq'
import { Feature, OptForm } from '../components'
import Jumbotron from '../containers/jumbotron'
import Footer from   '../containers/footer'
import Header from '../containers/header'
import { GlobalStyles } from '../assets/styles'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductList from "../components/ProductList";

import { url } from "../utils/url.js"

export default function Home() {

   const [email, setEmail] = useState('');



  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the email using an API endpoint on your server
      const response = await axios.post(`${url}/api/subscribe`, { email });
      setEmail('');
      toast(response.data.message);
    } catch (error) {

      toast('An error occurred while sending the email. Please try again.');
    }
  };

  return (
    <>
       <Header>
        <Feature>
          <Feature.Title>JuliArts</Feature.Title>
          <Feature.SubTitle>Unlock Your Personalized Art Experience</Feature.SubTitle>
        </Feature>
        <OptForm>
          <OptForm.Text>
            Join the Waitlist for Custom Drawings Tailored to You
          </OptForm.Text>
          <OptForm.Break />
          <OptForm.Base onSubmit={handleSubmit}>

 
          
          <OptForm.Input type="email"
          placeholder="Enter your email address"
          value={email}
         onChange={({ target }) => setEmail(target.value)} />
          <OptForm.Button type="submit">Get Started</OptForm.Button>
             </OptForm.Base >
          <OptForm.Break />
          <OptForm.Text> </OptForm.Text>
        </OptForm>
      </Header>
      <Jumbotron /> 
          <ProductList />
      <FaqsContainer /> 
  
    </>
  )
}