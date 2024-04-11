import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
  {
    Logo: Logo1,
    heading: "Leadership",
    Description: "Fully commited to the success company",
  },
  {
    Logo: Logo2,
    heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    heading: "Flexibility",
    Description: "The ability two switch is an important skills",
  },
  {
    Logo: Logo4,
    heading: "Solve the problem",
    Description: "Guide your way to the solution",
  },
];

const TimelineSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center ">
        {/* left-box */}
        <div className="lg:w-[45%] flex flex-col gap-14  px-10 lg:gap-3">
          {timeline.map((element, index) => {
            return (
              <div className="flex flex-col lg:gap-3" key={index}>
                <div className="flex gap-6">
                  <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={element.Logo} alt="logo" />
                  </div>

                  <div>
                    <h2 className="font-semibold text-[18px]">
                      {element.heading}
                    </h2>
                    <p className="text-base  md:text-lg ">
                      {element.Description}
                    </p>
                  </div>
                </div>
                <div
                  className={`${
                    timeline.length - 1 === index ? "hidden" : "lg:block"
                  } h-14 border-dotted border-r border-richblack-100 w-[26px]`}
                ></div>
              </div>
            );
          })}
        </div>
        {/* right-box */}
        <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px] mb-10">
          <img
            src={timelineImage}
            alt="timelineImage"
            className="shadow-white object-cover shadow-[20px_20px_0px_0px] h-[400px] lg:h-fit"
          />

          <div className="absolute bg-caribbeangreen-700 flex flex-col lg:flex-row text-white uppercase py-7 left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="flex gap-4 items-center border-r border-caribbeangreen-300 px-4 ">
              <p className="text-3xl font-bold w-[75px]">10</p>
              <p className="text-caribbeangreen-300 text-sm">
                Years of Experience
              </p>
            </div>
            <div className="text-3xl flex gap-5 items-center px-7">
              <p>250</p>
              <p className="text-caribbeangreen-300 text-sm ">
                Type of courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
