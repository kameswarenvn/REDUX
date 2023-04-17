import { createSlice } from "@reduxjs/toolkit";

export const cartReducer = createSlice({
  name: "cart",
  initialState: {
    list: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log("----", { state, action });
      state.list = [...state.list, { ...action.payload, count: 1 }];
    },
    removeItem: (state, action) => {
      const index = state.list.findIndex(
        (product) => product.id === action.payload.id
      );
      state.list = [
        ...state.list.slice(0, index),
        ...state.list.slice(index + 1),
      ];
    },
    modifyItem: (state, { payload }) => {
      const index = state.list.findIndex(
        (product) => product.id === payload.id
      );
      console.log(index, "index");
      state.list = [
        ...state.list.slice(0, index),
        { ...state.list[index], count: payload.count },
        ...state.list.slice(index + 1),
      ];
    },
  },
});
export const { addItem, removeItem, modifyItem } = cartReducer.actions;
export default cartReducer.reducer;
