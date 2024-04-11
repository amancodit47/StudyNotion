import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import ReviewSlider from "../components/common/ReviewSlider";
import Footer from "../components/common/Footer";
const Home = () => {
  return (
    <div>
      {/* section 1 */}
      <div className="relative mx-auto flex flex-col  w-11/12 max-w-maxContent items-center text-white justify-between">
        <Link to={"/signup"}>
          <div className=" group mt-16 mb-5 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 drop-shadow-[0px_1.5px_rgba(255,255,255,0.25)] transition-all duration hover:scale-95 hover:drop-shadow-none w-fit">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semiblod">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className="mt-4 w-[70%] text-center text-lg fond-bold text-richblack-300">
          with our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes,and pesonalized feedback from
          instructors.
        </div>

        <div className="flex flex-row gap-7 mt-8 ">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login "}>
            Book a Demo
          </CTAButton>
        </div>

        <div className="mx-6 lg:mx-20 my-12 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            muted
            loop
            autoPlay
            className="shadow-[5px_5px_rgba(255,255,255)] lg:shadow-[15px_15px_rgba(255,255,255)]"
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                unlock Your <HighlightText text={"Coding Potential"} />
                with our online courses
              </div>
            }
            subheading={
              "Our Courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you"
            }
            ctabtn1={{
              btnText: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</\ntitle><link rel="stylesheet" href="style.css">\n</head>\n<body>\n
                <h1><a href="/">Header</a>\n</h1>`}
            codeColor={"text-yellow-25"}
            backgroundGradient={<div className="codeblock1 absolute"> </div>}
          />
        </div>

        {/* Reverse code section */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start <HighlightText text={"Coding in Seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            codeColor={"text-white"}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>
        <ExploreMore />
      </div>
      {/* section 2 */}
      <div className="bg-pure-greys-5 text-richblack-800">
        <div className="homepage_bg h-[310px]">
          <div className="w-11/12 max-w-maxContent flex flex-col justify-between items-center gap-8 mx-auto">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex gap-2 items-center">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        {/* next-section */}
        <div className="w-11/12 max-w-maxContent mx-auto flex flex-col items-center justify-between gap-8  ">
          <div className="flex flex-col gap-7 mb-10 mt-[-100px] md:flex-row lg:mt-20 lg:gap-0 justify-between lg:flex-row">
            <div className="text-4xl text-semibold md:w-[45%] w-[95%]">
              Get the skills you need for a{" "}
              <HighlightText text={"Job that is in demand"} />
            </div>

            <div className="flex flex-col gap-10 md:w-[45%] items-start w-[95%]">
              <p className=" text-richblack-800 text-xl">
                The modern Study Notion is the dictates its own terms. Today, to
                be a competative specialist requires more than professional
                skills.
              </p>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex">Learn More</div>
              </CTAButton>
            </div>
          </div>
          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* section 3 */}
      <div className="relative w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <InstructorSection />
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews for other learner's
        </h1>
      </div>
      {/* Review slider */}
      <div>
        <ReviewSlider />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
