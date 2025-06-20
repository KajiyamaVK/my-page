import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

export function AboutSection() {
    return (
        <section id="sobre" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    <div className="relative">
                        <motion.div
                            className="absolute -top-8 -left-8 text-[#28c3d2] text-4xl font-bold opacity-30 rotate-12"
                            style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
                        >
                            SOBRE
                        </motion.div>
                        <Image
                            src="/logo.jpg"
                            alt="Victor trabalhando"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
                            Oi, eu sou o Victor
                        </h2>
                        <p className="text-lg mb-6 text-gray-300">
                            Sou um engenheiro full-stack apaixonado com mais de 8 anos de experiência construindo aplicações web
                            escaláveis. Adoro transformar problemas complexos em soluções simples e bonitas que os usuários
                            realmente gostam de usar.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {[
                                { skill: "React/Next.js", years: "6+ anos" },
                                { skill: "TypeScript", years: "5+ anos" },
                                { skill: "AWS/DevOps", years: "4+ anos" },
                                { skill: "UI/UX Design", years: "3+ anos" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-[#001830]/50 p-4 rounded-lg border border-[#28c3d2]/20"
                                    whileHover={{ scale: 1.05, borderColor: "#28c3d2" }}
                                >
                                    <div className="font-bold text-[#28c3d2]">{item.skill}</div>
                                    <div className="text-sm text-gray-400">{item.years}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 