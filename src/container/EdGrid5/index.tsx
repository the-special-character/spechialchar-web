import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { edSection3 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {};

const EdGrid5 = (props: Props) => {
  return (
    <>
      <section>
        <div className="grid lg:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {edSection3.map((x, index) => (
            <div
              key={x.id}
              className={`${index % 1 == 0 ? "max-sm:border-r-0" : ""} ${
                index % 2 == 1
                  ? "max-md:border-r-0"
                  : " max-md:border-r-2 max-md:border-yellow-300 "
              } ${
                index % 3 == 2
                  ? "max-lg:border-r-0"
                  : " max-lg:border-r-2 max-lg:border-yellow-300 "
              }  ${
                index < 3 || index < 6 || index < 9
                  ? "max-lg:border-b-2 max-lg:border-y-yellow-300"
                  : ""
              } ${index < 4 ? "lg:border-b-2 border-yellow-300 " : ""} ${
                index % 4 === 3
                  ? "lg:border-r-0 "
                  : "lg:border-r-2 border-yellow-300"
              } ${
                index === 3
                  ? "lg:border-r-0 lg:border-b-2 lg:border-yellow-300 "
                  : " "
              } ${index === 7 ? "border-none" : ""} p-3`}
            >
              <ServiceIcon data={x} />
            </div>
          ))}
        </div>
        <div className="pt-10">
          <Link href={"https://thespecialcharacter.graphy.com/"}>
            <Button className="grid h-full">
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                Get your custom <span>eLearning solution</span>
                <span>&rarr;</span>
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default EdGrid5;
