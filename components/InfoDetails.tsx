import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import React from "react"

export function InfoDetails() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold mb-6 text-[#28c3d2]">Entre em Contato</h3>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <Mail className="h-6 w-6 text-[#28c3d2]" />
                        <span>victor.kajiyama@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Phone className="h-6 w-6 text-[#28c3d2]" />
                        <span>+55 (11) 99999-9999</span>
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
                        { icon: Github, href: "#" },
                        { icon: Linkedin, href: "#" },
                        { icon: Twitter, href: "#" },
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            className="bg-[#28c3d2]/20 p-3 rounded-full hover:bg-[#28c3d2] hover:text-[#001830] transition-colors hover:scale-105"
                        >
                            <social.icon className="h-6 w-6" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}