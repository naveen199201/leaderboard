import { configureStore } from '@reduxjs/toolkit';
import leaderListSlice from './Time';

const store = configureStore({
  reducer: {
    leaderList: leaderListSlice,
  },
});

export default store;
