"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function BannerSlider() {
  const banners = [
    { id: 1, img: "/img/banner1.jpg", alt: "Laptop Deals" },
    { id: 2, img: "/img/banner2.jpg", alt: "Accessories Sale" },
    { id: 3, img: "/img/banner3.jpg", alt: "Camera Discounts" },
  ];

  return (
    <div className="container mx-auto py-8">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-[350px] md:h-[420px]">
              <Image
                src={banner.img}
                alt={banner.alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg">
                  {banner.alt}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
