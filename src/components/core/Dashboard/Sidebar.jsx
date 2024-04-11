import React, { useState } from "react";
import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/operations/authAPI";
import { useSelector, useDispatch } from "react-redux";
import SidebarLink from "./SidebarLink";
import { useNavigate } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";
import ConfirmationModal from "../../common/ConfirmationModal";

const Sidebar = () => {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const returnToHomePage = () => {
    navigate("/");
  };

  const [confirmationModal, setConfirmationModal] = useState(null);

  if (profileLoading || authLoading) {
    return <div className="mt-10">Loading...</div>;
  }

  return (
    <div className="flex min-w-[200px] h-[calc(100vh-3.5rem)] flex-col border-r-[1px] border-r-richblack-700   bg-richblack-800 py-10">
      <div className="flex flex-col text-richblack-25">
        {sidebarLinks.map((link) => {
          if (link.type && user?.accountType !== link.type) return null;
          return <SidebarLink key={link.id} link={link} iconName={link.icon} />;
        })}
      </div>

      <div className="mx-auto mt-6 mb-6 h-[1px] w-11/12 bg-richblack-600"></div>

      <div className="flex flex-col text-richblack-5">
        <SidebarLink
          link={{ name: "Settings", path: "/dashboard/settings" }}
          iconName="VscSettingsGear"
        />

        <button
          onClick={() =>
            setConfirmationModal({
              text1: "Are you sure ?",
              text2: "You will be logged out of your Account",
              btn1Text: "Logout",
              btn2Text: "Cancel",
              btn1Handler: () => dispatch(logout(navigate)),
              btn2Handler: () => setConfirmationModal(null),
            })
          }
          className="text-sm font-medium"
        >
          <div className="flex items-center text-xl">
            <VscSignOut className="ml-8" />
            <span className="gap-x-2 px-[10px] py-[10px]  text-richblack-5">
              Logout
            </span>
          </div>
        </button>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
};

export default Sidebar;
