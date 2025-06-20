"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Star,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
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

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "AWS",
    "Kubernetes",
    "Docker",
    "Algolia",
    "PostgreSQL",
    "MongoDB",
  ]

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá Victor! Vi seu portfólio e gostaria de conversar sobre um projeto.")
    window.open(`https://wa.me/5511988269888?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-[#001830] text-white overflow-x-hidden">
      {/* WhatsApp Floating Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <MessageCircle className="h-6 w-6" />
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.button>

      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#001830]/95 backdrop-blur-md" : "bg-transparent"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold text-[#28c3d2]"
            whileHover={{ scale: 1.1 }}
            style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
          >
            <Image
              src={'/logo.jpg'}
              width={50}
              height={50}
              alt="Uma imagem representando as letras V e K "
              className="rounded-full" />


          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {["Sobre", "Serviços", "Trabalhos", "Depoimentos", "Contato"].map((item, index) => {
              const links = ["sobre", "servicos", "trabalhos", "depoimentos", "contato"]
              return (
                <motion.a
                  key={item}
                  href={`#${links[index]}`}
                  className="hover:text-[#28c3d2] transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              )
            })}
          </div>

          <Button className="bg-[#28c3d2] hover:bg-[#28c3d2]/80 text-[#001830] font-bold">Me Contrate</Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-10" style={{ y: heroY }}>
          <div className="absolute top-20 left-10 text-[#28c3d2] text-6xl font-bold opacity-20 rotate-12">CÓDIGO</div>
          <div className="absolute bottom-40 right-20 text-[#ff6b9d] text-4xl font-bold opacity-20 -rotate-12">
            DESIGN
          </div>
          <div className="absolute top-1/2 left-1/4 text-[#28c3d2] text-3xl font-bold opacity-20 rotate-45">REACT</div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center mt-20 md:mt-0">
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

      {/* About Section */}
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

      {/* Services Section */}
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

      {/* Projects Section */}
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

      {/* Testimonials Section */}
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
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? "bg-[#28c3d2]" : "bg-gray-600"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Ribbon */}
      <section className="py-12 bg-[#28c3d2]/10">
        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-8 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-[#28c3d2] hover:text-white transition-colors cursor-pointer"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold mb-8" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
              Pronto para transformar{" "}
              <span className="text-[#28c3d2] relative">
                ideias em código?
                <motion.div
                  className="absolute -bottom-4 left-0 h-4 bg-[#28c3d2] opacity-60 transform -skew-x-12"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </span>
            </h2>
            <Button size="lg" className="bg-[#28c3d2] hover:bg-[#28c3d2]/80 text-[#001830] font-bold text-xl px-8 py-4">
              Agendar uma Conversa
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-[#001830]/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
              Vamos Trabalhar Juntos
            </h2>
            <p className="text-xl text-gray-300">Pronto para começar seu próximo projeto?</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#001830] border-[#28c3d2]/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-[#28c3d2]">Enviar Mensagem</h3>
                  <form className="space-y-4">
                    <div>
                      <Input
                        placeholder="Seu Nome"
                        className="bg-[#001830] border-[#28c3d2]/20 focus:border-[#28c3d2] text-white"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Seu Email"
                        className="bg-[#001830] border-[#28c3d2]/20 focus:border-[#28c3d2] text-white"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Sua Mensagem"
                        rows={5}
                        className="bg-[#001830] border-[#28c3d2]/20 focus:border-[#28c3d2] text-white"
                      />
                    </div>
                    <Button className="w-full bg-[#28c3d2] hover:bg-[#28c3d2]/80 text-[#001830] font-bold">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#28c3d2]">Entre em Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-[#28c3d2]" />
                    <span>victor.kajiyama@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-[#28c3d2]" />
                    <span>+55 (11) 98826-9888</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-[#28c3d2]" />
                    <span>São Paulo, SP</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 text-[#28c3d2]">Me Siga</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "https://github.com/kajiyamaVK" },
                    { icon: Linkedin, href: "https://linkedin.com/in/victor-kajiyama" },
                    { icon: Twitter, href: "#" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="bg-[#28c3d2]/20 p-3 rounded-full hover:bg-[#28c3d2] hover:text-[#001830] transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#001830] border-t border-[#28c3d2]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div
              className="text-2xl font-bold text-[#28c3d2] mb-4 md:mb-0"
              style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
            >
              VK
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              {["Sobre", "Serviços", "Trabalhos", "Contato"].map((item, index) => {
                const links = ["sobre", "servicos", "trabalhos", "contato"]
                return (
                  <a
                    key={item}
                    href={`#${links[index]}`}
                    className="text-gray-400 hover:text-[#28c3d2] transition-colors"
                  >
                    {item}
                  </a>
                )
              })}
            </div>
            <div className="text-gray-400 text-sm">© 2024 Victor Kajiyama. Todos os direitos reservados.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
