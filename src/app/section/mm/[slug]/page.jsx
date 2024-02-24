"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import S1 from '../../section1'
import S2 from './section/section2'
import S4 from '../../section4'
import useStore from "../../store";
   
  export default function Page({ params, searchParams }) {
    
    const xt=useStore((state)=>state.xt)
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const x = await fetch('http://localhost:4001/mm'+params.slug);
            const y = await x.json();
            setData(y);
        }
        getData();
    }, []);
    
    function pp(){
        const z=params.slug
        
        xt(z);
}

    return (
        <main className="w-[100%] flex flex-wrap justify-center">
            <S1/>
            <section className='2xl:container w-[100%] flex flex-wrap justify-center'>
            <S2/>
            <section className="w-[90%] flex justify-center flex-wrap gap-3 my-10">
      {data &&
        data.map((val) => {
            let x = "/section/mmm/"+val.id
          return (
            <Link href={x}>
            <figure
            onClick={pp}
              key={val.id}
              className="w-[280px] h-[300px] border p-3 bg-white rounded-xl hover:shadow-xl transition-all duration-300"
              >
              <Image
                src={val.url}
                alt="Picture of the author"
                width={1000000}
                height={1000000}
                style={{
                    width: "100%",
                    height: "75%",
                    objectFit: "cover",
                }}
                />
              <figcaption className="w-[100%] h-[25%] text-[1rem]">
                <p className="w-[100%] h-[50%] flex justify-center items-end">{val.title}</p>
                <p className="w-[100%] h-[50%] flex justify-center items-center font-bold"><del className="text-[.8rem] text-zinc-600 mx-1">{val.price1}</del>{val.price2} تومان </p>
              </figcaption>
            </figure>
                </Link>
          );
        })}
    </section> 
    <S4/>
    </section>
        </main>
    )
  }