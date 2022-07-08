import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowEmployeeSearchPanel: false,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    toggleEmployeeSearchPanel: (state) => {
      state.isShowEmployeeSearchPanel = !state.isShowEmployeeSearchPanel;
    },
  },
});

export default employeeSlice.reducer;
export const { toggleEmployeeSearchPanel } = employeeSlice.actions;
