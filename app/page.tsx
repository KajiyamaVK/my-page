
import { WhatsappFloatingButton } from "@/components/WhatsappFloatingButton"
import { AboutSection } from "@/components/AboutSection"
import { ServicesSection } from "@/components/ServicesSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { InitialSection } from "@/components/InitialSection"

export default function Portfolio() {

 return (
    <div className="min-h-screen bg-[#001830] text-white overflow-x-hidden w-full">
      <div className="px-10 max-w-7xl mx-auto">

      <WhatsappFloatingButton />
      <InitialSection/>
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
      </div>
    </div>
  )
}
