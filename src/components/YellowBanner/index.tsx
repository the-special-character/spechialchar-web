import { BgYellowType } from "@/utils/types";
import React from "react";

function YellowBanner({ data }: BgYellowType) {
  return (
    <section className="bg-yellow-500">
      <div className="w-full">
        {/* leading-5 lg:text-2xl md:leading-6 lg:leading-8 */}
        <p className="font-normal px-2 md:max-w-[840px] w-full leading-5 lg:text-2xl md:leading-6 lg:leading-8 ">
          {data.description}
        </p>
      </div>
    </section>
  );
}

export default YellowBanner;