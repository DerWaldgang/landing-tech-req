import React from "react";
import Image from "next/image";

const FirtsSection = () => {
  return (
    <>
      <div className="lg:w-[1200px] mx-auto text-left px-10 sm:px-0">

        <h1 className="uppercase text-[#141414] text-2xl sm:text-5xl mt-[72px] mb-[64px] md:mt-[200px] md:mb-[100px]">
          ut aliquip ex ea commodo consequat
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row mx-auto w-full lg:w-[1200px] lg:mx-0 lg:mr-auto">

          <Image
            src={"/images/main_3.png"}
            width={700}
            height={600}
            alt="picture"
          />

        <div className="flex flex-col gap-5 sm:gap-0 sm:mt-0 mt-[40px] sm:justify-evenly sm:text-left items-center text-center px-5 sm:pl-16">
          <h1 className="text-2xl sm:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          <p className="font-manrope">
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </>
  );
};



export default FirtsSection;
