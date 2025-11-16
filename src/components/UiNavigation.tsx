import type React from "react";
import { MdMenu } from "@react-icons/all-files/md/MdMenu";
import { useEffect, useState } from "react";

export default function (): React.ReactNode {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const scrollingWindow = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", scrollingWindow);

    // return window.removeEventListener("scroll", scrollingWindow);
  }, [scrollY]);
  return (
    <>
      <header
        className={`fixed z-2 top-0 h-16 flex items-center w-full ${
          scrollY > 5 || isClick ? "bg-neutral-100 shadow" : "bg-transparent"
        } transition-[background]`}
      >
        <div className="lg:container lg:mx-auto max-lg:px-4 flex items-center justify-between w-full">
          <h1 className="text-2xl font-bold">Dapur Raya Catering</h1>
          <button
            className="lg:hidden text-4xl"
            type="button"
            onClick={() => setIsClick(!isClick)}
          >
            <MdMenu />
          </button>
        </div>
      </header>
      <nav
        className={[
          isClick ? "max-lg:left-0 shadow" : "max-lg:-left-80",
          "fixed top-0 right-0 h-16 w-full max-lg:bg-neutral-100 max-lg:w-80 max-lg:right-auto max-lg:top-16 max-lg:bottom-0 max-lg:h-auto z-3 max-lg:z-1 max-lg:py-2 max-lg:px-4 transition-[left_background  ]",
        ].join(" ")}
      >
        <div className="flex max-lg:flex-col lg:items-center h-full lg:justify-end container mx-auto gap-2 lg:gap-10 ">
          <a href="#">Home</a>
          <a href="#">Achivement</a>
          <a href="#">Service</a>
          <a href="#">Blogs</a>
          <a href="#">Price</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </>
  );
}
