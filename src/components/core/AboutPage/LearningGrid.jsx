import React from "react";
import HighlightText from "../HomePage/HighlightText";
import Button from "../HomePage/Button";
const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto grid-col-1 xl:grid-cols-4 xl:w-fit mb-12 w-[350px]">
      {LearningGridArray.map((card, index) => {
        return (
          <div
            key={index}
            className={`${index === 0 && "xl:col-span-2  bg-richblack-900"} ${
              card.order % 2 === 1 ? "bg-richblack-700" : "bg-richblack-800"
            } ${card.order === 3 && "xl:col-start-2"} lg:h-[294px]`}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 xl:pb-0 pb-10">
                <div className="text-4xl font-semibold">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
                <div className="w-fit mt-2">
                  <Button active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg font-semibold">
                  {card.heading}
                </h1>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
