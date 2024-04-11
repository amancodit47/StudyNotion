import React from "react";
import { useState, useEffect } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import CourseCard from "../HomePage/CourseCard";
const tabsName = [
  "Free",
  "New To Coding",
  "Most Popular",
  "Skill Paths",
  "Career Paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div>
      <div className="text-4xl font-semibold text-center my-10 ">
        Unlock the
        <HighlightText text={"Power of Code"} />
        <p className="text-center text-richblack-300 text-lg mt-3 font-semibold">
          Learn to build anything you can imagine
        </p>
      </div>

      <div className="flex lg:flex-row rounded-full flex-wrap bg-richblack-800 md:mb-4 mb-0 mt-4 px-1 py-1 gap-10 font-semibold mx-auto  justify-evenly shadow-[1px_2px_rgba(255,255,255,0.25)]">
        {tabsName.map((element, index) => {
          return (
            <div
              onClick={() => {
                setMyCards(element);
              }}
              key={index}
              className={`flex flex-row text-[16px] items-center gap-2 ${
                currentTab === element
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-4 py-1`}
            >
              {element}
            </div>
          );
        })}
      </div>
      <div className="lg:h-[200px] lg:block h-[170px]"></div>

      {/* Course card */}
      <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-richblack-800 lg:mb-0 mb-7 lg:px-0 px-3">
        {courses.map((element, index) => {
          return (
            <CourseCard
              key={index}
              cardData={element}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
