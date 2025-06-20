import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import React from "react"

interface Project {
    title: string
    description: string
    tech: string[]
    image: string
}

interface ProjectsSectionProps {
    projects: Project[]
    currentProject: number
    setCurrentProject: (index: number) => void
}

export function ProjectsSection({ projects, currentProject, setCurrentProject }: ProjectsSectionProps) {
    return (
        <section id="trabalhos" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
                        Trabalhos Selecionados
                    </h2>
                    <p className="text-xl text-gray-300">Projetos que demonstram minha expertise</p>
                </motion.div>
                <div className="relative">
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentProject * 100}%)` }}
                        >
                            {projects.map((project, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <Card className="bg-[#001830] border-[#28c3d2]/20 overflow-hidden">
                                        <div className="relative">
                                            <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                width={500}
                                                height={300}
                                                className="w-full h-64 object-cover"
                                            />
                                            <div className="absolute top-4 left-4 bg-white px-2 py-1 text-[#001830] text-sm font-bold transform -rotate-2">
                                                DESTAQUE
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <h3 className="text-2xl font-bold mb-3 text-[#28c3d2]">{project.title}</h3>
                                            <p className="text-gray-300 mb-4">{project.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tech.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="bg-[#28c3d2]/20 text-[#28c3d2] px-3 py-1 rounded-full text-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <Button
                                                variant="outline"
                                                className="border-[#28c3d2] text-[#28c3d2] hover:bg-[#28c3d2] hover:text-[#001830]"
                                            >
                                                Ver Caso de Estudo <ExternalLink className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    <button
                        onClick={() => setCurrentProject(Math.max(0, currentProject - 1))}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#28c3d2] text-[#001830] p-2 rounded-full disabled:opacity-50"
                        disabled={currentProject === 0}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={() => setCurrentProject(Math.min(projects.length - 1, currentProject + 1))}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#28c3d2] text-[#001830] p-2 rounded-full disabled:opacity-50"
                        disabled={currentProject === projects.length - 1}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </section>
    )
} 