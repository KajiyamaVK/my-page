import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import React from "react"

interface Testimonial {
    name: string
    role: string
    content: string
    rating: number
}

interface TestimonialsSectionProps {
    testimonials: Testimonial[]
    currentTestimonial: number
    setCurrentTestimonial: (index: number) => void
}

export function TestimonialsSection({ testimonials, currentTestimonial, setCurrentTestimonial }: TestimonialsSectionProps) {
    return (
        <section id="depoimentos" className="py-24 bg-[#001830]/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
                        Amor dos Clientes
                    </h2>
                    <p className="text-xl text-gray-300">O que as pessoas dizem sobre trabalhar comigo</p>
                </motion.div>
                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonial}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
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
                        </motion.div>
                    </AnimatePresence>
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? "bg-[#28c3d2]" : "bg-gray-600"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
} 