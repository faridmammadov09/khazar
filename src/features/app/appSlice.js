import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedUser: {},
  token: "",
  isShowNav: true,
  isShowDayOffSearchPanel: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      state.loggedUser = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    toggleShowNav: (state) => {
      state.isShowNav = !state.isShowNav;
    },
    logout: (state) => {
      state.loggedUser = {};
    },
    toggleShowDayOffSearchPanel: (state) => {
      state.isShowDayOffSearchPanel = !state.isShowDayOffSearchPanel;
    },
  },
});

export default appSlice.reducer;
export const {
  setLoggedUser,
  setToken,
  toggleShowNav,
  logout,
  toggleShowDayOffSearchPanel,
} = appSlice.actions;
