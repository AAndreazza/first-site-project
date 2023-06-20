import React from 'react'
import './styles.css'
import Layout from '../components/Layout'
import Team from '../components/Team'
import Servicos from '../components/Servicos'
import Contatos from '../components/Contatos'

const Index = () => {
    return (
            <Layout>
                <Team />
                <Servicos />
                <Contatos />
            </Layout>
    )
}

export default Index