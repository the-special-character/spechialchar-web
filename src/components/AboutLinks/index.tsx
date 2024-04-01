import { aboutlinks } from "@/lib/constData";
import { aboutlinksType } from "@/utils/types";
import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {};

const AboutLinks = ({ data }: aboutlinksType) => {
  return (
    <section className="">
      <div className="py-5 flex justify-start w-auto text-4xl md:text-8xl lg:text-9xl font-bold">
        {data.title1}
      </div>
      <div className="py-5 ">
        {aboutlinks.data.map((item) => (
          <div
            className="flex md:py-2 gap-3 text-2xl md:text-5xl lg:text-6xl text-primary  font-bold"
            key={item.id}
          >
            <Link href={item.link} className="hover:text-blue">{item.title}</Link>
            <Image
              src={item.image}
              className="max-md:h-9 max-md:w-10"
              height={50}
              alt="about-links"
              width={50}
              title="about-page-link"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default AboutLinks;
