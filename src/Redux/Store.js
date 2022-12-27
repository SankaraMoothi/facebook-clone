import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Reducer";

export default configureStore({
  reducer: {
    user: UserReducer,
  },
});
