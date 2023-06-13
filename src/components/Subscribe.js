import { React, useState } from 'react'
import Header from '../containers/header'
import { Form } from '../components'
import { toast } from 'react-toastify';

export default function Subscribe() {

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
         <Form className="mt-4" style={{ padding: 0 }} >
      <Form.Image src='/images/misc/office.jpg' alt='' />
       
       
        <Form.Base style={{ padding: '60px 68px 40px' }} onSubmit={handleSubmit} method='POST'>
         <Form.Text>Unlock Your Personalized Art Experience</Form.Text>
          <Form.Input
            placeholder='Email address'
         value={email}
         onChange={({ target }) => setEmail(target.value)} />
          <Form.Submit type='submit'>
          Get Started
          </Form.Submit>
        </Form.Base>
      </Form>




    
  )
}
