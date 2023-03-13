import { configureStore } from '@reduxjs/toolkit';

import auth from './auth/authSlice';
import stats from './stats/sliceStats';

export const store = configureStore({
  reducer: {
    auth,
    statsUsers: stats.users,
    statsNewUsers: stats.newUsers,
    statsSessions: stats.sessions,
    statsActivity: stats.activity,
    statsEvents: stats.events,
  },
});

export const getStore = () => store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
