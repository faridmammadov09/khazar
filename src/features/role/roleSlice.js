import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowCreateRoleModal: false,
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setShowCreateRoleModal: (state, action) => {
      state.isShowCreateRoleModal = action.payload;
    },
  },
});

export default roleSlice.reducer;
export const { setShowCreateRoleModal } = roleSlice.actions;
