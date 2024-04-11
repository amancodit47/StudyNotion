import React, { useState, useEffect } from "react";
import Logo1 from "../../assets/Logo/QuarkLogo.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { ACCOUNT_TYPE } from "../../utils/constants";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/apis";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItem } = useSelector((state) => state.cart);

  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        setSubLinks(res.data.data);
      } catch (error) {
        console.log("Could not fetch Categories", error);
      }
      setLoading(false);
    })();
  }, []);

  const matchRoute = (route) => {
    console.log(location.pathname);
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-100`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dutwikfzh/image/upload/v1712830100/Quark/Screenshot_2024-04-11_151320-removebg-preview_s6hkk8.png"
            height={14}
            width={150}
            alt="Logo"
            loading="lazy"
          />
        </Link>

        {/* Nav Links */}
        <nav>
          <ul className="flex gap-x-6 text-richblack-25 ">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div
                    className={`relative flex cursor-pointer items-center justify-center gap-2 group ${
                      matchRoute("catalog/:catalogName")
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    } `}
                  >
                    <p>{link.title}</p>
                    <IoIosArrowDown />
                    <div className="invisible absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[25%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900  opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px] z-[1000]">
                      <div className="absolute left-[56%] top-0 h-6 w-8 rotate-45 rounded bg-richblack-5 -z-10 "></div>
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : subLinks?.length ? (
                        <>
                          {subLinks
                            ?.filter((subLink) => subLink?.courses?.length > 0)
                            ?.map((subLink, index) => (
                              <Link
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                key={index}
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))}
                        </>
                      ) : (
                        <p className=" text-center">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login signup Dashboard */}
        <div className="flex gap-x-4 items-center">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItem > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItem}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="text-white font-edu-sa border-2 border-richblack-700 p-1 text-md bg-richblack-800 rounded-lg hover:bg-richblack-900 hover:text-sm focus:outline-none focus:ring-1 focus:bg-richblack-900 focus:text-sm">
                Log In
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="text-white font-edu-sa border-2 border-richblack-700 p-1 text-md bg-richblack-800 rounded-lg hover:bg-richblack-900 hover:text-sm focus:outline-none focus:ring-1 focus:bg-richblack-900 focus:text-sm">
                Sign Up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
