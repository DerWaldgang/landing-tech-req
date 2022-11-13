import React from 'react'
import Image from "next/image";

function FifthSection() {
  return (
    <div className="flex flex-col-reverse sm:flex-row mx-auto w-full lg:w-[1200px] lg:mx-0 lg:ml-auto 2xl:mx-auto mt-20 ">
    <div className="sm:w-1/2 h-[420px] flex flex-col gap-5 sm:gap-0 sm:mt-0 mt-[40px] sm:justify-evenly sm:text-left items-center text-center px-10">
      <h1 className="text-2xl sm:text-4xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h1>
      <p className=" font-manrope">
        Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>

      <Image
        src={"/images/main_2.png"}
        width={600}
        height={400}
        alt="picture"
        className="h-[420px] w-[700px] object-cover"
      />

  </div>
  )
}

export default FifthSection