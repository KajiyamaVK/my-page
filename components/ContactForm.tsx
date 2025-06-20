import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React from "react"

export function ContactForm() {
    return (
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
    )
} 