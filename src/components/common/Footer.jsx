import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/Logo/QuarkLogo.png";

import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code Challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Bussiness Solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
          {/* Left-section */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-3 gap-3">
            <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0 ">
              <img
                src="https://res.cloudinary.com/dhr4sxqq1/image/upload/v1736419739/Logo-Full-Light_kg2x5v.png"
                // src="https://res.cloudinary.com/dutwikfzh/image/upload/v1712830100/Quark/Screenshot_2024-04-11_151320-removebg-preview_s6hkk8.png"
                alt=""
                className="object-contain h-20 w-36"
              />
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Company
              </h1>
              <div className="flex flex-col gap-2">
                {["About", "Careers", "Affiliates"].map((element, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={element.toLowerCase}>{element}</Link>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-3 text-lg">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
            </div>
            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Resources
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((element, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={element.split(" ").join("-").toLowerCase()}>
                        {element}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Support
              </h1>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2 ">
                <Link to={"/help-center"}>Help Center</Link>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                {" "}
                Plans{" "}
              </h1>
              <div className="flex flex-col gap-2 mt-2 text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                <Link to={Plans[0].split(" ").join("-").toLowerCase()}>
                  {" "}
                  {Plans[0]}{" "}
                </Link>
                <Link to={Plans[1].split(" ").join("-").toLowerCase()}>
                  {" "}
                  {Plans[1]}{" "}
                </Link>
                <Link to={Plans[2].split(" ").join("-").toLowerCase()}>
                  {" "}
                  {Plans[2]}{" "}
                </Link>
              </div>

              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                {" "}
                Community{" "}
              </h1>
              <div className="flex flex-col gap-2 mt-2 text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                <Link to={Community[0].split(" ").join("-").toLowerCase()}>
                  {" "}
                  {Community[0]}{" "}
                </Link>
                <Link to={Community[1].split(" ").join("-").toLowerCase()}>
                  {" "}
                  {Community[1]}{" "}
                </Link>
                <Link to={Community[2].split(" ").join("-").toLowerCase()}>
                  {" "}
                  {Community[2]}{" "}
                </Link>
              </div>
            </div>
          </div>

          {/* Right-section */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {FooterLink2.map((ele, i) => {
              return (
                <div key={i} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                  <h1 className="text-richblack-50 font-semibold text-[16px]">
                    {ele.title}
                  </h1>

                  <div className="flex flex-col gap-2 mt-2">
                    {ele.links.map((link, index) => {
                      return (
                        <div
                          key={index}
                          className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                        >
                          <Link to={link.link}>{link.title}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            <div className=" border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200 px-3">
              <Link
                to={BottomFooter[0].split(" ").join("-").toLocaleLowerCase()}
              >
                {" "}
                {BottomFooter[0]}{" "}
              </Link>
            </div>
            <div className=" border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200 px-3">
              <Link
                to={BottomFooter[1].split(" ").join("-").toLocaleLowerCase()}
              >
                {" "}
                {BottomFooter[1]}{" "}
              </Link>
            </div>
            <div className="cursor-pointer hover:text-richblack-50 transition-all duration-200 px-3">
              <Link
                to={BottomFooter[2].split(" ").join("-").toLocaleLowerCase()}
              >
                {" "}
                {BottomFooter[2]}{" "}
              </Link>
            </div>
          </div>

          <div className="text-center">Made with ❤️ By Aman Kumar © 2024</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
