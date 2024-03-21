"use client";
import React from "react";
import { Data } from "@/lib/constData";
import Marque from "../Marque";

const MobilePage = () => {
  return (
    <>
      <section className=" text-white">

        <section className="bg-black grid gap-8 p-4 md:p-8 lg:py-12 lg:px-20">
          <div className="pt-8">
            <h2 className="text-3xl md:text-5xl font-extrabold lg:text-7xl">
              What makes us different
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {Data.map((x) => (
              <div key={x.id}>
                <div className="text-yellow-400 text-6xl">{x.title1}</div>
                <div className="font-base">{x.title2}</div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section>
        <div className=" pt-4 md:pt-8">
          <div>
            <h2 className="text-5xl  font-bold md:text-8xl">Our Clients</h2>
          </div>
        </div>
      </section>
      <div>
        <Marque />
      </div>
    </>
  );
};

export default MobilePage;
