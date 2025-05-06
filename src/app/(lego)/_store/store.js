import { configureStore } from '@reduxjs/toolkit';

import legoReducer from './slices/lego';

export default configureStore({
  reducer: {
    lego: legoReducer, // 模块化状态
    // 添加其他 reducers
  },
});
