import { Button } from "@/components/ui/button"
import Image from "next/image"


export function TopNavBar() {



    return (
        <nav
            className={'text-white fixed top-0 w-full z-50 bg-[#001830]/70 backdrop-blur-md'}
        >
            <div className="mx-auto px-6 py-4 flex items-center justify-between">
                <div
                    className="text-2xl font-bold text-[#28c3d2] hover:scale-105 transition-transform duration-200"
                    style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
                >
                    <Image
                        src={'/logo.jpg'}
                        width={50}
                        height={50}
                        alt="Uma imagem representando as letras V e K "
                        className="rounded-full"
                    />
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    {["Sobre", "Serviços", "Trabalhos", "Depoimentos", "Contato"].map((item, index) => {
                        const links = ["sobre", "servicos", "trabalhos", "depoimentos", "contato"]
                        return (
                            <a
                                key={item}
                                href={`#${links[index]}`}
                                className="hover:text-[#28c3d2] transition-colors hover:-translate-y-0.5"
                            >
                                {item}
                            </a>
                        )
                    })}
                </div>
                <div className="flex items-center space-x-4">
                    <Button className="bg-[#28c3d2] hover:bg-[#28c3d2]/80 text-[#001830] font-bold">Me Contrate</Button>
                </div>
            </div>
        </nav>
    )
}