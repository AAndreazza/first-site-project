import React from 'react'
import './styles.css'
import Header from '../components/header'
import Footer from '../components/Footer'
import Team from '../components/Team'
import Servicos from '../components/Servicos'

const Index = () => {
    return (
        <div> 
            <Header />
            <Team />
            <Servicos />
            <Footer />
        </div>
    )
}

export default Index