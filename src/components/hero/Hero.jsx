// import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax } from 'swiper/modules';
import './hero.css'
import img from '../../assets/home-shop-1.jpg'
import img1 from '../../assets/home-shop-2.jpg'
import img2 from '../../assets/home-shop-3.jpg'

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// const Hero = () => {
//     return (
//         <Swiper
//           modules={[Navigation, Pagination, Scrollbar, A11y]}
//           spaceBetween={50}
//           slidesPerView={1}
//           loop={true}
//           navigation
//           pagination={{ clickable: true }}
//           scrollbar={{ draggable: true }}
//           onSwiper={(swiper) => console.log(swiper)}
//           onSlideChange={() => console.log('slide change')}
//         >
//           <div className="swiper-container">
//           <SwiperSlide>
//             <img src={img} alt="" className='img'/>
//           </SwiperSlide>
//           <SwiperSlide><img src={img} alt="" className='img' /></SwiperSlide>
//           <SwiperSlide><img src={img} alt="" className='img' /></SwiperSlide>
//           <SwiperSlide><img src={img} alt="" className='img' /></SwiperSlide>
//           </div>
//           ...
//         </Swiper>
//       );
// }

// export default Hero

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
<div className="container">
  <img src={img} alt="Snow" className='hero-img'/>
  <div className="bottom-left">Bottom Left</div>
  <div className="top-left">Top Left</div>
  <div className="top-right">Top Right</div>
  <div className="bottom-right">Bottom Right</div>
  <div className="centered">Centered</div>
</div>
              
        </SwiperSlide>
        <SwiperSlide>
        <div className="container">
  <img src={img1} alt="Snow" className='hero-img'/>
  <div className="bottom-left">Bottom Left</div>
  <div className="top-left">Top Left</div>
  <div className="top-right">Top Right</div>
  <div className="bottom-right">Bottom Right</div>
  <div className="centered">Centered</div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="container">
  <img src={img2} alt="Snow" className='hero-img'/>
  <div className="bottom-left">Bottom Left</div>
  <div className="top-left">Top Left</div>
  <div className="top-right">Top Right</div>
  <div className="bottom-right">Bottom Right</div>
  <div className="centered">Centered</div>
</div>
        </SwiperSlide>

        
        
      </Swiper>
    </>
  );
}

export default Hero


{/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}


     