"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import S1 from '../section/section1'
import S4 from '../section/section4'

export default function Mmmm(){
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const x = await fetch('https://65cfd171bdb50d5e5f5bdd2a.mockapi.io/shop');
            const y = await x.json();
            setData(y);
        }
        getData();
    }, []);
    return(
        <main className="w-[100%] flex flex-wrap justify-center">
            <S1/>
            <p className="w-[100%] h-[10vh] flex justify-center items-center text-[1.5rem] font-bold">اطلاعات خرید شما :</p>
            <section  className=" w-[100%] flex justify-center">
                <article className="w-[100%] xl:w-[50%] flex flex-wrap gap-5 my-5">
                    {data&&data.map((val)=>{
                        return(
                            <div className="w-[100%] flex flex-wrap gap-5">
                                <p className="w-[100%] h-[10vh] flex justify-center items-center rounded-lg text-white bg-[#09ba86]">خرید شما با موفقیت انجام شد</p>
                                <div className="w-[100%] h-[20vh] bg-white rounded-lg shadow-xl flex flex-wrap">
                                    <p className="w-[50%] h-[50%] text-[1rem] flex items-center px-5">شماره پیگیری: {val.p1}</p>
                                    <p className="w-[50%] h-[50%] text-[1rem] flex items-center px-5">شماره سفارش: {val.id}</p>
                                    <p className="w-[50%] h-[50%] text-[1rem] flex items-center px-5">مبلغ: {val.p10} تومان</p>
                                    <p className="w-[50%] h-[50%] text-[1rem] flex items-center px-5">تاریخ: {val.p3} {val.p4}</p>
                                </div>
                            </div>
                        )
                    })
                    }
                </article>
            </section>
            <S4/>
        </main>
    )
}