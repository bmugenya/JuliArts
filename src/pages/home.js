import React, { useState,useEffect } from 'react';
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
import Reviews from "../components/Reviews";
import '../assets/banner.css'
import { storeProducts } from '../utils/data';
import { url } from "../utils/url.js"

import jumboData from '../utils/jumbo.json'

export default function Home() {

   const [email, setEmail] = useState('');
   const [banner, setBanner] = useState([])


   console.log(Math.floor(Math.random() * jumboData.length))

  useEffect(() => {
    async function fetchData() {
      setBanner(
        jumboData[
          Math.floor(Math.random() * jumboData.length)
        ]
      )
      return jumboData
    }
    fetchData()
  }, [])


console.log(banner)

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
 <header className='banner'>
    <img className='banner-image' src={banner?.image}/>
      <div className='banner_contents'>

        <h1 className='banner_title'>{banner?.title}</h1>


        <h1 className='banner_description'>{banner?.subTitle}</h1>
      </div>
      <div className='banner--fadeBottom' />
    </header>

    
    <Reviews />

          <Header>
        <Feature>
          <Feature.Title>JuliArts</Feature.Title>
          <Feature.SubTitle>Unlock Your Personalized Art Experience</Feature.SubTitle>
        </Feature>
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


      </Header>

 

  
          <ProductList />
      <FaqsContainer /> 
  
    </>
  )
}