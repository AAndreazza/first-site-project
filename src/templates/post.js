import React from 'react'
import { graphql, Link } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import LayoutPost from "../components/LayoutPost"
import { CTA_WHATSAPP_MENSAGENS } from '../../utils/constants'
import { getWhatsUrl } from '../../utils/index.js'

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
    [BLOCKS.PARAGRAPH]: (node, children) => <p className='mt-8 text-xl text-gray-800 leading-8'>{children}</p>,

    /* 
    Para imagens no meio do texto:
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
      <pre>
        {JSON.stringify(node, null, 2)}
      </pre>
    ) */

  }
}

const Post = ({ data }) => {

  const conteudoRichJson = JSON.parse(data.contentfulPost.conteudoRich.raw)

    return (
            <div>
            <LayoutPost>
            <div class="bg-white px-6 py-32 lg:px-8">
            <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
              <h1 class="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">{data.contentfulPost.titulo}</h1>
              <div class="mt-6 text-xl leading-8">{documentToReactComponents(conteudoRichJson, options)}</div>
            </div>
            <div className='bg-teal-700 py-8 rounded-lg mt-20' id='contatoPost'>
            <div className='px-4 text-center sm:px-4 sm:text-center'>
              <h3 className='text-4xl font-semibold leading-9 text-gray-200'>Preparada para cuidar de você?</h3>
              <p className='mt-3 text-2xl leading-6 text-gray-300'>Agende um horário conosco!</p>
            </div>
            <div className='mt-8 flex justify-center'>
              <Link
                to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.atendimentoCta)}
                className='rounded-md bg-teal-500 px-4 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500'
              >
                ENTRAR EM CONTATO
              </Link>
            </div>
          </div>
          </div>

      </LayoutPost> 
      </div> 
    )
}

export const pageQuery = graphql`
    query ($slug: String!) {
        contentfulPost(slug: {eq: $slug}, visivel: {eq: true}) {
        titulo
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

export default Post