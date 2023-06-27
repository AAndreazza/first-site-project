import React, { useState } from 'react'
import { Link } from 'gatsby'
import { URLS } from '../../utils/constants'
import { StaticImage } from "gatsby-plugin-image"

const HeaderSimples = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return ( 
        <header className='absolute inset-x-0 top-0 z-50'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
            <div className='flex lg:flex-1'>
                <Link to='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Spazio Vitta</span>
                <StaticImage className='h-12 w-12 rounded-full' src="../../images/logo.png" alt='logo'/>
                </Link>
            </div>

            {/* Barra lateral - abrir */}
            <div className='flex lg:hidden'>
            <button 
                type='button' 
                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                onClick={() => setIsSidebarOpen(true)}
            >
            <span className='sr-only'>Menu</span>
            <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
            </svg>
            </button>
            </div>

            <div className='hidden lg:flex lg:gap-x-12'>
                <Link to='/' className='text-base font-semibold leading-6 text-gray-900'>Propósito</Link>
                <Link to='/' className='text-base font-semibold leading-6 text-gray-900'>Nosso time</Link>
                <Link to='/' className='text-base font-semibold leading-6 text-gray-900'>Serviços</Link>
                <Link to='' className='text-base font-semibold leading-6 text-gray-900'>Blog</Link>
                <Link to='/' className='text-base font-semibold leading-6 text-gray-900'>Contatos</Link>
            </div>
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                <Link to={URLS.whatsapp} className='text-sm font-semibold leading-6 text-gray-900'>Whatsapp<span aria-hidden='true'>&rarr;</span></Link>
            </div>
            </nav>

        {/* Barra lateral - opções e fechar */}
        <div className={`lg:hidden ${isSidebarOpen ? '' : 'hidden'}`} role='dialog' aria-modal='true'>
            <div className='fixed inset-0 z-50'></div>
            <div className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                <div className='flex items-center justify-between'>
                <Link to='#' className='-m-1.5 p-1.5' >
                    <span className='sr-only'>Spazio Vitta</span>
                    <StaticImage className='h-12 w-12 rounded-full' src='../../images/logo.png' alt='logo'/>
                </Link>
                <button 
                    type='button' 
                    className='-m-2.5 rounded-md p-2.5 text-gray-700'
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <span className='sr-only'>Close menu</span>
                    <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                </button>
                </div>
                <div className='mt-6 flow-root'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                    <div className='space-y-2 py-6'>
                    <Link to='/' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Propósito</button></Link>
                    <Link to='/' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Nosso Time</button></Link>
                    <Link to='/' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Serviços</button></Link>
                    <Link to='' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Blog</button></Link>
                    <Link to='/' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Contatos</button></Link>
                    </div>
                    <div className='py-6'>
                    <Link to={URLS.whatsapp} className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Whatsapp</Link>
                    </div>
                </div>
                </div>
            </div>
            </div> 

        </header>
        

    )
}

export default HeaderSimples


