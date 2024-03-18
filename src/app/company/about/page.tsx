import AboutAccordian from "@/components/AboutAccordian";
import AboutBanner from "@/components/AboutBanner";
import AboutBanner2 from "@/components/AboutBanner2";
import AboutCount from "@/components/AboutCount";
import AboutLinks from "@/components/AboutLinks";
import ImageBanner from "@/components/ImageBanner";
import LatestThinking from "@/components/LatestThinking";
import MobilePage from "@/components/MobilePage";
import OurClients from "@/container/OurClients";
import {
  aboutAccordianData,
  aboutBanner2,
  aboutBannerdata,
  aboutlinks,
  imageBanner2,
  latestThinkingData,
} from "@/lib/constData";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <>
      <AboutBanner data={aboutBannerdata} />
      <AboutCount />
      <OurClients />
      <AboutAccordian data={aboutAccordianData} />
      <AboutLinks data={aboutlinks} />
      <AboutBanner2 data={aboutBanner2} />
      <ImageBanner data={imageBanner2} />
      <LatestThinking data={latestThinkingData} />
    </>
  );
};

export default AboutPage;
