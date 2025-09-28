// WhatsApp utilities
export const WHATSAPP_NUMBER = '+556299647174'
export const WHATSAPP_DISPLAY = '+55 62 99647-6174'

export const openWhatsApp = (message = '') => {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodedMessage}` : ''}`
  window.open(whatsappUrl, '_blank')
}

export const getWhatsAppUrl = (message = '') => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodedMessage}` : ''}`
}