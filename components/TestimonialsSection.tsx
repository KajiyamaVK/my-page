'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import React, { useState } from "react"

const testimonials = [
    {
      name: "Sarah Chen",
      role: "Gerente de Produto na TechCorp",
      content:
        "Victor entregou um trabalho excepcional em nossa plataforma. Sua atenção aos detalhes e expertise técnica superaram nossas expectativas.",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      role: "CTO na StartupXYZ",
      content:
        "Trabalhar com Victor foi transformador. Ele transformou nossas ideias em uma aplicação linda e performática.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      role: "Design Lead na CreativeStudio",
      content:
        "A habilidade do Victor de conectar design e desenvolvimento é notável. Ele trouxe nossa visão à vida perfeitamente.",
      rating: 5,
    },
]

export function TestimonialsSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    return (
        <section id="depoimentos" className="py-24 bg-[#001830]/50">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
                        Amor dos Clientes
                    </h2>
                    <p className="text-xl text-gray-300">O que as pessoas dizem sobre trabalhar comigo</p>
                </div>
                <div className="relative max-w-4xl mx-auto">
                    <div className="text-center transition-all duration-500">
                        <Card className="bg-[#001830] border-[#28c3d2]/20 p-8">
                            <CardContent>
                                <div className="flex justify-center mb-4">
                                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-[#28c3d2] text-[#28c3d2]" />
                                    ))}
                                </div>
                                <blockquote className="text-xl mb-6 text-gray-300">
                                    &quot;{testimonials[currentTestimonial].content}&quot;
                                </blockquote>
                                <div>
                                    <div className="font-bold text-[#28c3d2]">{testimonials[currentTestimonial].name}</div>
                                    <div className="text-gray-400">{testimonials[currentTestimonial].role}</div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-[#28c3d2]' : 'bg-gray-400'} transition-colors`}
                                aria-label={`Ir para depoimento ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
        </section>
    )
}