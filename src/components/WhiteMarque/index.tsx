"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { marquedataType } from "@/utils/types";
import { MarqueData2 } from "@/lib/constData";
import { cn } from "@/lib/utils";
// import Icon1 from "@/public.icons/wb.svg";
// import Icon5 from "@/public.icons/turvo-logo.svg";
// import Icon2 from "@/public.icons/poplidays.svg";
// import Icon3 from "@/public.icons/p&g.svg";
// import Icon4 from "@/public.icons/universalelectroniocs-logo.svg";

const Marque = ({
  data,
  className,
}: {
  data: marquedataType;
  className?: string;
}) => (
  <div
    className={cn("h-72 flex items-center bg-black", {
      [`${className}`]: className,
    })}
  >
    <Marquee speed={100}>
      <div className="flex gap-x-[7.5rem]">
        {MarqueData2.map((x) => (
          <div key={x.id}>
            <Image
              src={x.src}
              alt="image"
              height={70}
              width={70}
              className="object-cover"
            />
            {/* {x.src} */}
          </div>
        ))}
      </div>
    </Marquee>
  </div>
);

export default Marque;