import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseSectionData: [],
  courseEntireData: [],
  completedLectures: [],
  totalNoOfLectures: 0,
};

const viewCourseSlice = createSlice({
  name: "viewCourse",
  initialState,
  reducers: {
    setCourseSectionData: (state, actions) => {
      state.courseSectionData = actions.payload;
    },
    setEntireCourseData: (state, actions) => {
      state.courseEntireData = actions.payload;
    },
    setTotalnoOfLectures: (state, actions) => {
      state.totalNoOfLectures = actions.payload;
    },
    setCompletedlectures: (state, actions) => {
      state.completedLectures = actions.payload;
    },
    updateCompletedLectures: (state, actions) => {
      state.completedLectures = [...state.completedLectures, actions.payload];
    },
  },
});

export const {
  setCourseSectionData,
  setEntireCourseData,
  setTotalnoOfLectures,
  setCompletedlectures,
  updateCompletedLectures,
} = viewCourseSlice.actions;
export default viewCourseSlice.reducer;
