import React from 'react'
import './styles.css'
import Header from '../components/header'
import Footer from '../components/Footer'
import Team from '../components/Team'
import Servicos from '../components/Servicos'
import Contatos from '../components/Contatos'

const Index = () => {
    return (
        <div> 
            <Header />
            <Team />
            <Servicos />
            <Contatos />
            <Footer />
        </div>
    )
}

export default Index