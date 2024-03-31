import React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import NavbarLogo from "@/public.icons/Logo New Website.svg";
import { accordionItems } from "@/lib/constData";
import Link from "next/link";
import { Button } from "../ui/button";

const HeaderDesktop = () => {
  return (
    <div className="h-full w-full flex flex-col  justify-between">
      <div className="flex justify-end lg:gap-x-[3.3rem] items-start py-2 pl-5">
        {accordionItems.data.map((item, index) => (
          <div key={index} className="flex flex-col pt-3 group">
            <div className="flex text-primary text-subtitle1 gap-x-1">
              <Link
                href={`${item.link?.toLowerCase()}`}
                className="cursor-pointer"
                title="nav-links"
              >
                {item.title}
              </Link>
              {item?.content && (
                <ChevronDownIcon className="mt-2 transition-transform duration-300 transform group-hover:rotate-180 " />
              )}
            </div>
            <ul className="text-primary text-subtitle2  top-full left-0 mt-1 group-hover:mb-3 max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-screen flex flex-col gap-y-4 pt-2">
              {item?.content?.map((itemContent, subindex) => (
                <div key={subindex} className="">
                  <Link
                    key={subindex}
                    title="desktop-nav links"
                    href={`/${item.title.toLowerCase()}/${item.content[
                      subindex
                    ].toLocaleLowerCase()}`}
                  >
                    <span className="text-primary flex flex-col flex-wrap">
                      {itemContent}
                    </span>
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        ))}
        <Link href="/ourthinking" title="nav-link" className="text-primary text-subtitle1 py-3">
          Thinking
        </Link>

        <Link href="/casestudies" title="nav-link" className="text-primary text-subtitle1 py-3">
          Projects
        </Link>
        <Link className="pt-2" title="nav-button" href={"#Contact"}>
          <Button
            variant={"default"}
            size={"xl"}
            className=" py-1 px-4 text-background  "
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeaderDesktop;
