import React from 'react'
import fotoMaria from '../../images/fotoMaria.webp'
import fotoLuanna from '../../images/fotoLuanna.webp'
import fotoAlana from '../../images/fotoAlana.webp'

const Team = () => {
    return (
        <div className='bg-gray-50'>
        <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>
            <div className='mx-auto max-w-2xl'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl' id='time'>Conheça nosso time</h2>
            <p className='mt-4 text-lg leading-8 text-gray-600'>Somos um trio de mulheres apaixonadas pelo que fazemos.</p>
            </div>
            <div role='list' className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            <div>
                <img className='mx-auto h-56 w-56 rounded-full' src={fotoLuanna} alt=''/>
                <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900'>Luanna Catarina</h3>
                <p className='text-sm leading-6 text-gray-600'>Fisioterapeuta</p>
            </div>
            <div>
                <img className='mx-auto h-56 w-56 rounded-full' src={fotoMaria} alt=''/>
                <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900'>Maria Luiza</h3>
                <p className='text-sm leading-6 text-gray-600'>Esteticista</p>
            </div>
            <div>
                <img className='mx-auto h-56 w-56 rounded-full' src={fotoAlana} alt=''/>
                <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900'>Alana Cristina</h3>
                <p className='text-sm leading-6 text-gray-600'>Massagista</p>
            </div>
            </div>
        </div>
        </div>

    )
}

export default Team