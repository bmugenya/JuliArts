import React from 'react';
import  Home  from './pages/home'
import { Feature, OptForm } from './components'
import Footer from './containers/footer'
import { GlobalStyles } from './assets/styles'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from "./components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./components/Details";
import './app.css'

export default function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </>

  ) 
}