import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../logo.png'
export default class Banner extends Component {
  render() {
    return (
      <Nav>

          <div className='header_option'>
            <span className='optionOne'>Returns</span>
            <span className='optionTwo'>& orders</span>
          </div>
    
       
      </Nav>
    )
  }
}

const Nav = styled.nav`
border-bottom: 1px solid rgb(229, 232, 235);
    box-shadow: rgb(14 14 14 / 25%) 0px 0px 8px 0px;
    height: 72px;
    position: sticky;
    top: 0px;
    z-index: 50;
    transition: top 0.5s ease 0s;
    background-color: #183153;

  .nav-link {
    color: rgb(14, 14, 14) !important;
    font-size:1.3rem;
    text-transform:capitalize;
    float:right;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`
