import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const copySlice = createSlice({
  name: "copy",
  initialState: {
    count: null,
  },
  reducers: {
    incrementCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const incrementCountFunction = async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/count/increment"
    );

    dispatch(incrementCount(response.data.count));
  } catch (error) {}
};

export const { incrementCount } = copySlice.actions;

export default copySlice.reducer;
