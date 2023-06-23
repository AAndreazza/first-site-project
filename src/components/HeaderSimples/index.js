import React from 'react'
import { Link } from 'gatsby'
import { URLS } from '../../utils/constants'
import { StaticImage } from "gatsby-plugin-image"

const HeaderBlog = () => {
    return (
        <div className='bg-gray-50'>
        <header className='absolute inset-x-0 top-0 z-50'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
            <div className='flex lg:flex-1'>
                <Link to='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Spazio Vitta</span>
                <StaticImage className='h-12 w-12 rounded-full' src="../../images/logo.png" alt='logo'/>
                </Link>
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

        </header>
        <div className='relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-2'>
            <div className='absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96' aria-hidden='true'></div>
            <div className='mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8'>
 
            </div>
            <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32'></div>
        </div>
        </div>

    )
}

export default HeaderBlog


