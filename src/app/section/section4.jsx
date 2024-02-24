"use client"

import Link from "next/link"

export default function S4(){
    return(
        <section className="w-[100%] h-[10vh] flex justify-center items-center border-t-2">
            <ul className="w-[100%] lg:w-[50%] h-[100%] flex justify-center items-center gap-10 text-zinc-500">
                <li>
                    <Link href=''>
                    همکاری با ما
                    </Link>
                </li>
                <li>
                    <Link href=''>
                    شعب و نمایندگی ها
                    </Link>
                </li>
                <li>
                    <Link href=''>
                    درباره فروشگاه
                    </Link>
                </li>
            </ul>
        </section>
    )
}