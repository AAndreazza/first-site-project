import React from 'react'
import './styles.css'
import Layout from '../components/Layout'
import Team from '../components/Team'
import Servicos from '../components/Servicos'
import Contatos from '../components/Contatos'
import Seo from '../components/Seo'

const Index = () => {
    return (
            <Layout>
                <Seo title='Spazzio Mavie' description='Este é um site de uma estética e foi feito com o intuito de aprendizagem.'/>
                <Team />
                <Servicos />
                <Contatos />
            </Layout>
    )
}

export default Index