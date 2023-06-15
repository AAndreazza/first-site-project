import React from "react"
import { Link } from 'gatsby'
import { URLS } from '../../utils/constants'

const Contatos = () => {
    return (

        <div class="bg-teal-700 py-8"  id="contato">
            <div class="pt-0 indent-20 sm:mt-8 lg:mt-4 lg:flex lg:items-center ">
            <div>
                <h3 class="text-4xl font-semibold leading-6 text-gray-200">Preparada para cuidar de você?</h3>
                <p class="mt-5 text-2xl leading-8 text-gray-300">Agende um horário conosco!</p>
            </div>
                
                <div className='flex items-center ml-auto mr-20'>
                    <Link to={URLS.whatsapp} className='rounded-md bg-teal-500 px-4 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500'>ENTRAR EM CONTATO</Link>
                </div>
            </div>
        </div>

    )
}

export default Contatos