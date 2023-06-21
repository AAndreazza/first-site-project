import React from 'react'
//import Layout from '../components/Layout'
import { graphql } from 'gatsby'

// usar localFile para imagens nao deu certo... praticar mais!!

const Blog = ({ data, ...props }) => {
    return (
            <div>
            <h1>{data.contentfulPost.titulo}</h1>
            <img src={data.contentfulPost.imagemApresentacao.resize.src}/>
            <div dangerouslySetInnerHTML={{
                __html: data.contentfulPost.conteudo.childMarkdownRemark.html
            }} />
            <pre>{JSON.stringify(props, null, 2)}</pre>
            </div>
    )
}

export const pageQuery = graphql`
    query ($slug: String!) {
        contentfulPost(slug: {eq: $slug}, visivel: {eq: true}) {
        titulo
        conteudo {
            childMarkdownRemark {
              html
            }
          }
        imagemApresentacao {
            resize(width: 200, height: 200) {
              src
            }
          }
        }
    }
`

export default Blog