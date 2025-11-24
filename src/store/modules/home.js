import { getGoodPriceInfo, getDiscountInfo, getHighScoreInfo, getHotRecommendInfo, getPlusInfo } from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGoodPriceInfo = createAsyncThunk("home/fetchGoodPriceInfo", async () => await getGoodPriceInfo())
export const fetchDiscountInfo = createAsyncThunk("home/fetchDiscountInfo", async () => await getDiscountInfo())
export const fetchHighScoreInfo = createAsyncThunk("home/fetchHighScoreInfo", async () => await getHighScoreInfo())
export const fetchHotRecommendInfo = createAsyncThunk("home/fetchHotRecommendInfo", async () => await getHotRecommendInfo())
export const fetchPlusInfo = createAsyncThunk("home/fetchPlusInfo", async () => await getPlusInfo())


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
  },
  extraReducers: builder => {
    builder.addCase(fetchGoodPriceInfo.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload;
    }).addCase(fetchDiscountInfo.fulfilled, (state, { payload }) => {
      state.discountInfo = payload;
    }).addCase(fetchHighScoreInfo.fulfilled, (state, { payload }) => {
      state.highScoreInfo = payload;
    }).addCase(fetchHotRecommendInfo.fulfilled, (state, { payload }) => {
      state.hotRecommendInfo = payload;
    }).addCase(fetchPlusInfo.fulfilled, (state, { payload }) => {
      state.plusInfo = payload;
    })
  }
})


export const { changeDiscountInfo, changeGoodPriceInfo, changeHighScoreInfo, changeHotRecommendInfo, changePlusInfo } = homeSlice.actions;


export default homeSlice.reducer;