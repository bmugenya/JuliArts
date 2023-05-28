import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { ButtonContainer } from '../assets/Button'
import { Link } from 'react-router-dom'
import { Form,Header } from '../components'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, artist, img, info, price, title, inCart } =
            value.detailProduct

          return (
            <div className='container py-5'>

              <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3'>
                  <img src={img} className='img-fluid' alt='' />
                </div>


                {/* prdoduct info */}
                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
    
        <Form>
          <Form.Title>Request call back</Form.Title>
           
           <Form.Base  method='POST'>
            <Form.Input
              placeholder='Full Name'
              name="username"
              type="text"
              
            />
            <Form.Input
            type="text"
            name="email"
            placeholder='Phone Number'
               
            />

            <Form.Submit  type='submit'>
              Make an offer
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            <Form.Link to='/'>Back</Form.Link>
          </Form.Text>
        </Form>
 
          
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
