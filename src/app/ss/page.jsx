'use client'

import S1 from '../section/section1'
import S4 from '../section/section4'
import S5 from '../ss/section/section5'
export default function Ss(){
    return(
        <main className="w-[100%] flex flex-wrap justify-center">
              <S1/>
            <section className='2xl:container w-[100%] flex flex-wrap justify-center'>
            <p className="w-[100%] h-[10vh] flex justify-center items-center text-[1.5rem] font-bold"> سوالات متداول</p>
                <S5/>
                <S4/>
            </section>
        </main>
    )
}