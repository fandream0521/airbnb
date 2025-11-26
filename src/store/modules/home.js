import { getGoodPriceInfo, getDiscountInfo, getHighScoreInfo, getHotRecommendInfo, getPlusInfo } from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataInfo = createAsyncThunk("home/fetchHomeData", async (payload, { dispatch }) => {
  getGoodPriceInfo().then(res => {
    dispatch(changeGoodPriceInfo(res))
  })
  getDiscountInfo().then(res => {
    dispatch(changeDiscountInfo(res))
  })
  getHighScoreInfo().then(res => {
    dispatch(changeHighScoreInfo(res))
  })
  getHotRecommendInfo().then(res => {
    dispatch(changeHotRecommendInfo(res))
  })
  getPlusInfo().then(res => {
    dispatch(changePlusInfo(res))
  })
})


const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    highScoreInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeDiscountInfo(state, { payload }) {
      state.discountInfo = payload;
    },
    changeHotRecommendInfo(state, { payload }) {
      state.hotRecommendInfo = payload;
    },
    changeHighScoreInfo(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changePlusInfo(state, { payload }) {
      state.plusInfo = payload;
    },
  }
})


export const { changeDiscountInfo, changeGoodPriceInfo, changeHighScoreInfo, changeHotRecommendInfo, changePlusInfo } = homeSlice.actions;


export default homeSlice.reducer;