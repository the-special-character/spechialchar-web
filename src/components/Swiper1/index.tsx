"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { SwiperNavButtons } from "@/components/Swiper/SwiperButton";
import { SwiperServicesData } from "@/utils/types";
import { SwiperServices1 } from "@/lib/constData";
import Link from "next/link";
import { Button } from "../ui/button";

const Swiper1 = ({ data }: SwiperServicesData) => {
  return (
    <section className=" py-10 bg-gray-100 ">
      <div className="py-5 lg:pb-10 text-2xl font-bold pr-4 max-md:text-heading2 md:text-4xl lg:text-5xl lg:pr-44  ">
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
          {SwiperServices1.data.map((car, index) => (
            <SwiperSlide key={index} className="py-4">
              <Link
                className=" overflow-hidden overflow-y-hidden  h-56 "
                href={"https://thespecialcharacter.graphy.com/"}
              >
                <div className="relative">
                <Image
                  src={car.src}
                  alt={car.alt}
                  className=" flex flex-col  max-md:object-cover aspect-square left-0 top-0 -z-10  gap-x-4"
                  height={200}
                  width={800}
                />
                <div className=" py-3 px-4 md:px-12 absolute left-0 top-0  text-white  text-2xl md:text-3xl   font-bold overflow-hidden lg:px-10 lg:pr-20">
                  {car.alt}&rarr;
                </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
        <div className=" max-sm:hidden">
          <SwiperNavButtons />
        </div>
      </Swiper>
      <div className="py-10">
        <Link href={"https://thespecialcharacter.graphy.com/"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Contect Us
              <span>&rarr;</span>
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Swiper1;

// "use client";
// import React from "react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { SwiperSlide } from "swiper/react";
// import { Swiper } from "swiper/react";
// import { A11y, Navigation, Pagination } from "swiper/modules";
// import Image from "next/image";
// import { SwiperNavButtons } from "@/components/Swiper/SwiperButton";
// import { SwiperServicesData } from "@/utils/types";
// import { SwiperServices } from "@/lib/constData";
// import Link from "next/link";
// import { Button } from "../ui/button";

// const Swiper1 = ({ data }: SwiperServicesData) => {
//   return (
//     <section className=" py-10 bg-gray-100 ">
//       <div className="py-5 lg:pb-10 text-2xl font-bold pr-4 max-md:text-heading2 md:text-4xl lg:text-5xl lg:pr-44  ">
//         {data.title}
//       </div>
//       <Swiper
//         modules={[Navigation, Pagination, A11y]}
//         spaceBetween={10}
//         slidesPerView={1}
//         breakpoints={{
//           768: {
//             slidesPerView: 1.4,
//           },
//           1024: {
//             slidesPerView: 1.4,
//           },
//           1440: {
//             slidesPerView: 2.9,
//           },
//         }}
//         className="   "
//       >
//         <div className="h-[500px]">
//           {SwiperServices.data.map((car, index) => (
//             <SwiperSlide key={index} className="py-4">
//               <Link
//                 className=" overflow-hidden overflow-y-hidden  h-56 "
//                 href={"https://thespecialcharacter.graphy.com/"}
//               >
//                 <div className="relative">
//                 <Image
//                   src={car.src}
//                   alt={car.alt}
//                   className=" h-64 relative w-screen left-0 top-0 -z-10 md:h-96 lg:grid  sm:h-[400px] md:w-[560px] lg:h-[400px] lg:w-[90%] "
//                   height={200}
//                   width={800}
//                 />
//                 <div className=" px-6 py-3 md:px-12 absolute top-0 left-0  text-white  text-2xl md:text-3xl   font-bold overflow-hidden lg:px-10 lg:pr-20">
//                   {car.alt}&rarr;
//                 </div>
//                 </div>

//               </Link>
//             </SwiperSlide>
//           ))}
//         </div>
//         <div className="lg:pt-20 sm:pt-24 max-sm:hidden">
//           <SwiperNavButtons />
//         </div>
//       </Swiper>
//       <div className="py-10">
//         <Link href={"https://thespecialcharacter.graphy.com/"}>
//           <Button>
//             <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
//               Tab into our software <span>engineering services </span>
//               <span>&rarr;</span>
//             </span>
//           </Button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Swiper1;
