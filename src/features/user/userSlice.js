import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowSearchUserPanel: false,
  isShowCreateUserModal: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setShowSearchUserPanel: (state) => {
      state.isShowSearchUserPanel = !state.isShowSearchUserPanel;
    },
    setShowCreateUserModal: (state, action) => {
      state.isShowCreateUserModal = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setShowSearchUserPanel, setShowCreateUserModal } =
  userSlice.actions;
