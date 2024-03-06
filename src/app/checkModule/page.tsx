import { Header } from "@/components/header/Header";
import { MainContent } from "@/components/main/Main";
import { Resumo } from "@/components/main/Resumo";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex flex-col w-full h-screen bg-zinc-50">
      <Header />
      <main className="flex flex-col gap-6 py-10 md:px-[20%] px-28 w-full">
        <MainContent />
      </main>
      <footer className="flex flex-col items-center sticky top-[100vh] bg-white shadow text-center lg:text-left">
        <div className="container px-10 py-6">
          <div className="flex flex-row justify-between text-green-900">
            <img
              src="https://assets.vr.com.br/portalrh/vrpat/img/logo.png"
              alt="Banco Sofisa"
              height={70}
              width={70}
            />

            <div className="flex flex-col gap-3">
              <hr className=" bg-green-700" />
              <p className="text-green-900 font-semibold text-sm">
              © 2024 VR Benefícios - Todos os direitos reservados
              - N° PAT: 130385510
              - CNPJ: 02.535.864/0001-33
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
