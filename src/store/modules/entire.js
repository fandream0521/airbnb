import { getEntireList } from "@/services/modules/entire";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEntireList = createAsyncThunk('entire/fetchEntireList', async (curPage, { dispatch, getState }) => {
  const { entire } = getState();
  dispatch(changeIsLoading(true))
  const res = await getEntireList((curPage - 1) * entire.pageSize, entire.pageSize);
  dispatch(changeEntireList(res))
  dispatch(changeIsLoading(false))
})


const entireSlice = createSlice({
  name: 'entire',
  initialState: {
    list: [],
    pageSize: 20,
    totalCount: 0,
    isLoading: false,
  },
  reducers: {
    changeEntireList(state, { payload }) {
      state.list = payload.list;
      state.totalCount = payload.totalCount;
    },
    changeIsLoading(state, { payload }) {
      state.isLoading = payload;
    }
  }
})

export const { changeEntireList, changeIsLoading } = entireSlice.actions;

export default entireSlice.reducer;