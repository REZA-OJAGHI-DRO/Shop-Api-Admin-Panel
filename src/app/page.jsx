"use client"

import S1 from './section/section1'
import S2 from './section/section2'
import S3 from './section/section3'
import S4 from './section/section4'
import localFont from "next/font/local";
const myFont = localFont({
  src: "./font/IRANSans.ttf",
  display: "swap",
});
export default function Home() {
  return (
    <main className="w-[100%] flex flex-wrap justify-center">
      <S1/>
      <section className='2xl:container w-[100%] flex flex-wrap justify-center'>
      <S2/>
      <S3/>
      <S4/>
      </section>
      
    </main>
  );
}
