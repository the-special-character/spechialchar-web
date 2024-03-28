import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BannerType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = ({
  data,
  className,
  font,
}: {
  data: BannerType;
  className?: string;
  font?: string;
}) => {
  console.log(className);

  return (
    <div
      className={cn(" w-full bg-primary text-background py-20", {
        [`${className}`]: className,
      })}
    >
      <div className=" grid sm:pl-container max-sm:px-container md:grid-cols-[40%_1fr]  grid-cols-1 items-center lg:gap-x-40  max-sm:gap-y-7  justify-center">
        <div className="lg:w-[30rem] sm:gap-y-10 md:gap-y-10 max-sm:gap-y-7 flex justify-evenly flex-col sm:justify-center">
          <h1
            className={cn(" text-heading1  font-bold ", {
              [`${font}`]: font,
            })}
          >
            {data.title}
          </h1>

          <div className="text-subtitle1 ">{data.description}</div>

          <div className="max-md:grid max-md:w-full">
            <Link className="" href={"https://thespecialcharacter.graphy.com/"}>
              <Button variant="default" size="lg" className=" py-7 text-base ">
                <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                  {data?.button1} <span>{data?.button2}</span>
                  <span>&rarr;</span>
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:relative flex justify-center items-center ">
          <Image
            src={data.imageurl}
            alt="image"
            height={500}
            width={500}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
