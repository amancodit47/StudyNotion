import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OtpInput from "react-otp-input";
import { SignUp, sendOtp } from "../services/operations/authAPI";
import { useNavigate, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupData, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;
    dispatch(
      SignUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };

  return (
    <div className="min-h-[calc(100vh - 3.5rem)] flex items-center justify-center mt-10">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="max-w-[500px] p-4 lg:p-8">
          <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375] flex justify-center">
            Verify Email
          </h1>
          <span className="text-[1.125rem] leading-[1.625rem] text-richblack-100 flex justify-center">
            A verification code has been sent to you.
          </span>
          <p className="text-[1.125rem] leading-[1.625rem] mt-1 mb-4 text-richblack-100 flex justify-center">
            Enter the code below
          </p>
          <form onSubmit={handleOnSubmit}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={
                <span className="text-richblack-25 text-xl">-</span>
              }
              renderInput={(props) => (
                <input
                  {...props}
                  style={{ justifyContent: "space-between", gap: "0 6px" }}
                  className="bg-richblack-800 w-[48px] lg:w-[60px] border-0 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                  placeholder="-"
                />
              )}
              placeholder="-"
            />
            <button
              type="submit"
              className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
            >
              Verify Email
            </button>
          </form>

          <div className="flex items-center justify-between mt-6">
            <div className="">
              <Link to="/">
                <p className="text-richblack-5 flex items-center gap-x-2">
                  <BiArrowBack /> Back to login
                </p>
              </Link>
            </div>
            <button
              onClick={() => dispatch(sendOtp(signupData.email, navigate))}
              className="flex items-center text-blue-100 gap-x-2"
            >
              <RxCountdownTimer />
              Resend it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
