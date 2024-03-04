import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex w-ful flex-col">
      <div className="flex w-full h-10 bg-green-500"></div>
      <div className="flex w-full h-4 bg-white"></div>
      <div className="flex w-full h-14 shadow-sm bg-white md:pl-96 pl-28 items-center py-8">
        <Image
          src="https://portal.vr.com.br/portal/img/logo.png"
          alt=""
          className=" relative"
          height={50}
          width={50}
        />
        <h2 className="md:ml-8 font-semibold text-base text-green-900">
          Diagnóstico do Módulo de Segurança
        </h2>
      </div>
    </div>
  );
};
