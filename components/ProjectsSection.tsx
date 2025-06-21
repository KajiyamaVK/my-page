'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import React, { useEffect, useState } from "react"

interface Project {
    title: string
    description: string
    tech: string[]
    image: string
}

const projects: Project[] = [
    {
      title: "Plataforma E-commerce",
      description: "Aplicação Next.js full-stack com integração Stripe",
      tech: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Dashboard IA",
      description: "Dashboard React com analytics em tempo real e insights de IA",
      tech: ["React", "D3.js", "Node.js", "OpenAI"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "App Banking Mobile",
      description: "App React Native com autenticação biométrica",
      tech: ["React Native", "TypeScript", "AWS", "Cognito"],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

export function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0)
  

  useEffect(() => {
        const id = setInterval(() => {
            setCurrentProject(prev => (prev + 1) % projects.length)
        }, 5000)

        return () => {
            clearInterval(id)
        }
    }, [])

  return (
    <section id="trabalhos" className="py-24">
        <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
            Trabalhos Selecionados
        </h2>
        <p className="text-xl text-gray-300">Projetos que demonstram minha expertise</p>
        </div>
        <div className="overflow-hidden">
            <div
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
            </div>
        </div>
        <div className="flex justify-center mt-4">
            {projects.map( (project,index) => (
                <div key={project.title} onClick={() => setCurrentProject(index)} className={`cursor-pointer w-2 h-2 rounded-full mx-1 ${index === currentProject ? 'bg-[#28c3d2]' : 'bg-gray-100'}`}></div>
            ))}
        </div>
    </section>
    )
}