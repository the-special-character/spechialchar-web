import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { backicon } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {};

const BackGrid2 = (props: Props) => {
  return (
    <section>
      <div className="grid md:grid-cols-4 gap-8  ">
        {backicon.map((x) => (
          <ServiceIcon data={x} />
        ))}
      </div>
      <Link className="py-10" href={"https://thespecialcharacter.graphy.com/"}>
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            Build Custom back-end<span>Solution </span>
            <span>&rarr;</span>
          </span>
        </Button>
      </Link>
    </section>
  );
};

export default BackGrid2;
