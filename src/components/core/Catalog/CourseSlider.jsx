import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import Course_Card from "./Course_Card";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const CourseSlider = ({ Courses }) => {
  return (
    <div>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          pagination={true}
          freeMode={true}
          breakpoints={{ 1024: { slidesPerView: 3 } }}
          className="max-h-[30rem] mySwiper"
          modules={[Pagination, Autoplay, Navigation]}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
          }}
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </div>
  );
};

export default CourseSlider;
