import { createSlice } from '@reduxjs/toolkit';

import {
  fetchStatsNewUsersData,
  fetchStatsUsersData,
  fetchStatsSessionsData,
  fetchStatsActivityData,
  fetchStatsEventsData,
} from './apiStats';

import { StatsState } from './typesStats';

const initialState: StatsState = {
  loading: false,
  data: [],
  error: null,
  description: '',
  total: 0,
};

const statsUsersSlice = createSlice({
  name: 'statsUsers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStatsUsersData.pending, (state) => {
      state.loading = true;
      state.data = [];
      state.error = null;
      state.description = '';
      state.total = 0;
    });
    builder.addCase(fetchStatsUsersData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      state.description = 'В данном разделе предоставляется график зависимости общего числа пользователей от вермени';
      state.total = 0;
    });
    builder.addCase(fetchStatsUsersData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = 'Error fetch statsUsersData';
      state.description = '';
      state.total = 0;
    });
  },
});

const statsNewUsersSlice = createSlice({
  name: 'statsNewUsers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStatsNewUsersData.pending, (state) => {
      state.loading = true;
      state.data = [];
      state.error = null;
      state.description = '';
      state.total = 0;
    });
    builder.addCase(fetchStatsNewUsersData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      state.description = 'В данном разделе предоставляется график зависимости общего числа пользователей от вермени';
      state.total = 0;
    });
    builder.addCase(fetchStatsNewUsersData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = 'Error fetch statsNewUsersData';
      state.description = '';
      state.total = 0;
    });
  },
});

const statsSessionsSlice = createSlice({
  name: 'statsSessions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStatsSessionsData.pending, (state) => {
      state.loading = true;
      state.data = [];
      state.error = null;
      state.description = '';
      state.total = 0;
    });
    builder.addCase(fetchStatsSessionsData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      state.description = 'В данном разделе предоставляется график зависимости общего числа пользователей от вермени';
      state.total = 0;
    });
    builder.addCase(fetchStatsSessionsData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = 'Error fetch statsSessionsData';
      state.description = '';
      state.total = 0;
    });
  },
});

const statsAcitivitySlice = createSlice({
  name: 'statsActivity',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStatsActivityData.pending, (state) => {
      state.loading = true;
      state.data = [];
      state.error = null;
      state.description = '';
      state.total = 0;
    });
    builder.addCase(fetchStatsActivityData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      state.description = 'В данном разделе предоставляется график зависимости общего числа пользователей от вермени';
      state.total = 0;
    });
    builder.addCase(fetchStatsActivityData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = 'Error fetch statsActivityData';
      state.description = '';
      state.total = 0;
    });
  },
});

const statsEventsSlice = createSlice({
  name: 'statsEvents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStatsEventsData.pending, (state) => {
      state.loading = true;
      state.data = [];
      state.error = null;
      state.description = '';
      state.total = 0;
    });
    builder.addCase(fetchStatsEventsData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      state.description = 'В данном разделе предоставляется график зависимости общего числа пользователей от вермени';
      state.total = 0;
    });
    builder.addCase(fetchStatsEventsData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = 'Error fetch statsEventsData';
      state.description = '';
      state.total = 0;
    });
  },
});

export default {
  users: statsUsersSlice.reducer,
  newUsers: statsNewUsersSlice.reducer,
  sessions: statsSessionsSlice.reducer,
  activity: statsAcitivitySlice.reducer,
  events: statsEventsSlice.reducer,
};
