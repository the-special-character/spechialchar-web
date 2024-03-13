import { Button } from "@/components/ui/button";
import { backbox } from "@/lib/constData";
import React from "react";

type Props = {};

const BackBox = (props: Props) => {
  return (
    <>
      <section className="bg-blue-100 border-r-2 m-10 px-24 lg: py-20  p-4 rounded-lg ">
        <ul className="list-square pl-7 grid lg:grid-cols-2 lg:px-1 gap-x-9 md:grid-cols-2">
          {backbox.map((i) => (
            <li key={i.id} className="text-lg mb-2 ">
              <span className="font-bold text-xl">{i?.title}</span>{" "}
              {i.discription}
            </li>
          ))}
        </ul>
      </section>
      <section className="py-10">
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            Talk to back-end <span>development experts</span>
            <span>&rarr;</span>
          </span>
        </Button>
      </section>
    </>
  );
};

export default BackBox;
