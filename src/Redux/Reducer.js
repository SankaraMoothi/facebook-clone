import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    changeUser: (state, { payload }) => {
      state.value = payload;
    },
  },
});
export const { changeUser } = userSlice.actions;
export default userSlice.reducer;
