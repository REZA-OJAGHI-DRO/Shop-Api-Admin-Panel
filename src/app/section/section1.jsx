"use client"
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../globals.css';


import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function S1(){
    return(
        <section className="w-[100%] h-[40vh] lg:h-[73vh]">
     <Swiper
     style={{
        width:"100%",
        height:"100%",      
     }}
     slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,          
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
    >
      <SwiperSlide 
      style={{
        width:"100%",
        height:"100%"      
     }}
      >
        <Image
         src="/img2.jpg"
         alt="Picture of the author"
         width={1000000}
         height={1000000}
         style={{
           width: "100%",
           height: "100%",
           objectFit: "cover",
         }}
        />
      </SwiperSlide>
      <SwiperSlide 
      style={{
        width:"100%",
        height:"100%"      
     }}
      >
      <Image
         src="/img3.jpg"
         alt="Picture of the author"
         width={1000000}
         height={1000000}
         style={{
           width: "100%",
           height: "100%",
           objectFit: "cover",
         }}
        />
      </SwiperSlide>


      
    </Swiper>
        </section>
    )
}