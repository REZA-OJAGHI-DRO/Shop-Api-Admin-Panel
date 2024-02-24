"use client";
import { useContext, useEffect, useRef, useState } from "react";
import React from "react";
import Image from "next/image";
import "../../../globals.css";
import Link from "next/link";
import S1 from "../../section1";
import S2 from "./section/section2";
import S4 from "../../section4";
import useStore from "../../store";

const myContext = React.createContext();
const myContext2 = React.createContext();
export default function Page({ params, searchParams }) {
  const [data, setData] = useState([]);
  const p = useStore((state) => state.p);
  useEffect(() => {
    async function getData() {
      const x = await fetch("http://localhost:4001/mm" + p + "/" + params.slug);
      const y = await x.json();
      setData(y);
    }
    getData();
  }, []);
  const x1 = useStore((state) => state.x);
  const inc = useStore((state) => state.inc);
  const dec = useStore((state) => state.dec);
  const mod = useRef();
  const c1 = useRef();
  const c2 = useRef();
  function _mod() {
    if(
      c1.current.value.length<11
    ){
      c1.current.style.border='2px solid red'
    }else{
      mod.current.children[3].style.display = "flex";
      c1.current.style.border='2px solid gray'
    }
  }

  function inp1(e) {
    let val = e.target.value;
    if (
      val.search(/[a-z]/) >= 0 ||
     val.search(/[ا-ی]/) >= 0 ||
     val.search(/[1-9]/) ==0
    ) {
      e.target.value = val.slice(0, length - 1);
    }
  }
  function inp2(e) {
    let val = e.target.value;
    if (
   val.search('@')==0
    ) {
      e.target.value = val.slice(0, length - 1);
    }
  }
const c3 =useRef()
const c4 =useRef()
const c5 =useRef()
const c6 =useRef()

function send(){
        const tel = mod.current.children[1].children[0].children[0].children[1].value;
        const email = mod.current.children[1].children[0].children[1].children[1].value;
        const p1 = mod.current.children[3].children[0].children[2].children[0].children[1].value;
        const p2 = mod.current.children[3].children[0].children[2].children[1].children[1].value;
        const p3 = mod.current.children[3].children[0].children[2].children[2].children[1].children[0].value;
        const p4 = mod.current.children[3].children[0].children[2].children[2].children[1].children[1].value;
        const p5 = mod.current.children[3].children[0].children[2].children[3].children[1].value;
        const p6 = mod.current.children[3].children[0].children[2].children[4].children[1].value;
        const p7= c3.current.innerHTML
        const p8= c4.current.innerHTML
        const p9= c5.current.innerHTML
        const p10= c6.current.innerHTML
        if(
          p1 == '' ||
          p2 == '' ||
          p3 == '' ||
          p4 == '' ||
          p5 == '' ||
          p6 == '' 
        ){
          alert('اطلاعات را تکمیل کنید')
        }else{
        const newTask = {
            tel: tel,
            email: email,
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4,
            p5: p5,
            p6: p6,
            p7: p7,
            p8: p8,
            p9: p9,
            p10: p10,
        };

        fetch('https://65cfd171bdb50d5e5f5bdd2a.mockapi.io/shop', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(task => {
            alert('ارسال موفقیت آمیز بود')
        }).catch(error => {
            alert('ارسال نشد')
        })
     }
  }
  return (
    <main className="w-[100%] flex flex-wrap justify-center">
      <S1 />
      <section
        ref={mod}
        className="2xl:container w-[100%] flex flex-wrap justify-center"
      >
        <S2 />
        <section className="w-[90%] h-[200vh] xl:h-[100vh] flex flex-wrap justify-center gap-3 py-10">
          <article className="w-[100%] xl:w-[40%] h-[50%] xl:h-[100%] bg-white rounded-xl shadow-xl">
            <div className="w-[100%] h-[15%] px-5 flex flex-wrap justify-center content-center">
              <label
                htmlFor="i1"
                className="w-[100%] h-[50%] text-[1rem] flex items-center text-zinc-500"
              >
                شماره همراه
              </label>
              <input
                ref={c1}
                onKeyUp={() => inp1(event)}
                maxLength={11}
                type="text"
                id="i1"
                placeholder="09121594246"
                className="w-[100%] h-[40%] text-[1rem] border border-zinc-800 flex items-center rounded-lg text-center"
              />
            </div>
            <div className="w-[100%] h-[15%] px-5 flex flex-wrap justify-center content-center">
              <label
                htmlFor="i2"
                className="w-[100%] h-[50%] text-[1rem] flex items-center text-zinc-500"
              >
                ایمیل (اختیاری)
              </label>
              <input
              ref={c2}
              onKeyUp={() => inp2(event)}
                type="email"
                id="i2"
                placeholder="rezadro@gmail.com"
                className="w-[100%] h-[40%] text-[1rem] border border-zinc-800 flex items-center rounded-lg"
              />
            </div>
            <hr className="mt-5 mx-5 border border-zinc-400" />
            <div className="w-[100%] h-[15%] px-5 flex flex-wrap justify-center content-center">
              <label
                htmlFor="i3"
                className="w-[100%] h-[50%] text-[1rem] flex items-center text-zinc-500"
              >
                کد تخفیف <span className="text-[.7rem] mx-2">(اگر کد دارید وارد کنید)</span>
              </label>
              <input
                type="text"
                id="i3"
                placeholder="در صورتی که کد تخفیف دارید وارد کنید"
                className="w-[100%] h-[40%] text-[1rem] border border-zinc-800 flex items-center rounded-lg"
              />
            </div>
            <div className="w-[92%] bg-[#41A5F3] rounded-lg p-5 m-5 flex flex-wrap  content-center text-[.85rem] text-white">
              <p>
                <i className="bi bi-check"></i>
                می توانید از کد تخفیف 90percent جهت تست بخش تخفیف استفاده کنید.
              </p>
              <p>
                <i className="bi bi-check"></i>
                در هنگام ورود شماره همراه و ایمیل دقت کنید، اطلاعات خرید به آنها
                ارسال می شود.
              </p>
              <p>
                <i className="bi bi-check"></i>
                درگاه زرین پال در وضعیت سند باکس(Sandbox) است. بنابراین برای تست
                خرید از درگاه زرین پال استفاده کنید تا بدون پرداخت مبلغی خروجی
                بعد از پرداخت را مشاهده کنید.
              </p>
            </div>
          </article>
          <article className="w-[100%] xl:w-[40%] h-[50%] xl:h-[100%] border flex flex-wrap gap-3 content-start bg-white rounded-xl shadow-xl p-5">
            <div className="rounded-lg w-[100%] h-[15%] bg-zinc-300 flex flex-wrap justify-center content-center">
              <div className="w-[20%] h-[100%] flex justify-center items-center p-4 border-l-2">
                <Image
                  src={data.url}
                  alt="Picture of the author"
                  width={1000000}
                  height={1000000}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10%",
                  }}
                />
              </div>
              <div ref={c3} className="w-[80%] h-[100%] p-4 flex justify-center items-center">
                {data.title}
              </div>
            </div>
            <div className="rounded-lg w-[100%] h-[8%] bg-zinc-300 flex flex-wrap justify-center content-center">
              <div className="w-[20%] h-[100%] flex justify-center items-center p-4 border-l-2 text-[.9rem]">
                <p>تعداد:</p>
              </div>
              <div className="w-[80%] h-[100%] p-4 flex justify-center items-center gap-1">
                <button
                  onClick={inc}
                  className="w-[2rem] h-[2rem] flex justify-center items-center border border-zinc-600 rounded-md bg-white text-[1.5rem] text-zinc-500"
                >
                  +
                </button>
                <p ref={c4} className="w-[4rem] h-[2rem] flex justify-center items-center border border-zinc-600 rounded-md bg-white text-[1.5rem] text-zinc-500">
                  {x1}
                </p>
                <button
                  onClick={dec}
                  className="w-[2rem] h-[2rem] flex justify-center items-center border border-zinc-600 rounded-md bg-white text-[2rem] text-zinc-500"
                >
                  -
                </button>
              </div>
            </div>
            <div className="rounded-lg w-[100%] h-[8%] bg-zinc-300 flex flex-wrap justify-center content-center">
              <div className="w-[20%] h-[100%] flex justify-center items-center p-4 border-l-2 text-[.9rem]">
                <p>جمع کل:</p>
              </div>
              <div className="w-[80%] h-[100%] p-4 flex justify-center items-center gap-1">
                <p>{data.price3 * x1} تومان</p>
              </div>
            </div>
            <div className="rounded-lg w-[100%] h-[8%] bg-zinc-300 flex flex-wrap justify-center content-center">
              <div className="w-[20%] h-[100%] flex justify-center items-center p-4 border-l-2 text-[.9rem]">
                <p>تخفیف:</p>
              </div>
              <div className="w-[80%] h-[100%] p-4 flex justify-center items-center gap-1">
                <p ref={c5}>{(data.price3 - data.price2) * x1} تومان</p>
              </div>
            </div>
            <div className="rounded-lg w-[100%] h-[8%] bg-zinc-300 flex flex-wrap justify-center content-center">
              <div className="w-[20%] h-[100%] flex justify-center items-center p-4 border-l-2 text-[.75rem]">
                <p>قابل پرداخت:</p>
              </div>
              <div className="w-[80%] h-[100%] p-4 flex justify-center items-center gap-1">
                <p ref={c6}>{data.price2 * x1} تومان</p>
              </div>
            </div>
            <div className="w-[100%] h-[15%] flex flex-wrap justify-center content-center">
              <button className="w-[8rem] h-[3rem] flex justify-center items-center border border-zinc-600 rounded-md bg-white text-[1rem] text-zinc-500">
                پرداخت از درگاه
              </button>
              <p className="w-[2rem] h-[3rem] flex justify-center items-center text-[1.5rem] ">
                یا
              </p>
              <button className="w-[8rem] h-[3rem] flex justify-center items-center border-2 border-sky-300 rounded-md bg-white text-[1rem] text-zinc-500">
                <i className="bi bi-check text-[1.5rem] text-sky-300"></i> کارت
                به کارت
              </button>
            </div>
            <div className="w-[100%] h-[10%] flex flex-wrap justify-center content-center">
              <Image
                src="/img12.png"
                alt="Picture of the author"
                width={1000000}
                height={1000000}
                style={{
                  width: "3rem",
                  height: "3rem",
                  objectFit: "cover",
                  borderRadius: "10%",
                  border: "1px solid gray",
                  boxShadow: "0 0 10 2 gray",
                }}
              />
            </div>
            <div className="w-[100%] h-[15%] flex flex-wrap justify-center content-center">
              <button
                onClick={_mod}
                className="w-[10rem] h-[3rem] rounded-lg flex items-center justify-around text-[1rem] bg1 hover:shadow-md hover:shadow-[#1d8ef0] transition-all duration-300"
              >
                <i className="bi bi-credit-card text-[1.2rem]"></i>
                پرداخت و ثبت
              </button>
            </div>
          </article>
        </section>
        <S4 />
        <myContext.Provider value={data}>
        <myContext2.Provider value={send}>
          <S5/>
        </myContext2.Provider>
        </myContext.Provider>
      </section>
    </main>
  );
}

