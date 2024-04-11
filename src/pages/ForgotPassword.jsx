import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/operations/authAPI";
import HighlightText from "../components/core/HomePage/HighlightText";
import { toast } from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };

  return (
    <div className=" flex justify-center min-h-[calc(100vh - 3.5rem)]">
      {loading ? (
        <div></div>
      ) : (
        <div className="max-h-[500px] p-4 lg:p-8 ">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5 flex justify-center">
            {!emailSent ? "Reset Your Password" : "Check Your Email"}
          </h1>
          <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">
            {!emailSent ? (
              <div className="flex justify-center flex-col font-semibold ">
                <span className="text-[20px]">
                  <HighlightText text={"Have no fear. "} />
                  We'll email you instructions to reset your password.
                </span>
                <p className="font-medium flex items-center justify-center leading-[2.125rem]">
                  If you don't have access to your email we can try account
                  recovery
                </p>
              </div>
            ) : (
              <div>
                We have sent the reset email to <HighlightText text={email} />
              </div>
            )}
          </p>

          <form onSubmit={handleOnSubmit}>
            {!emailSent && (
              <label className="flex  flex-col justify-center items-center leading-[2.175rem]">
                <p className="text-[1.125rem] text-richblack-5 ">
                  Email Address<sup className="text-pink-200"> *</sup>{" "}
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email Address"
                  className="rounded-xl form-style mx-auto md:w-[300px] p-3"
                />
              </label>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[300px] mt-6 p-2 flex items-center justify-center bg-yellow-25 rounded-full leading-[1.875rem] drop-shadow-[1px_3px_0px_rgba(255,255,255,0.15)] hover:drop-shadow-none hover:border-richblack-300 hover:scale-95 transition-all duration-100"
              >
                {!emailSent ? "Reset Password" : "Resend Email"}
              </button>
            </div>
          </form>

          <div className="flex justify-center mt-6  ">
            <Link to="/login">
              <p className="w-[300px] p-2 gap-2 flex items-center  hover:scale-95 text-richblack-5 rounded-full leading-[1.875rem]">
                <BiArrowBack />
                Back to Login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
