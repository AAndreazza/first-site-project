import React from 'react'
import { Link } from 'gatsby'
import { CTA_WHATSAPP_MENSAGENS } from '../../utils/constants'
import { getWhatsUrl } from '../../utils/index.js'

const Contatos = () => {
  return (
    <div className='bg-teal-700 py-8' id='contato'>
      <div className='px-4 text-center sm:px-4 sm:text-center'>
        <h3 className='text-4xl font-semibold leading-9 text-gray-200'>Preparada para cuidar de você?</h3>
        <p className='mt-2 text-2xl leading-6 text-gray-300'>Agende um horário conosco!</p>
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
  )
}

export default Contatos