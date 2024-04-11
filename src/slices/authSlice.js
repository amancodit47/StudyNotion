import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  loading: false,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignupData(state, actions) {
      state.signupData = actions.payload;
    },
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
    setToken(state, actions) {
      state.token = actions.payload;
    },
  },
});

export const { setToken, setLoading, setSignupData } = authSlice.actions;
export default authSlice.reducer;
