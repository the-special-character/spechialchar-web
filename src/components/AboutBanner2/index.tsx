import { aboutBanner2 } from "@/lib/constData";
import { cn } from "@/lib/utils";
import { aboutBanner2Type, aboutBannerType } from "@/utils/types";
import Image from "next/image";
import React from "react";

const AboutBanner2 = ({ data }: aboutBanner2Type) => {
  return (
    <section className="bg-second">
      <div className="lg:text-8xl text-5xl font-bold">{data.heading}</div>
      {aboutBanner2.section.map((item, i) => {
        return (
          <>
            <div className="bg-second  ">
              <div
                className={cn(
                  item.id % 2 !== 0
                    ? "flex flex-row-reverse max-sm:flex-wrap max-sm:flex-row"
                    : "md:flex md:flex-1 justify-evenly max-sm:flex-wrap max-sm:flex-row"
                )}
              >
                <div className=" w-full text-[40rem]  flex  relative">
                  {item.number}
                  <Image
                    src={item.url}
                    alt={"image"}
                    width={600}
                    height={600}
                    className="absolute top-[40%]"
                  />
                </div>
                <div className="lg:text-4xl text-2xl mt-96 h-full w-full ">
                  {item.title}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default AboutBanner2;
