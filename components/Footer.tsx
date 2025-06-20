import React from "react"

export function Footer() {
    return (
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
    )
} 