function S5() {
  const data = useContext(myContext);
  const send = useContext(myContext2);
  const x1 = useStore((state) => state.x);
  const mod = useRef();
  const i1 = useRef();
  const i2 = useRef();
  const i3 = useRef();
  const i4 = useRef();
  const i5 = useRef();
  const i6 = useRef();
  const _close = () => {
    mod.current.style.display = "none";
    i1.current.value=''
    i2.current.value=''
    i3.current.value=''
    i4.current.value=''
    i5.current.value=''
    i6.current.value=''
  };

  const inp1 = (e) => {
    let val = e.target.value;
    if (val.search(/[a-z]/) >= 0 || val.search(/[ا-ی]/) >= 0) {
      e.target.value = val.slice(0, length - 1);
    }
  };

  const inp2 = (e) => {
    let val = e.target.value;
    if (val.search(/[a-z]/) >= 0 || val.search(/[ا-ی]/) >= 0) {
      e.target.value = val.slice(0, length - 1);
    }

    if (val.length == 4 || val.length == 11 || val.length == 18) {
      e.target.value += " - ";
    }
  };

  const [m, setM] = useState("0");
  function mm(e) {
    let x = e.target.value;
    console.log(x.length);
    setM(x.length);
  }
 
  return (
    <section
      ref={mod}
      style={{ display: "none" }}
      className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)] fixed z-50 top-0 flex justify-center items-center"
    >
      <article className="w-[100%] xl:w-[50%] h-[100%] xl:h-[85%] bg-white rounded-xl shadow-2xl">
        <div className="w-[100%] h-[10%] lg:h-[12%] border-b-2 border-zinc-400 flex">
          <div className="w-[10%] h-[100%] flex justify-center items-center">
            <button onClick={_close}>
              <i class="bi bi-x-square-fill text-[2rem] text-zinc-500 hover:text-red-600 transition-all duration-300"></i>
            </button>
          </div>
          <p className="w-[90%] h-[100%] flex justify-center items-center font-bold text-[1.5rem]">
            کارت به کارت
          </p>
        </div>
        <div className="w-[100%] h-[15%] p-2">
          <p className="w-[100%] h-[100%] rounded-lg border border-sky-600 p-2">
            لطفا مبلغ {data.price2 * x1} تومان را به کارت شماره
            XXXX-XXXX-XXXX-XXXX بانک ------ به نام ++++++ ++++++ واریز نمایید و
            فرم زیر را تکمیل کنید.
          </p>
        </div>
        <div className="w-[100%] h-[65%] lg:h-[61%]">
          <div className="w-[100%] h-[16.6%]  flex flex-wrap lg:flex-nowrap px-2 items-center">
            <label
              className="w-[100%] lg:w-[30%] h-[50%] lg:h-[100%] flex justify-start px-2 items-center text-[1rem] "
              htmlFor="i1"
            >
              شماره پیگیری تراکنش :
            </label>
            <input
            ref={i1}
              id="i1"
              type="text"
              dir="ltr"
              maxLength="16"
              onKeyUp={() => inp1(event)}
              className="text-[1.5rem] px-4 w-[100%] lg:w-[70%] h-[50%] lg:h-[80%] border border-zinc-500 rounded-lg text-center"
              placeholder="شماره پیگیری(عدد)"
            />
          </div>
          <div className="w-[100%] h-[16.6%] flex flex-wrap lg:flex-nowrap px-2 items-center">
            <label
              className="w-[100%] lg:w-[30%] h-[50%] lg:h-[100%] flex justify-start px-2 items-center text-[1rem]"
              htmlFor="i2"
            >
              شماره کارت واریز کننده :
            </label>
            <input
            ref={i2}
              id="i2"
              type="text"
              dir="ltr"
              maxLength={25}
              onKeyUp={() => inp2(event)}
              className="text-[1.5rem] px-4 w-[100%] lg:w-[70%] h-[50%] lg:h-[80%] border border-zinc-500 rounded-lg text-center"
            />
          </div>
          <div className="w-[100%] h-[16.6%] flex flex-wrap lg:flex-nowrap px-2 items-center">
            <label
              className="w-[100%] lg:w-[30%] h-[50%] lg:h-[100%] flex justify-start px-2 items-center text-[1rem]"
              htmlFor="i3"
            >
              تاریخ و ساعت پرداخت:
            </label>
            <div className="w-[100%] lg:w-[70%] h-[50%] lg:h-[100%] flex justify-between items-center">
              <input
              ref={i3}
                id="i3"
                type="date"
                className="w-[45%] h-[80%] border border-zinc-500 rounded-lg"
              />
              <input
              ref={i6}
                type="time"
                className="w-[45%] h-[80%] border border-zinc-500 rounded-lg"
              />
            </div>
          </div>
          <div className="w-[100%] h-[33.2%] flex flex-wrap lg:flex-nowrap px-2 items-center">
            <label
              className="w-[100%] lg:w-[30%] h-[50%] lg:h-[100%] flex justify-start px-2 items-center text-[1rem]"
              htmlFor=""
            >
              توضیحات(اختیاری) : <br /> {m} / 250
            </label>
            <textarea
            ref={i4}
              onKeyUp={() => mm(event)}
              name=""
              id=""
              cols="30"
              rows="10"
              maxLength="250"
              style={{ resize: "none" }}
              className="w-[100%] lg:w-[70%] h-[50%] lg:h-[80%] border border-zinc-500 rounded-lg"
            ></textarea>
          </div>
          <div className="w-[100%] h-[16.6%] flex flex-wrap lg:flex-nowrap px-2 items-center">
            <label
              className="w-[100%] lg:w-[30%] h-[50%] lg:h-[100%] flex justify-start px-2 items-center text-[1rem]"
              htmlFor="i4"
            >
              تصویر رسید پرداخت(اختیاری):
            </label>
            <input
            ref={i5}
              id="i4"
              type="file"
              className="w-[100%] lg:w-[70%] h-[50%] lg:h-[80%] border text-[1.5rem] border-zinc-500 rounded-lg"
            />
          </div>
        </div>
        <div className="w-[100%] h-[10%] lg:h-[12%] border-t-2 border-zinc-400 flex justify-around items-center">
         <Link href='../../../mmmm'>
          <button onClick={send} className="w-[10rem] h-[3rem] bg1 rounded-lg hover:shadow-md hover:shadow-[#1d8ef0] transition-all duration-300 text-[1.2rem]">
            ثبت سفارش
          </button>
         </Link>
          <button
            onClick={_close}
            className="w-[10rem] h-[3rem] border-2 border-zinc-400 rounded-lg hover:shadow-xl transition-all duration-300 text-[1.2rem]"
          >
            انصراف
          </button>
        </div>
      </article>
    </section>
  );
}
