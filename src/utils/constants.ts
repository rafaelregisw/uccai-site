export const WHATSAPP_NUMBER = '5562996476174'
export const WHATSAPP_MESSAGE = 'Olá! Vim pelo portal UCCAI e gostaria de saber mais sobre as terapias quânticas e sessões.'

export const getWhatsAppLink = (customMessage?: string) => {
  const message = encodeURIComponent(customMessage || WHATSAPP_MESSAGE)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}