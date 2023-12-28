import React from 'react'
import {Footer, Header } from './components'
import {About, Certificates, Form_banner , News, Products, Team} from './components/Main';
import './scss/main.scss';


const App = () => {
  return (
    <React.Fragment>
        <Header/>
        {/* <Hero/> */}
        <About/>
        <Certificates/>
        <Products/>
        <Form_banner/>
        <Team/>
        <News/>
        <Footer/>
    </React.Fragment>
  )
}

export default App