"use client";
import { useEffect, useState } from "react";
import useStore from "./store";
import Image from "next/image";
import Link from "next/link";

export default function S3({ params, searchParams }) {
  const { data, fetchData } = useStore();
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!data) {
    return <p>در حال دریافت اطلاعات...</p>;
  }
  return (
    <section className="w-[90%] flex justify-center flex-wrap gap-3 my-10">
      {data &&
        data.map((val) => {
            let x = "/section/mm/"+val.id
          return (
            <Link href={x}>
            <figure
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
                <p className="w-[100%] h-[50%] flex justify-center items-center font-bold">{val.name}</p>
              </figcaption>
            </figure>
                </Link>
          );
        })}
    </section>
  );
}
