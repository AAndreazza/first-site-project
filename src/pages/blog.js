import React from 'react'
//import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// mudar blog de lugar, colocar em templates e criar uma nova pagina aqui.
// usar localFile para imagens nao deu certo... praticar mais!!

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <strong className='text-gray-900 font-bold'>{text}</strong>
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <h1 className='mt-16 mb-12 text-6xl font-bold'>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className='mt-14 mb-8 text-4xl font-bold'>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h2 className='mt-10 mb-6 text-2xl font-bold'>{children}</h2>,
    [BLOCKS.HEADING_4]: (node, children) => <h2 className='mt-8 mb-4 text-xl font-bold'>{children}</h2>,
    [BLOCKS.HEADING_5]: (node, children) => <h2 className='mt-6 mb-2 text-lg font-bold'>{children}</h2>,
    [BLOCKS.HEADING_6]: (node, children) => <h2 className='mt-4 text-sm font-bold'>{children}</h2>,
    [BLOCKS.PARAGRAPH]: (node, children) => <p className='mt-8 text-xl text-gray-700 leading-8'>{children}</p>,

    // VER AQUI IMEDIATAMENTE
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
      <pre>
        {JSON.stringify(node.data.target.sys, null, 2)}
        {JSON.stringify(children, null, 2)}
      </pre>
    )
  }
}

const Blog = ({ data, ...props }) => {

  const conteudoRichJson = JSON.parse(data.contentfulPost.conteudoRich.raw)

    return (
            <div>
            <h1>{data.contentfulPost.titulo}</h1>
            <img alt=' ' src={data.contentfulPost.imagemApresentacao.resize.src}/>
            <div 
              dangerouslySetInnerHTML={{
                __html: data.contentfulPost.conteudo.childMarkdownRemark.html
              }} 
            />
            <div>
              {documentToReactComponents(conteudoRichJson, options)}
            </div>
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
        conteudoRich {
          raw
        }
      }
    }
`

export default Blog