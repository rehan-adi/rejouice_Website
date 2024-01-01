import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import './styles.css';

function SlidingImage() {
  return (
    <div className='w-auto h-[100vh] pt-4 bg-[#FAF8F3]'>
      <div className='flex px-14 justify-between items-end'>
        <h1 className='text-9xl font-normal'>Get in touch</h1>
        <h1 className='text-2xl'>↵ Contact</h1>
      </div>
      <div>
        <div className='border-b ml-[64px] mt-3 w-[1405px] border-black'>

        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='object-center' src="https://images.prismic.io/rejouice/8059f4af-8ba3-4e5f-a14b-ba5ed760963f_Mask+group+%2839%29.jpg?auto=compress%2Cformat&fm=webp&width=1048" alt="" />
            <img src="https://images.prismic.io/rejouice/a19d8427-5008-4dce-afa4-5d66118a0463_d7a851a9d8e2eb36cf93ffe4a6fa3701.jpeg?auto=compress%2Cformat&fm=webp&width=1048" alt="" />
            <img src="https://images.prismic.io/rejouice/36450525-8a76-4a44-b6d4-59c00ad0b50d_RJ-Home-OuraRing-x2.png?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://images.prismic.io/rejouice/57ac2830-96e7-4174-a104-b384126bf98c_fec955552eb681ff6c273774515e6c2e.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
        <img src="https://images.unsplash.com/photo-1703897059883-3b0e02522cdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img src="https://images.prismic.io/rejouice/d3289122-3f25-43f3-b140-11a342a484d7_Mask+group+%2838%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
        </SwiperSlide>
        <SwiperSlide>
       <img src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYW5lfGVufDB8fDB8fHww"alt="" />
       <img src="https://images.unsplash.com/photo-1703706376543-0da03ff38230?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5N3x8fGVufDB8fHx8fA%3D%3D"  alt="" />
       <img src="https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIwY2FyfGVufDB8fDB8fHww" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SlidingImage