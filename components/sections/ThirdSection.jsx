import React, { useMemo } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function ThirdSection() {

const width = useWindowDimensions()
console.log()

  const images = useMemo(() => {
    return [
      { image: "/slides/first.png" },
      { image: "/slides/second.png" },
      { image: "/slides/third.png" },
      { image: "/slides/fourth.png" },
      { image: "/slides/fifth.png" },
      { image: "/slides/sixth.png" },
      { image: "/slides/seventh.png" },
      { image: "/slides/eighth.png" },
    ];
  }, []);

  return (
    <div className="px-5 sm:px-0">
      <div className="lg:w-[1200px] mx-auto text-left">
        <h1 className="uppercase text-[#141414] text-2xl sm:text-5xl mt-[72px] md:mt-[200px] mb-[100px]">
          ut aliquip ex ea commodo consequat
        </h1>
      </div>
      <div className="lg:w-[1020px] ml-auto">
        <Swiper spaceBetween={30} slidesPerView={(width?.width < 600? 1.5 : 4.5)}>
          {images.map((item) => {
            return (
              <SwiperSlide key={item.image}>
                <Image
                  src={item.image}
                  width={400}
                  height={350}
                  alt="picture"
                  className="w-[400px] h-[350px]"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default ThirdSection;
