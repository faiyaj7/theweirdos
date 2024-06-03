import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";

import img1 from "../assets/Nfts/bighead-1.svg";
import img2 from "../assets/Nfts/bighead-2.svg";
import img3 from "../assets/Nfts/bighead-3.svg";
import img4 from "../assets/Nfts/bighead-4.svg";
import img5 from "../assets/Nfts/bighead-5.svg";
import img6 from "../assets/Nfts/bighead-6.svg";
import img7 from "../assets/Nfts/bighead-7.svg";
import img8 from "../assets/Nfts/bighead-8.svg";
import img9 from "../assets/Nfts/bighead-9.svg";
import img10 from "../assets/Nfts/bighead-10.svg";

const Carousel = () => {
  return (
    <div className="w-[57vw] mt-4 md:w-[56vw] md:h-[55vh] lg:mt-0 lg:w-[25vw] h-[35vh] lg:h-[70vh]">
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ type: "fraction" }}
        scrollbar={{ draggable: true }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img1} alt="NFTs" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img2} alt="NFTs" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img3} alt="NFTs" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img4} alt="NFTs" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img5} alt="NFTs" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img6} alt="NFTs" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img7} alt="NFTs" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img8} alt="NFTs" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img9} alt="NFTs" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img10} alt="NFTs" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
