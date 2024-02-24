"use client";

import { useEffect, useState } from "react";

export default function S2() {
  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      const x = await fetch("https://65cfd171bdb50d5e5f5bdd2a.mockapi.io/shop");
      const y = await x.json();
      setData(y);
    }
    getData();
  }, []);
  console.log(data);
  return (
    <section className="w-[100%] lg:w-[80%] overflow-x-scroll lg:overflow-visible">
    <section className="w-[1000px] lg:w-[100%] flex flex-wrap bg-white rounded-lg shadow-lg my-5 p-4">
      <p className="w-[100%] h-[10vh] px-4 flex items-center gap-4">
        راهنمای رنگ :
        <span className="w-[4rem] text-[.8rem] h-[2rem] border rounded-lg flex justify-center items-center bg-green-400">
          موفق
        </span>
        <span className="w-[6rem] text-[.8rem] h-[2rem] border rounded-lg flex justify-center items-center bg-orange-400">
          منتظر تایید
        </span>
        <span className="w-[8rem] text-[.8rem] h-[2rem] border rounded-lg flex justify-center items-center bg-red-500">
          ناموفق/ رد شده
        </span>
      </p>
      <ul className="w-[100%]">
        <li className="w-[100%] h-[7vh]">
          <ul className="w-[100%] h-[100%] flex">
            <li className="text-[1rem] w-[5%] flex justify-center items-center border">
              #
            </li>
            <li className="text-[1rem] w-[20%] flex justify-center items-center border font-bold">
              ش. پیگری
            </li>
            <li className="text-[1rem] w-[20%] flex justify-center items-center border font-bold">
              مبلغ(تومان)
            </li>
            <li className="text-[1rem] w-[15%] flex justify-center items-center border font-bold">
              کد ارجاع
            </li>
            <li className="text-[1rem] w-[20%] flex justify-center items-center border font-bold">
              درگاه
            </li>
            <li className="text-[1rem] w-[20%] flex justify-center items-center border font-bold">
              زمان
            </li>
          </ul>
        </li>
        <li className="w-[100%]">
          {data &&
            data.map((val) => {
                return(
              <ul key={val.id} className="w-[100%] h-[7vh] flex">
                <li className="text-[1rem] w-[5%] flex justify-center items-center border text[.8rem]">
                  {val.id}
                </li>
                <li className="text-[1rem] w-[20%] flex justify-center items-center border text[.8rem]">
                  {val.p1}
                </li>
                <li className="text-[1rem] w-[20%] flex justify-center items-center border text[.8rem]">
                    <p className="w-[8rem] text-[.8rem] h-[2rem] border rounded-lg flex justify-center items-center  bg-orange-400">
                        {val.p10}
                        </p>
                
                </li>
                <li className="text-[1rem] w-[15%] flex justify-center items-center border text[.8rem]">
                  12345678
                </li>
                <li className="text-[1rem] w-[20%] flex justify-center items-center border text[.8rem]">
                  کارت به کارت
                </li>
                <li className="text-[1rem] w-[20%] flex justify-center items-center border text[.8rem]">
                  {val.p3}
                  {val.p4}
                </li>
              </ul>
              )
            })}
        </li>
      </ul>
    </section>
    </section>
  );
}
