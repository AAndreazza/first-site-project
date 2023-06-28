import { URLS } from './constants'

export const getWhatsUrl = (text, url) => encodeURI(`${url || URLS.whatsapp}${ url ? `?text=${text}` : text}`)
export const openWhatsUrl = (text) => window.open(getWhatsUrl(text), '_blank')