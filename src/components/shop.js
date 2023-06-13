import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ProductWrapper } from '../assets/product';
import { storeProducts } from '../utils/data';
export default class Shop extends Component {
  state = {
    products: storeProducts,
    filter: '',
    filterType: 'category',
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  handleFilterTypeChange = (event) => {
    this.setState({ filterType: event.target.value, filter: '' });
  };

  render() {
    const { filter, filterType, products } = this.state;
    const filteredProducts = products.filter((product) =>
      product[filterType].toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className='container mt-4'>
        <Title name='our' title='products' />
        <div className='row'>
          <div className='col-md-3'>
            {/* Filter section */}
            <div className='form-group'>
              <label>Filter by:</label>
              <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    Category
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
         <div className='form-check'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='filterType'
                  value='category'
                  checked={filterType === 'category'}
                  onChange={this.handleFilterTypeChange}
                />
                <label className='form-check-label'>Painting</label>
              </div>
              <div className='form-check'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='filterType'
                  value='subject'
                  checked={filterType === 'subject'}
                  onChange={this.handleFilterTypeChange}
                />
                <label className='form-check-label'>Printmaking</label>
              </div>
              <div className='form-check'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='filterType'
                  value='orientation'
                  checked={filterType === 'orientation'}
                  onChange={this.handleFilterTypeChange}
                />
                <label className='form-check-label'>Sculpture</label>
              </div> 

              <div className='form-check'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='filterType'
                  value='subject'
                  checked={filterType === 'subject'}
                  onChange={this.handleFilterTypeChange}
                />
                <label className='form-check-label'>Drawing</label>
              </div>
              <div className='form-check'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='filterType'
                  value='orientation'
                  checked={filterType === 'orientation'}
                  onChange={this.handleFilterTypeChange}
                />
                <label className='form-check-label'>Digital Art</label>
              </div> 

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    Subject
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
           <div className='form-check'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='filterType'
                  value='category'
                  checked={filterType === 'category'}
                  onChange={this.handleFilterTypeChange}
                />
                <label className='form-check-label'>Flowers and plants</label>
              </div>
              <div className='form-check'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='filterType'
                  value='subject'
                  checked={filterType === 'subject'}
                  onChange={this.handleFilterTypeChange}
                />
                <label className='form-check-label'>People and Potraits</label>
              </div>
              <div className='form-check'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='filterType'
                  value='orientation'
                  checked={filterType === 'orientation'}
                  onChange={this.handleFilterTypeChange}
                />
                <label className='form-check-label'>Architecure and cityscapes</label>
              </div> 

              <div className='form-check'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='filterType'
                  value='subject'
                  checked={filterType === 'subject'}
                  onChange={this.handleFilterTypeChange}
                />
                <label className='form-check-label'>Landscape, sea and the sky</label>
              </div>
              <div className='form-check'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='filterType'
                  value='orientation'
                  checked={filterType === 'orientation'}
                  onChange={this.handleFilterTypeChange}
                />
                <label className='form-check-label'>Abimaks and Birds</label>
              </div> 

              </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Orientation
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          <div className='form-check'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='filterType'
                  value='category'
                  checked={filterType === 'category'}
                  onChange={this.handleFilterTypeChange}
                />
                <label className='form-check-label'>Potrait</label>
              </div>
              <div className='form-check'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='filterType'
                  value='subject'
                  checked={filterType === 'subject'}
                  onChange={this.handleFilterTypeChange}
                />
                <label className='form-check-label'>Landscape</label>
              </div>
              <div className='form-check'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='filterType'
                  value='orientation'
                  checked={filterType === 'orientation'}
                  onChange={this.handleFilterTypeChange}
                />
                <label className='form-check-label'>Square</label>
              </div> </div>
    </div>
  </div>
</div>
        
            </div>
          </div>
          <div className='col-md-9'>
            {/* Gallery section */}
            <div className='row'>
              <ProductConsumer>
                {(value) => {
                  return filteredProducts.map((product) => {
                    return (
                      <div key={product.id} className='col-md-4'>
                        <Product product={product} />
                      </div>
                    );
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
