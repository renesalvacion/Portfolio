import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';

import Aos from './aos';


interface SliderContent {
  image: string;
  title: string;
  content: string;
}

export default function Slider() {

  Aos()
  const sliderArray: SliderContent[] = [
    {
      image: 'https://flowbite.com/docs/images/carousel/carousel-1.svg',
      title: 'AI VOICE GENERATED IDENTIFIER',
      content: 'This is the first project in the carousel.',
      
    },
    {
      image: 'https://flowbite.com/docs/images/carousel/carousel-2.svg',
      title: 'FURNI-STORE ECCOMERCE',
      content: 'Another example of a great project.',
    },
    {
      image: 'https://flowbite.com/docs/images/carousel/carousel-3.svg',
      title: 'TIC-TAC-TOE',
      content: 'Carousel working perfectly now.',
    },
    {
      image: 'https://flowbite.com/docs/images/carousel/carousel-3.svg',
      title: 'YT LINK VIDEO CONVERTER',
      content: 'Another one in the mix.',
    },
    {
      image: 'https://flowbite.com/docs/images/carousel/carousel-3.svg',
      title: 'INVENTORY SYSTEM',
      content: 'More projects coming.',
    },
    
  ];

  return (
    <div className="p-4">
      <h3 className="text-2xl text-blue-400 font-bold mb-6 text-shadow-2xs" data-aos="fade-right">Best Projects:</h3>

      <Swiper
      className='cursor-pointer'
      data-aos="fade-up"
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
         
        }}
      >
        {sliderArray.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow  flex flex-col items-center text-center h-90 m-8" >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-bold ">{slide.title}</h2>
              <p className="text-sm text-gray-600">{slide.content}</p>

              <div className="btn flex justify-around w-full pt-8">
                <a href="http://" className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>View Project</a>
 <a 
  href="http://"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
>
  See Code
</a>




              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
