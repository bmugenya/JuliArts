import { React, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../containers/header'
import { Form } from '../components'
export default function Contact() {
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const isInvalid = password === '' || emailAddress === ''
   const handleSignIn = (event) => {}

    return (

      <Form className='mt-4'>
        <Form.Title>Contact</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Base onSubmit={handleSignIn} method='POST'>
          <Form.Input
            placeholder='Email address'
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Form.Input
            type='password'
            placeholder='Password'
            autoComplete='off'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Submit disabled={isInvalid} type='submit'>
           Contact
          </Form.Submit>
        </Form.Base>
        <Form.Text>
          New to Narutopia? <Form.Link to='/signup'>Signup Now</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by google reCapture
        </Form.TextSmall>
      </Form>

  )
  
}
