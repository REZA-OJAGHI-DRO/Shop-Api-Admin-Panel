"use client"
import { useEffect, useState } from "react";


import S1 from '../section/section1'
import S4 from '../section/section4'
import S2 from './section/section2'


export default function BuyingRules(){
    return(
        <main className="w-[100%] flex flex-wrap justify-center">
            <S1/>
            <section className='2xl:container w-[100%] flex flex-wrap justify-center'>
            <p className="w-[100%] h-[10vh] flex justify-center items-center text-[1.5rem] font-bold"> تماس با ما</p>
               <S2/>
                <S4/>
            </section>
        </main>
    )
}
