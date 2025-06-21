'use client'

import {MessageCircle} from "lucide-react"

export function WhatsappFloatingButton(){
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá Victor! Vi seu portfólio e gostaria de conversar sobre um projeto.")
    window.open(`https://wa.me/5511988269888?text=${message}`, "_blank")
  }

  return(
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
    >
      <MessageCircle className="h-6 w-6" />
      <span
        className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"
      />
    </button>
  )
}