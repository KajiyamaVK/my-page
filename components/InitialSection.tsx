import { motion} from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import React from "react"

interface InitialSectionProps {
    heroY: any
}

export function InitialSection({ heroY }: InitialSectionProps) {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <motion.div className="absolute inset-0 opacity-10" style={{ y: heroY }}>
                <div className="absolute top-20 left-10 text-[#28c3d2] text-6xl font-bold opacity-20 rotate-12">CÓDIGO</div>
                <div className="absolute bottom-40 right-20 text-[#ff6b9d] text-4xl font-bold opacity-20 -rotate-12">
                    DESIGN
                </div>
                <div className="absolute top-1/2 left-1/4 text-[#28c3d2] text-3xl font-bold opacity-20 rotate-45">REACT</div>
            </motion.div>
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                    <motion.h1
                        className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                        style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
                    >
                        Criando{" "}
                        <span className="text-[#28c3d2] relative">
                            experiências digitais
                            <motion.div
                                className="absolute -bottom-2 left-0 h-2 bg-[#28c3d2] opacity-60"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                        </span>{" "}
                        de alto impacto
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-8 text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Engenheiro Full-stack Sênior especializado em React, Next.js e aplicações web escaláveis
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <Button size="lg" className="bg-[#28c3d2] hover:bg-[#28c3d2]/80 text-[#001830] font-bold">
                            Vamos Conversar
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-[#28c3d2] text-[#28c3d2] hover:bg-[#28c3d2] hover:text-[#001830]"
                        >
                            Ver Trabalhos
                        </Button>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.1, delay: 0.8 }}
                >
                    <div className="relative w-80 h-80 mx-auto hover:scale-105 transition-transform duration-300">
                        <motion.div
                            className="absolute inset-0 border-54 border-transparent border-t-[#28c3d2] border-r-[#28c3d2] rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                        <Image
                            src="/logo.jpg"
                            alt="Victor Kajiyama"
                            width={300}
                            height={300}
                            className="rounded-full filter grayscale contrast-125 brightness-110"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 