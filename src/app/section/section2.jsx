"use client"

export default function S2(){
    return(
        <section className="w-[100%] h-[20vh]  flex justify-center items-start">
            <article className="w-[100%] xl:w-[50%] p-4 h-[80%] flex flex-wrap bg-white relative translate-y-[-30%] z-30 rounded-xl shadow-2xl">
                <div className="w-[100%] h-[50%] flex items-center justify-center">
                    <div className="w-[2rem] h-[2rem] flex justify-center items-center bg1 rounded-lg text-white scale-150">1</div>
                    <div className="w-[30%] h-[.3rem] bg-zinc-200"></div>
                    <div className="w-[2rem] h-[2rem] flex justify-center items-center bg-zinc-400 rounded-lg text-white ">2</div>
                    <div className="w-[30%] h-[.3rem] bg-zinc-200"></div>
                    <div className="w-[2rem] h-[2rem] flex justify-center items-center bg-zinc-400 rounded-lg text-white ">3</div>
                </div>
                <div className="w-[100%] h-[50%] flex items-center justify-between text-[.9rem] xl:text-[1rem]">
                    <p className="w-[33%] flex justify-center">
                        انتخاب دسته
                    </p>
                    <p className="w-[33%] flex justify-center text-zinc-500">
                        انتخاب محصول
                    </p>
                    <p className="w-[33%] flex justify-center text-zinc-500">
                        ورود مشخصات و پرداخت
                    </p>
                </div>
            </article>
        </section>
    )
}