"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { SwiperNavButtons } from "./SwiperButton";
import { SwiperServicesData } from "@/utils/types";
import { SwiperServices } from "@/lib/constData";
import Link from "next/link";
import { Button } from "../ui/button";

const Swiper1 = ({ data }: SwiperServicesData) => {
  return (
    <section className=" py-10 bg-gray1 ">
      <div className="md:text-heading1 text-heading4 py-5 lg:pb-10  pr-4  lg:pr-44  ">
        {data.title}
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 1.4,
          },
          1024: {
            slidesPerView: 1.4,
          },
          1440: {
            slidesPerView: 2.9,
          },
        }}
        className="   "
      >
        <div className="">
          {SwiperServices.data.map((car, index) => (
            <SwiperSlide key={index} className="py-4">
              <Link
                className=" overflow-hidden overflow-y-hidden aspect-square sm:h-[30rem] "
                href={"https://thespecialcharacter.graphy.com/"}
              >
                <div className="relative">
                  <Image
                    src={car.src}
                    alt={car.alt}
                    className=" flex flex-col  object-cover aspect-square left-0 top-0 -z-10  gap-x-4"
                    height={200}
                    width={800}
                  />
                  <div className=" py-3 px-4 md:px-12 absolute left-0 top-0  text-background text-2xl md:text-3xl   font-bold overflow-hidden lg:px-10 lg:pr-20">
                    {car.alt}&rarr;
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
        <div className="max-sm:hidden pt-4">
          <SwiperNavButtons />
        </div>
      </Swiper>
      <div className="sm:pt-10 sm:pb-2">
        <Link href={"https://thespecialcharacter.graphy.com/"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Tab into our software <span>engineering services </span>
              <span>&rarr;</span>
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Swiper1;
