"use client";
import { HomeBannerdataType } from "@/utils/types";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";

const HomeBanner = ({ data }: HomeBannerdataType) => {
  const [index, setIndex] = useState(0);
  const values = ["value", "future", "new"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className=" relative overflow-hidden h-screen ">
      <video
        autoPlay
        loop
        muted
        className="absolute xl:w-full max-w-none "
        src="/images/newVideo.mp4"
      >
        Your browser does not support the video tag.
      </video>
      <section className="relative  z-0  text-yellow-300 h-full flex flex-wrap flex-col items-left justify-center lg:text-6xl font-bold text-4xl max-sm:px-4 px-8 lg:px-48 ">
        {data.title}
        <div className="text-white">{data.title2}</div>
        <div className="flex flex-wrap  justify-between  mt-32 gap-10 text-3xl text-white">
          <div className="pt-1">
            {" "}
            {data.subtitle}{" "}
            <span className="text-yellow-300">{values[index]}</span>
          </div>
          <div className="">
            <Button
              variant="default"
              size="sm"
              className="px-24 md:px-32 py-6 text-base"
            >
              {data.button}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeBanner;
