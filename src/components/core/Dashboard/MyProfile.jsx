import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import {
  RiAccountBoxFill,
  RiAccountBoxLine,
  RiEditBoxLine,
} from "react-icons/ri";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-richblack-5 text-3xl font-medium mb-14">
        My Profile
      </h1>

      {/* Section-1 */}
      <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex items-center gap-x-4">
          <img
            src={`${user?.image}`}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[80px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings");
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>

      {/* Section-2 */}
      <div className="flex flex-col text-richblack-5 justify-between border-[1px] gap-2 border-richblack-700 bg-richblack-800 rounded-md mb-10 mt-10 px-12 p-8">
        <div className="flex items-center justify-between w-full">
          <p className="text-lg font-semibold text-richblack-5">About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings");
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-richblack-5"
              : "text-richblack-400"
          } text-sm font-medium`}
        >
          {user?.additionalDetails?.about ?? "Write something about you"}
        </p>
      </div>

      {/* Section-3 */}
      <div className="flex flex-col text-richblack-5 justify-between gap-y-10 border-richblack-700 border-[1px] rounded-md p-8 px-12 bg-richblack-800">
        <div className="flex items-center justify-between w-full">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings");
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>

        <div className="flex max-w-[100%] justify-between">
          <div className=" flex flex-col gap-y-5 w-[40%]">
            <div>
              <p className="text-richblack-400 font-medium text-md mb-2">
                First Name
              </p>
              <p className="text-richblack-5 text-md font-medium">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="text-richblack-400 font-medium text-md mb-2">
                Email
              </p>
              <p className="text-md text-richblack-5 font-medium">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="text-richblack-400 font-medium text-md mb-2">
                Gender
              </p>
              <p className="text-md text-richblack-5 font-medium">
                {user?.additionalDetails?.gender ?? "Please add your Gender"}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-5 w-[40%]">
            <div>
              <p className="text-richblack-400 font-medium text-md mb-2">
                Last Name
              </p>
              <p className="text-md text-richblack-5 font-medium">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="text-richblack-400 font-medium text-md mb-2">
                Phone No.
              </p>
              <p className="text-md text-richblack-5 font-medium">
                {user?.additionalDetails?.contactNumber ?? "Add contact number"}
              </p>
            </div>
            <div>
              <p className="text-richblack-400 font-medium text-md mb-2">
                Date of Birth
              </p>
              <p className="text-md text-richblack-5 font-medium">
                {user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
