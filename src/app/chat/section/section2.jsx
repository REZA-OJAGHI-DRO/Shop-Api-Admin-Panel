'use client'

import { useRef,useState,useEffect } from "react";

export default function S2(){
    const x=useRef()

    function send(){
        const text =x.current.value;
        const  a= new Date()
        const newTask = {
            text: text,
            date:a,
        };
        fetch('https://65d39d1a522627d501094683.mockapi.io/text', {
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
            // alert('ارسال موفقیت آمیز بود')
            window.location.reload()
        }).catch(error => {
            alert('ارسال نشد')
        })
  }

  const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const x = await fetch('https://65d39d1a522627d501094683.mockapi.io/text');
            const y = await x.json();
            setData(y);
        }
        getData();
    }, []);

function del(x){
    fetch('https://65d39d1a522627d501094683.mockapi.io/text/'+x+'', {
  method: 'DELETE',
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with deleted task
  window.location.reload()
}).catch(error => {
  // handle error
})
}

    return(
        <section className="w-[50%] p-4 bg-white flex flex-wrap rounded-lg shadow-lg my-5">
            <article className="w-[90%] flex flex-wrap gap-2 p-4 justify-center">
                {data&&data.map((val)=>{
                    return(
                        <>
                        <div className="w-[100%] flex justify-start">
                        <div className="w-[60%] flex flex-wrap border border-zinc-200 p-3 rounded-lg shadow-lg bg-zinc-300">
                            <p className="w-[100%]">{val.text}</p>
                            <p className="w-[100%] text-[.7rem]">رضا اجاقی {val.date}</p>
                            <i onClick={()=>del(val.id)} className="cursor-pointer bi bi-trash3-fill"></i>
                            </div>
                        </div>
                        </>
                    )
                })}
            </article>
            <article className="w-[100%]  flex flex-wrap justify-around gap-4 p-4">
                <textarea ref={x} placeholder="پیام جدید" name="" maxLength='250' id="" cols="30" rows="10" className="shadow-lg w-[90%] h-[15vh] resize-none border border-zinc-400 rounded-lg"></textarea>
                <button onClick={send} className="w-[8rem] h-[2.5rem] bg1 rounded-lg shadow-md">ارسال</button>
            </article>
        </section>
    )
}