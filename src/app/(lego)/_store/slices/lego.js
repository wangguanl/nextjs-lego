import { createSlice } from '@reduxjs/toolkit';

const legoSlice = createSlice({
  name: 'lego',
  initialState: {
    viewTags: {},
  },
  reducers: {
    ADD_viewTag: (state, { type, payload: route = {} }) => {
      console.log(route);
      const { name, params, query, meta, path } = route;
      state.viewTags = {
        ...state.viewTags,
        [path]: {
          name,
          title: meta.title,
          params,
          query,
        },
      };
    },
    REMOVE_viewTag: (state, path) => {
      delete state.viewTags[path];
    },
  },
});
// 导出 Action 创建函数
export const { ADD_viewTag, REMOVE_viewTag } = legoSlice.actions;

// 导出 Reducer
export default legoSlice.reducer;
