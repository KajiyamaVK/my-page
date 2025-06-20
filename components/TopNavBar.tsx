import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import React from "react"
import ReactCountryFlag from 'react-country-flag';
import { usePathname, useRouter } from 'next/navigation';

interface TopNavBarProps {
    isScrolled: boolean
}

const locales = [
    { code: 'en-us', label: 'English', country: 'US' },
    { code: 'pt-br', label: 'Português', country: 'BR' },
];

export function TopNavBar({ isScrolled }: TopNavBarProps) {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = pathname.split('/')[1];

    const handleLocaleChange = (locale: string) => {
        const segments = pathname.split('/');
        segments[1] = locale;
        router.push(segments.join('/'));
    };

    return (
        <motion.nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#001830]/95 backdrop-blur-md" : "bg-transparent"}`}
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
                        className="rounded-full"
                    />
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
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        {locales.map((locale) => (
                            <button
                                key={locale.code}
                                onClick={() => handleLocaleChange(locale.code)}
                                className={`rounded-full p-1 border-2 transition-colors ${currentLocale === locale.code ? 'border-[#28c3d2] bg-[#001830]' : 'border-transparent bg-transparent'} hover:border-[#28c3d2]`}
                                aria-label={locale.label}
                            >
                                <ReactCountryFlag
                                    countryCode={locale.country}
                                    svg
                                    style={{ width: '2em', height: '2em', borderRadius: '50%' }}
                                    title={locale.label}
                                />
                            </button>
                        ))}
                    </div>
                    <Button className="bg-[#28c3d2] hover:bg-[#28c3d2]/80 text-[#001830] font-bold">Me Contrate</Button>
                </div>
            </div>
        </motion.nav>
    )
} 