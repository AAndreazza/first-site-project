import React, { useState } from 'react'
import { Popover } from '@headlessui/react'
import { Link } from 'gatsby'
import { CTA_WHATSAPP_MENSAGENS } from '../../utils/constants'
import { getWhatsUrl } from '../../utils/index.js'
import Logo from '../../images/logo.png'
import FotoApresentacao from '../../images/fotoApresentacao.webp'


const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className='bg-white'>
        <header className='absolute inset-x-0 top-0 z-50'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
            <div className='flex lg:flex-1'>
                <Link to='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Spazio Vitta</span>
                <img className='h-12 w-12 rounded-full' src={Logo} alt='logo'/>
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
                <Link to='#proposito' className='text-base font-semibold leading-6 text-gray-900'>Propósito</Link>
                <Link to='#time' className='text-base font-semibold leading-6 text-gray-900'>Nosso time</Link>
                <Popover className="relative">
                    <Popover.Button className='text-base font-semibold leading-6 text-gray-900'>Serviços ⌵</Popover.Button>
                    <Popover.Panel className="absolute z-12">
                        <div className="bg-teal-700 rounded-lg mt-2 p-4 w-60 h-34">
                        <a href="/#yoga" className='block text-base font-semibold leading-6 text-white my-2 hover:bg-teal-500'>Yoga Flow</a>
                        <a href="/#drenagem-linfatica" className='block text-base font-semibold leading-6 text-white my-2 hover:bg-teal-500'>Drenagem Linfática</a>
                        <a href="/#preenchimentos" className='block text-base font-semibold leading-6 text-white my-2 hover:bg-teal-500'>Preenchimentos</a>
                        <a href="/#spa-day" className='block text-base font-semibold leading-6 text-white my-2 hover:bg-teal-500'>Spa Day</a>
                        </div>
                    </Popover.Panel>
                    </Popover>
                <Link to='blog' className='text-base font-semibold leading-6 text-gray-900'>Blog</Link>
                <Link to='#contato' className='text-base font-semibold leading-6 text-gray-900'>Contatos</Link>
            </div>
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.atendimentoCta)} className='text-sm font-semibold leading-6 text-gray-900'>Whatsapp<span aria-hidden='true'>&rarr;</span></Link>
            </div>
            </nav>
            
        {/* Barra lateral - opções e fechar */}
        <div className={`lg:hidden ${isSidebarOpen ? '' : 'hidden'}`} role='dialog' aria-modal='true'>
            <div className='fixed inset-0 z-50'></div>
            <div className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                <div className='flex items-center justify-between'>
                <Link to='/' className='-m-1.5 p-1.5'>
                    <button onClick={() => setIsSidebarOpen(false)}>
                    <span className='sr-only'>Spazio Vitta</span>
                    <img className='h-12 w-12 rounded-full' src={Logo} alt='logo'/>
                    </button>
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
                    <Link to='#proposito' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Propósito</button></Link>
                    <Link to='#time' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Nosso Time</button></Link>
                    <Link to='#servicos' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Serviços</button></Link>
                    <Link to='blog' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Blog</button></Link>
                    <Link to='#contato' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Contatos</button></Link>
                    </div>
                    <div className='py-6'>
                    <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.atendimentoCta)} className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Whatsapp</Link>
                    </div>
                </div>
                </div>
            </div>
            </div> 
      

        </header>
        <div className='relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-2'>
            <div className='absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96' aria-hidden='true'></div>
            <div className='mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8' id='proposito'>
                <h1 className='max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto'>Seja gentil com seu corpo e sua mente!</h1>
                <div className='mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
                <p className='text-lg leading-8 text-gray-600'>Quando você é gentil com seu corpo e mente, abre espaço para o crescimento pessoal e a felicidade, aumenta sua autoestima e melhora sua relação consigo mesmo e com os outros.</p>
                <p className='text-lg leading-8 text-gray-600'>Permita-se falhar, aprender e evoluir!</p>
                <div className='mt-10 flex items-center gap-x-6'>
                <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.atendimentoCta)} className='rounded-md bg-teal-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Saiba mais</Link>
                </div>
                </div>
                <img src={FotoApresentacao} alt='foto de apresentacao' className='mt-10 pt-25 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36'/>
            </div>
            </div>
            <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32'></div>
        </div>
        </div>

    )
}

export default Header


