import React, { useState } from 'react';
import faqsData from '../utils/faqs.json'
import { Accordion, OptForm } from '../components'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { url } from "../utils/url.js"



export function FaqsContainer() {



  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

    </Accordion>
  )
}
