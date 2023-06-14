import React from "react"
import { Link } from 'gatsby'

const Contatos = () => {
    return (

        <div class="bg-teal-700 py-8">
            <div class="pt-8 indent-20 sm:mt-8 lg:mt-4 lg:flex lg:items-center ">
            <div>
                <h3 class="text-4xl font-semibold leading-6 text-gray-200">Preparada para cuidar de você?</h3>
                <p class="mt-5 text-2xl leading-8 text-gray-300">Agende um horário conosco!</p>
            </div>
                
                <div className='flex items-center ml-auto mr-20'>
                    <Link to='#' className='rounded-md bg-teal-500 px-8 py-5 text-2xl font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500'>Agende agora!</Link>
                </div>
            </div>
        </div>

    )
}

export default Contatos