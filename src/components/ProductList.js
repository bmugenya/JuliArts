import  React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../utils/data';
import styled from 'styled-components';
import { ProductConsumer } from '../context'
import { ProductWrapper } from '../assets/product'

export default class ProductList extends Component {
  state = {
    products: storeProducts,
  }

  render() {
      console.log(storeProducts)
  
    return (
          <div className='container'>
            <Title name='our' title='products' />
            <div className='row'>
              <div className='row_posters'>
              <ProductConsumer>
                {(value) => {
                  return value?.products.map((product) => {
                    return <Product key={product.id} product={product} />
                  })
                }}
              </ProductConsumer>
              </div>
            </div>
          </div>
    )
  }
}

