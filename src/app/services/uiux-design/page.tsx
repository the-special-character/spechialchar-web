import ImageBanner from "@/components/ImageBanner";
import Swiper4 from "@/components/Swiper4";
import Tab3 from "@/components/Tab/index3";
import YellowBanner from "@/components/YellowBanner";
import Banner from "@/container/Banner";
import UiGrid from "@/container/UiGrid";
import UiGrid2 from "@/container/UiGrid2";
import UiUxBox from "@/container/UiUxBox";
import {
  SwiperServices4,
  YellowBannerData8,
  YellowBannerData9,
  banner6,
  imageBanner21,
  imageBanner22,
  imageBanner32,
  uiGrid,
  uiuxtabdata,
} from "@/lib/constData";
import React from "react";

const UxDesign = () => {
  return (
    <>
      <Banner data={banner6} className="bg-yellow text-primary" />
      <UiGrid data={uiGrid} />
      <ImageBanner data={imageBanner21} />
      <YellowBanner data={YellowBannerData8} />
      <UiGrid2 />
      <ImageBanner data={imageBanner22} />
      <YellowBanner data={YellowBannerData9} />
      <Tab3 data={uiuxtabdata} />
      <Swiper4 data={SwiperServices4} />
      <ImageBanner data={imageBanner32} />
      <UiUxBox />
    </>
  );
};

export default UxDesign;
