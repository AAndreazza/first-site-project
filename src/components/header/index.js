import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <nav className='flex items-center justify-between flex-wrap bg-teal-700 p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <svg className='fill-current h-8 w-8 mr-2' width='54' height='54' viewBox='0 0 54 54' xmlns='http://www.w3.org/2000/svg'><path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z'/></svg>
            <Link to='/'><span className='font-semibold text-2xl tracking-tight'>Spazio Vitta</span></Link> 
        </div>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
            <div className='text-base lg:flex-grow'>
            <Link to='#sobre' className='block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4'>
                Sobre
            </Link>
            <Link to='#servicos' className='block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4'>
                Serviços
            </Link>
            <Link to='#contatos' className='block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white'>
                Contato
            </Link>
            </div>
            <div>
            <Link to='#whatsapp' className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-700 hover:bg-teal-100 mt-4 lg:mt-0'>Entre em contato</Link>
            </div>
        </div>
        </nav>
    )
}

export default Header