// !  *************************DANGER **********************

const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Profile = require("../models/Profile");
const mailSender = require("../utils/mailSender");
const { passwordUpdated } = require("../mail/templates/passwordUpdate");

//! send otp
exports.sendOTP = async (req, res) => {
  console.log("sendOtp");
  try {
    // fetch email from request's body
    const { email } = req.body;

    // check if user is already present

    const checkUserPresent = await User.findOne({ email });

    // if user is already exist, then return a response
    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: "User already registered",
      });
    }
    //Generate otp
    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    console.log("OTP generated: ", otp);

    //check unique otp or not
    let result = await OTP.findOne({ otp: otp });

    while (result) {
      otp = otpGen.generate(6, {
        upperCaseAlphabets: false,
      });
      // result = await OTP.findOne({ otp: otp });
    }

    const otpPayLoad = { email, otp };

    //create an entry for OTP in DB
    const otpBody = await OTP.create(otpPayLoad);
    console.log("OTP Body", otpBody);

    // return response successful
    res.status(200).json({
      success: true,
      message: "OTP Sent Successfully",
      otp,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//! signUp
exports.signUp = async (req, res) => {
  try {
    console.log("SIGNUP");
    // data fetch from request's body
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      contactNumber,
      otp,
    } = req.body;

    // validate sign-up data
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return res.status(403).json({
        success: false,
        message: "Please enter all the fields properly",
      });
    }

    //match password and confirm password
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message:
          "Password and Confirm Password fields doesn't match, Please try again",
      });
    }

    // Check if User already exists or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User is already registered",
      });
    }

    //find most recent OTP stored for the user
    const recentOtp = await OTP.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);
    console.log(recentOtp);
    //validate OTP
    if (recentOtp.length == 0) {
      //OTP not found
      return res.status(400).json({
        success: false,
        message: "OTP not found",
      });
    } else if (otp !== recentOtp[0].otp) {
      //Invalid Otp
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    //Hash Password

    const HashedPassword = await bcrypt.hash(password, 10);

    //Create entry of all the profile details in DB

    let approved = "";
    approved === "Instructor" ? (approved = false) : (approved = true);

    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: null,
    });

    const user = await User.create({
      firstName,
      lastName,
      email,
      contactNumber,
      password: HashedPassword,
      accountType: accountType,
      approved: approved,
      additionalDetails: profileDetails._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}`,
    });

    // return res
    return res.status(200).json({
      success: true,
      message: "User is registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User Cannot be registered, Please try again",
    });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    //get data from req body
    const { email, password } = req.body;
    //validation data
    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "All field is required, Please try again",
      });
    }

    // Check user exists or not

    const user = await User.findOne({ email }).populate("additionalDetails");
    if (!user) {
      return res.status(401).json({
        succcess: false,
        message: "User is not registered, Please Signup",
      });
    }

    // Generate JWT, after password matching
    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        email: user.email,
        id: user._id,
        accountType: user.accountType,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2d",
      });

      user.toObject();
      user.token = token;
      user.password = undefined; // It is use to remove the password from user

      // create cookie and send response
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      // In cookie there are three options "tokenname" , "token-instance" & "options".
      //and cookie is used to sent back in response after user make a request to the server and cookie is stored at the client side
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "Logged in successfully",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Password is incorrect",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Login Failure, Please Try Again",
    });
  }
};

//! changed password
exports.changePassword = async (req, res) => {
  try {
    const userDetails = await User.findById(req.user.id);
    //get oldpassword, newpassword,confirmNewpassword
    const { oldPassword, newPassword, confirmNewPassword } = req.body;
    //validation
    if (!oldPassword || !newPassword || !confirmNewPassword) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    // compare new password and confirmNewpassword
    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({
        success: false,
        message:
          "Password and Confirm Password fields doesn't match, Please try again",
      });
    }

    // Match between old passwords && update password in database
    const user = await User.findById(req.user.id);
    if (await bcrypt.compare(oldPassword, user.password)) {
      const newHashedPassword = await bcrypt.hash(newPassword, 10);

      const [updatedUserDetails, emailResponse] = await Promise.all([
        User.findByIdAndUpdate(
          req.user.id,
          {
            password: newHashedPassword,
          },
          { new: true }
        ),
        mailSender(
          userDetails.email,
          passwordUpdated(
            updatedUserDetails.email,
            `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
          )
        ),
      ]);

      console.log("Email sent successfully: ", emailResponse.response);

      return res.status(200).json({
        success: true,
        message: "Password Changed successfully",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Please enter correct old password",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Changing password failed",
    });
  }
};
