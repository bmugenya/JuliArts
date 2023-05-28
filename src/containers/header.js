import React from 'react'
import { Header } from '../components'


import logo from '../logo.png'
export default function HeaderContainer({ children }) {
  return (
    <Header>

      {children}
    </Header>
  )
}
