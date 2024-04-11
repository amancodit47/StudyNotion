import { useEffect, useState } from "react";
// import { VscAdd } from "react/icons/vsc";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI";
import IconBtn from "../../common/IconBtn";
import CoursesTable from "./InstructorCourses/CoursesTable";
import { VscAdd } from "react-icons/vsc";

export default function MyCourses() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token);
      if (result) setCourses(result);
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <div className="mb-24 flelx items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">My Courses</h1>
        <div className="mt-5">
          <IconBtn
            text="Add Course"
            onclick={() => navigate("/dashboard/add-course")}
          >
            <VscAdd className="" />
          </IconBtn>
        </div>
      </div>

      {courses && <CoursesTable courses={courses} setCourses={setCourses} />}
    </div>
  );
}
