import { createSlice } from "@reduxjs/toolkit";


const mainSlice = createSlice({
  name: 'main',
  initialState: {
    isFixed: true,
    isReverse: true,
  },
  reducers: {
    changeFixed(state, { payload }) {
      state.isFixed = payload;
    },
    changeReverse(state, { payload }) {
      state.isReverse = payload;
    }
  }
})


export const { changeFixed, changeReverse } = mainSlice.actions;

export default mainSlice.reducer;