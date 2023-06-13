import React from 'react';
import  Home  from './pages/home'
import { Feature, OptForm, Nav } from './components'
import Footer from './containers/footer'
import { GlobalStyles } from './assets/styles'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from "./components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./components/Details";
import Shop from "./components/shop";
import Training from "./components/Training";
import About from "./components/About";
import Contact from "./components/Contact";
import './app.css'

export default function App() {

  return (
    <>
     <BrowserRouter>
     <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/gallery" element={<Shop />} />
          <Route path="/details" element={<Details />} />
            <Route path="/training" element={<Training />} />
              <Route path="/about" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </>

  ) 
}