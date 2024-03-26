import { gridsectiontype, uiSectionType } from "@/utils/types";
import React from "react";

type Props = {};

const GridSection = ({ data }: gridsectiontype) => {
  return (
    <div key={data.id} className="border-b-2 border-b-second ">
      <div className="text-2xl font-bold">
        {data?.title1}

      </div>
      <div className=" text-md max-md:text-xl pt-5 pb-8 text-gray-400 font-medium">
        {data.description}
      </div>
    </div>
  );
};

export default GridSection;
