import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiConnector";
import { contactusEndpoint } from "../../services/apis";
import countryCode from "../../data/countrycode.json";
import { toast } from "react-hot-toast";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    const toastId = toast.loading("Loading...");
    console.log("Logging Data", data);
    try {
      const response = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );
      console.log("Logging Response", response);
      toast.dismiss(toastId);
    } catch (error) {
      console.log("Error - ", error.message);
      toast.error("Unable to contact Admin");
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form
      onSubmit={handleSubmit(submitContactForm)}
      className="flex flex-col gap-7"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 lg:flex-row">
          {/* firstName */}
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="firstname" className="label-style">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              {...register("firstname", { required: true })}
              className="form-style"
            />
            {errors.firstname && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please enter your name
              </span>
            )}
          </div>

          {/* LastName */}
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="lastname" className="label-style">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter last name"
              {...register("lastname")}
              className="form-style"
            />
          </div>
        </div>
        {/* Email */}

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="label-style">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email Address"
            {...register("email", { required: true })}
            className="form-style"
          />
          {errors.email && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your email address.
            </span>
          )}
        </div>

        {/* Phone No. */}
        <div className="flex flex-col gap-2 ">
          <label htmlFor="phonenumber" className="lable-style">
            Phone Number
          </label>
          <div className="flex gap-5 ">
            {/* Dropdown */}
            <div className="flex flex-col w-[90px] gap-2 ">
              <select
                name="dropdown"
                id="dropdown"
                {...register("countrycode", { required: true })}
                className="form-style"
              >
                {countryCode.map((element, index) => {
                  return (
                    <option key={index} value={element.code}>
                      {element.code}-{element.country}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex w-[calc(100%-95px)] flex-col gap-2 ">
              <input
                type="number"
                name="phonenumber"
                id="phonenumber"
                placeholder="12345 67890"
                className="form-style "
                {...register("phoneNo", {
                  required: {
                    value: true,
                    message: "Please enter Phone number",
                  },
                  maxLength: { value: 10, message: "Invalid Phone Number" },
                  minLength: { value: 10, message: "Invalid Phone Number" },
                })}
              />
            </div>
          </div>
          {errors.phoneNo && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              {errors.phoneNo.message}
            </span>
          )}
        </div>

        {/* message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="label-style">
            Message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            cols={30}
            rows={7}
            placeholder="Enter you message here"
            {...register("message", { required: true })}
            className="form-style"
          />
          {errors.message && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Enter the message
            </span>
          )}
        </div>
        <button
          disabled={toast.loading}
          type="submit"
          className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:scale-[95%] hover:shadow-none
                  ${
                    !toast.loading && "transition-all duration-200 "
                  }  disabled:bg-richblack-500 sm:text-[16px] `}
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
