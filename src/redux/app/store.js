import { configureStore } from "@reduxjs/toolkit";
import logInReducer from "../feature/logInSlice";

export default configureStore({
  reducer: {
    logIn: logInReducer,
  },
});
