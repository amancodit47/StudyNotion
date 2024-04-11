import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "../HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
const InstructorSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 items-center mt-16">
      <div className="lg:w-[50%]">
        <img
          src={Instructor}
          alt=""
          className="shadow-white shadow-[-20px_-20px_20px_0]"
        />
      </div>

      <div className="lg:w-[50%] flex flex-col gap-10">
        <h1 className="lg:w-[50%] font-bold text-4xl">
          Become an <HighlightText text={"Instructor"} />
        </h1>
        <p className="flex flex-col items-center justify-center font-semibold text-[16px] text-justify w-[90%] text-richblack-300">
          Instructor from around the world teach millions of students on Quark.
          We provide the tools and skills to teach what you love.
        </p>
        <div className="w-fit ">
          <CTAButton active={true} linkto={"/signup"}>
            <div className="flex flex-row items-center gap-2 ">
              Start Learning Today <FaArrowRight />{" "}
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
