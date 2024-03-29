import React from 'react'
import { Link } from 'gatsby'
import { CTA_WHATSAPP_MENSAGENS } from '../../utils/constants'
import { getWhatsUrl } from '../../utils/index.js'
import fotoYoga from '../../images/fotoYoga.webp'
import fotoLuanna from '../../images/fotoLuanna.webp'
import fotoDrenagem from '../../images/fotoDrenagem.webp'
import fotoAlana from '../../images/fotoAlana.webp'
import fotoMaria from '../../images/fotoMaria.webp'
import fotoPreenchimento from '../../images/fotoPreenchimento.webp'
import fotoSpa from '../../images/fotoSpa.webp'

const Servicos = () => {
    return (
        <div className='bg-white py-20 sm:py-20'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:max-w-4xl '>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl' id='servicos'>Sendo gentil consigo mesma...</h2>
            <p className='mt-2 text-lg leading-8 text-gray-600'>Fique por dentro dos nossos serviços que podem mudar a sua vida!</p>
            <div className='mt-8 space-y-10 lg:mt-8 lg:space-y-10'>
                
                <article className='relative isolate flex flex-col gap-8 lg:flex-row bg-gray-300 rounded-lg shadow-xl' id='yoga'>
                <div className='relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0'>
                    <img src={fotoYoga} alt='Yoga' className='absolute inset-0 h-full w-full rounded-lg bg-gray-50 object-cover'/>
                    <div className='absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10 '></div>
                </div>
                <div>
                    <div className='group relative max-w-xl'>
                    <h3 className='ml-3 mt-4 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 lg:ml-0'>
                        <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.servicoCtaYoga)}>
                        <span className='absolute inset-0'></span>
                            Yoga Flow
                        </Link>
                    </h3>
                    <p className='ml-3 mt-4 text-sm leading-6 text-gray-600 lg:ml-0'>O Yoga Flow é uma prática dinâmica e fluída que combina movimento, respiração e consciência corporal para promover equilíbrio, força e flexibilidade. É uma modalidade de yoga que envolve uma sequência contínua de posturas fluidas, coordenadas com a respiração, criando uma dança harmoniosa entre corpo e mente.</p>
                    </div>
                    <div className='ml-3 mt-2 flex border-t border-gray-900/5 pt-6 lg:ml-0'>
                    <div className='relative flex items-center gap-x-4 -mt-2 mb-3 lg:mb-3 lg:mt-0'>
                        <img src={fotoLuanna} alt='Foto rosto Luanna' className='h-10 w-10 rounded-full bg-gray-50'/>
                        <div className='text-sm leading-6'>
                        <p className='font-semibold text-gray-900'>
                            Luanna Catarina   
                        </p>
                        <p className='text-gray-600'>Fisioterapeuta</p>
                        </div>
                    </div>
                    </div>
                </div>
                </article>

                <article className='relative isolate flex flex-col gap-8 lg:flex-row bg-gray-300 rounded-lg shadow-xl' id='drenagem-linfatica'>
                <div className='relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0'>
                    <img src={fotoDrenagem} alt='Drenagem' className='absolute inset-0 h-full w-full rounded-lg bg-gray-50 object-cover'/>
                    <div className='absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10 '></div>
                </div>
                <div>
                    <div className='group relative max-w-xl'>
                    <h3 className='ml-3 mt-4 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 lg:ml-0'>
                        <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.servicoCtaDrenagem)}>
                        <span className='absolute inset-0'></span>
                        Drenagem Linfática
                        </Link>
                    </h3>
                    <p className='ml-3 mt-4 text-sm leading-6 text-gray-600 lg:ml-0'>Além de promover a desintoxicação do organismo, a drenagem linfática ajuda a reduzir o inchaço, melhorar a circulação sanguínea, aliviar a retenção de líquidos e promover uma sensação de relaxamento e bem-estar. É uma técnica amplamente utilizada para fins terapêuticos e estéticos, contribuindo para a saúde do corpo como um todo.</p>
                    </div>
                    <div className='ml-3 mt-2 flex border-t border-gray-900/5 pt-6 lg:ml-0'>
                    <div className='relative flex items-center gap-x-4 -mt-2 mb-3 lg:mb-3 lg:mt-0'>
                        <img src={fotoAlana} alt='Alana' className='h-10 w-10 rounded-full bg-gray-50'/>
                        <div className='text-sm leading-6'>
                        <p className='font-semibold text-gray-900'>
                            Alana Cristina
                        </p>
                        <p className='text-gray-600'>Massagista</p>
                        </div>
                    </div>
                    </div>
                </div>
                </article>

                <article className='relative isolate flex flex-col gap-8 lg:flex-row bg-gray-300 rounded-lg shadow-xl' id='preenchimentos'>
                <div className='relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0'>
                    <img src={fotoPreenchimento} alt='Preenchimento' className='absolute inset-0 h-full w-full rounded-lg bg-gray-50 object-cover'/>
                    <div className='absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10 '></div>
                </div>
                <div>
                    <div className='group relative max-w-xl'>
                    <h3 className='ml-3 mt-4 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                        <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.servicoCtaPrenchimentos)}>
                        <span className='absolute inset-0'></span>
                        Preenchimento labial, olheiras, bigode, mandíbula...
                        </Link>
                    </h3>
                    <p className='ml-3 mt-4 text-sm leading-6 text-gray-600 lg:ml-0'>O preenchimento labial, o tratamento das olheiras, do bigode chinês e da mandíbula são procedimentos estéticos populares que visam melhorar a aparência facial e realçar os traços naturais. Esses procedimentos podem trazer resultados satisfatórios, promovendo uma maior autoconfiança e bem-estar estético. </p>
                    </div>
                    <div className='ml-3 mt-2 flex border-t border-gray-900/5 pt-6 lg:ml-0'>
                    <div className='relative flex items-center gap-x-4 -mt-2 mb-3 lg:mb-3 lg:mt-0'>
                        <img src={fotoMaria} alt='Foto rosto Maria' className='h-10 w-10 rounded-full bg-gray-50'/>
                        <div className='text-sm leading-6'>
                        <p className='font-semibold text-gray-900'>
                            Maria Luiza
                        </p>
                        <p className='text-gray-600'>Esteticista</p>
                        </div>
                    </div>
                    </div>
                </div>
                </article>

                <article className='relative isolate flex flex-col gap-8 lg:flex-row bg-gray-300 rounded-lg shadow-xl' id='spa-day'>
                <div className='relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0'>
                    <img src={fotoSpa} alt='Spa Day' className='absolute inset-0 h-full w-full rounded-lg bg-gray-50 object-cover'/>
                    <div className='absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10 '></div>
                </div>
                <div>
                    <div className='group relative max-w-xl'>
                    <h3 className='ml-3 mt-4 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 lg:ml-0'>
                        <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.servicoCtaSpa)}>
                        <span className='absolute inset-0'></span>
                        Spa Day
                        </Link>
                    </h3>
                    <p className='ml-3 mt-4 text-sm leading-6 text-gray-600 lg:ml-0'>O Spa Day é um dia dedicado ao relaxamento e ao cuidado pessoal, proporcionando uma experiência revigorante para o corpo e a mente. Durante esse dia especial, as pessoas têm a oportunidade de desacelerar o ritmo frenético da vida cotidiana e se entregarem a momentos de tranquilidade e bem-estar.</p>
                    </div>
                    <div className='ml-3 mt-2 flex border-t border-gray-900/5 pt-6 lg:ml-0'>
                    <div className='relative flex items-center gap-x-4 -mt-2 mb-3 lg:mb-3 lg:mt-0'>
                        <img src={fotoAlana} alt='Foto rosto Alana' className='h-10 w-10 rounded-full bg-gray-50'/>
                        <div className='text-sm leading-6'>
                        <p className='font-semibold text-gray-900'>
                            Alana Cristina
                        </p>
                        <p className='text-gray-600'>Massagista</p>
                        </div>
                    </div>
                    </div>

                </div>
                </article> 
            </div>
            </div>
        </div>
        </div>

    )
}

export default Servicos