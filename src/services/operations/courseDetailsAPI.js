import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { courseEndpoints } from "../apis";

const {
  COURSE_DETAILS_API,
  COURSE_CATEGORIES_API,
  GET_ALL_COURSE_API,
  CREATE_COURSE_API,
  EDIT_COURSE_API,
  CREATE_SECTION_API,
  CREATE_SUBSECTION_API,
  UPDATE_SECTION_API,
  UPDATE_SUBSECTION_API,
  DELETE_SECTION_API,
  DELETE_SUBSECTION_API,
  GET_ALL_INSTRUCTOR_COURSE_API,
  DELETE_COURSE_API,
  GET_FULL_COURSE_DETAILS_AUTHENTICATED,
  CREATE_RATING_API,
  LECTURE_COMPLETION_API,
} = courseEndpoints;

export const getAllCourses = async () => {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_COURSE_API);
    if (!response?.data?.success) {
      throw new Error("Could not fetch course categories");
    }

    result = response?.data?.data;
  } catch (error) {
    console.log("GET_ALL_COURSE_API Error...", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const fetchCourseDetails = async (courseId) => {
  let result = null;
  try {
    const response = await apiConnector("POST", COURSE_DETAILS_API, {
      courseId,
    });
    console.log("COURSE_DETAILS_API Response...", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data;
  } catch (error) {
    console.log("COURSE_DETAILS_API Error...", error);

    result = error.response.data;
  }
  return result;
};

export const fetchCourseCategories = async () => {
  let result = [];
  try {
    const response = await apiConnector("GET", COURSE_CATEGORIES_API);
    console.log("COURSE_CATEGORIES_API Response...", response);

    if (!response?.data?.success) {
      throw new Error("Could not fetch course Categories");
    }
    result = response?.data?.data;
  } catch (error) {
    console.log("COURSE_CATEGORIES_API Error...", error);
    toast.error(error.message);
  }
  return result;
};

// aad the course details
export const addCourseDetails = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_COURSE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });

    console.log("Create Course Api RESPONSE...", response);

    if (!response?.data?.success) {
      throw new Error("Could not add course details");
    }

    toast.success("Course details added successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE_COURSE_API ERROR...", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// Edit the course details
export const editCourseDetails = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading..");
  try {
    const response = await apiConnector("POST", EDIT_COURSE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });

    if (!response?.data?.success) {
      throw new Error("Could not update course details");
    }

    toast.success("Course details updated successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("EDIT COURSE API Error...", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// create a section
export const createSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");

  try {
    const response = await apiConnector("POST", CREATE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });

    console.log("CREATE SECTION API RESPONSE...", response);

    if (!response?.data?.success) {
      throw new Error("Could not create section");
    }

    toast.success("Course section created");
    result = response?.data?.updatedCourse;
  } catch (error) {
    console.log("CREATE_SECTION_API Error...", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// Create a subsection
export const createSubSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });

    console.log("CREATE_SUBSECTION_API RESPONSE...", response);

    if (!response?.data?.success) {
      throw new Error("Could not Add Lecture");
    }
    toast.success("Lecture Added");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE_SUBSECTION_API ERROR...", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// Update a section

export const updateSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", UPDATE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });

    if (!response?.data?.success) {
      throw new Error("Could not update section");
    }

    toast.success("Course Section updated");
    result = response?.data?.data;
  } catch (error) {
    console.log("UPDATE_SECTION_API Error...", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  console.log("Update section result", result);
  return result;
};

// update a subsection
export const updateSubSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");

  try {
    const response = await apiConnector("POST", UPDATE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });
    console.log("UPDATE_SUBSECTION API Response...", response);

    if (!response?.data?.success) {
      throw new Error("Could not update lecture");
    }

    toast.success("Lecture updated");
    result = response?.data?.data;
  } catch (error) {
    console.log("UPDATE_SUBSECTION_API Error", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// delete a section

export const deleteSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");

  try {
    const response = await apiConnector("POST", DELETE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });
    console.log("Delete section");
    console.log("DELETE_SECTION_API RESPONSE...", response);

    if (!response?.data?.success) {
      throw new Error("Could not delete section");
    }

    toast.success("Course section deleted");
    result = response?.data?.data;
  } catch (error) {
    console.log("DELETE_SECTION_API ERROR...", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// delete a subsection

export const deleteSubSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");

  try {
    const response = await apiConnector("POST", DELETE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });
    console.log("DELETE SUB-SECTION API RESPONSE....", response);

    if (!response?.data?.success) {
      throw new Error("Could not delete lecture");
    }

    toast.success("Lecture Deleted");
    result = response?.data?.data;
  } catch (error) {
    console.log("DELETE SUB-SECTION API ERROR...", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// Fetching all course under a specific instructor

export const fetchInstructorCourses = async (token) => {
  let result = [];
  const toastId = toast.loading("Loading...");

  try {
    console.log("fetch Course Instructor");
    const response = await apiConnector(
      "GET",
      GET_ALL_INSTRUCTOR_COURSE_API,
      null,
      { Authorization: `Bearer ${token}` }
    );
    console.log("INSTRUCTOR COURSES API RESPONSE...", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Instructor Courses");
    }

    result = response?.data?.data;
  } catch (error) {
    console.log("INSTRUCTOR COURSES API ERROR...", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// Delete a Course

export const deleteCourse = async (data, token) => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("DELETE", DELETE_COURSE_API, data, {
      Authorization: `Bearer ${token}`,
    });
    console.log("DELETE COURSE API RESPONSE...", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Delete Course");
    }

    toast.success("Course Deleted");
  } catch (error) {
    console.log("DELETE COURSE API ERROR...", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
};

// Get full details of a course

export const getFullDetailsOfCourse = async (courseId, token) => {
  let result = null;
  console.log("Get full details of CourseId", courseId);
  try {
    const response = await apiConnector(
      "POST",
      GET_FULL_COURSE_DETAILS_AUTHENTICATED,
      { courseId },
      { Authorization: `Bearer ${token}` }
    );
    console.log("COURSE_FULL_DETAILS_API API RESPONSE...", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response?.data?.data;
  } catch (error) {
    console.log("COURSE_FULL_DETAILS_API API ERROR...", error);
    result = error.response.data;
  }

  return result;
};

// Mark a lecture as complete
export const markLectureAsComplete = async (data, token) => {
  let result = null;
  console.log("Mark complete data", data);
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", LECTURE_COMPLETION_API, data, {
      Authorization: `Bearer ${token}`,
    });
    console.log("MARK_LECTURE_AS_COMPLETE_API API RESPONSE...", response);

    if (!response.data.message) {
      throw new Error(response.data.error);
    }
    toast.success("Lecture Completed");
    result = true;
  } catch (error) {
    console.log("MARK_LECTURE_AS_COMPELETE_API API ERROR...", error);
    toast.error(error.message);
    result = false;
  }
  toast.dismiss(toastId);
  return result;
};

// Create a rating for course

export const createRating = async (data, token) => {
  const toastId = toast.loading("Loading...");
  let success = false;

  try {
    const response = await apiConnector("POST", CREATE_RATING_API, data, {
      Authorization: `Bearer ${token}`,
    });
    console.log("CREATE RATING API RESPONSE...", response);

    if (!response?.data?.success) {
      throw new Error("Could not Create Rating");
    }

    toast.success("Rating Created");
    success = true;
  } catch (error) {
    success = false;
    console.log("CREATE RATING API ERROR...", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return success;
};
