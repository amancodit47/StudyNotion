import React from "react";
import HighlightText from "./HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "../HomePage/Button";

const LearningLanguageSection = () => {
  return (
    <div>
      <div className="text-4xl font-semibold text-center">
        Your Swiss knife for
        <HighlightText text={"learning any Language"} />
        <p className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto text-base mt-3">
          Using spin making learning multiple language easy. With 20+ language
          realistics voice-over, progress tracking, custom schedule and more.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center mt-8 justify-center lg:mt-0">
        <img
          src={know_your_progress}
          alt="knowYourProgressImage"
          className="object-contain -mr-32"
        />
        <img
          src={compare_with_others}
          alt="compareWithOthersImage"
          className="object-contain"
        />
        <img
          src={plan_your_lesson}
          alt="planYourLessonImage"
          className="object-contain -ml-36"
        />
      </div>
      <div className="w-fit mx-auto lg:mb-20 mb-8 -mt-5">
        <CTAButton active={true} linkto={"/signup"}>
          <div>Learn More</div>
        </CTAButton>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
