import { createSlice } from "@reduxjs/toolkit";

export const logInSlice = createSlice({
  name: "logIn",
  initialState: {
    logIn: null,
    tokenAuth: null,
  },
  reducers: {
    setLogInData: (state, { payload }) => {
      state.logIn = payload;
    },
    setToken: (state, { payload }) => {
      state.tokenAuth = payload;
    },
    setFirstName:(state, {payload}) => {
      state.logIn.firstName = payload;
    },
    setLastName:(state, {payload}) => {
      state.logIn.lastName = payload;
    }
  },
});

export const { setLogInData, setToken, setFirstName, setLastName } = logInSlice.actions;
export default logInSlice.reducer;
