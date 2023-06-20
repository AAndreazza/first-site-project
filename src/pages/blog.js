import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const Blog = ({ data, ...props }) => {
    return (
            <Layout>
            <h1>{data.contentfulPost.titulo}</h1>
            <div dangerouslySetInnerHTML={{
                __html: data.contentfulPost.conteudo.childMarkdownRemark.html
            }} />
            <pre>{JSON.stringify(props, null, 2)}</pre>
            </Layout>
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
        }
    }
`

export default Blog