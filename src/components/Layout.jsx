import React from 'react'
import Header from './Header'

const Layout = ({ children }) => (
  <section id="main_container">
    <Header />
    {children}
  </section>
)

export default Layout