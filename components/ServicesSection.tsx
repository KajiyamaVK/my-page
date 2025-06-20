import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import React from "react"

export function ServicesSection() {
    return (
        <section id="servicos" className="py-24 bg-[#001830]/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
                        O Que Eu Faço
                    </h2>
                    <p className="text-xl text-gray-300">Serviços especializados para dar vida às suas ideias</p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Desenvolvimento Web",
                            description: "Aplicações full-stack com React, Next.js e tecnologias backend modernas",
                            icon: "💻",
                        },
                        {
                            title: "UI/UX Design",
                            description: "Design centrado no usuário que converte visitantes em clientes",
                            icon: "🎨",
                        },
                        {
                            title: "Performance & SEO",
                            description: "Sites ultra-rápidos otimizados para motores de busca e usuários",
                            icon: "⚡",
                        },
                        {
                            title: "Automação DevOps",
                            description: "Pipelines CI/CD, infraestrutura em nuvem e automação de deploy",
                            icon: "🚀",
                        },
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 40px rgba(40, 195, 210, 0.3)",
                            }}
                        >
                            <Card className="bg-[#001830] border-[#28c3d2]/20 hover:border-[#28c3d2] transition-all duration-300 h-full">
                                <CardContent className="p-6">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-bold mb-3 text-[#28c3d2]">{service.title}</h3>
                                    <p className="text-gray-300">{service.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 