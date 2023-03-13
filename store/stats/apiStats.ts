import axios from 'axios';
import Cookies from 'js-cookie';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { PayloadStats } from './typesStats';

export const fetchStatsUsersData = createAsyncThunk(
  'fetchStats/fetchStatsUsersData',
  async (payload: PayloadStats, { rejectWithValue }) => {
    try {
      const token = Cookies.get('my-jwt-token');
      const { data } = await axios.get(`${process.env.url}/stats/users`, {
        params: {
          start: payload.start,
          end: payload.end,
          group: payload.group,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const fetchStatsNewUsersData = createAsyncThunk(
  'fetchStats/fetchStatsNewUsersData',
  async (payload: PayloadStats, { rejectWithValue }) => {
    try {
      const token = Cookies.get('my-jwt-token');
      const { data } = await axios.get(`${process.env.url}/stats/new_users`, {
        params: {
          start: payload.start,
          end: payload.end,
          group: payload.group,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const fetchStatsSessionsData = createAsyncThunk(
  'fetchStats/fetchStatsSessionsData',
  async (payload: PayloadStats, { rejectWithValue }) => {
    try {
      const token = Cookies.get('my-jwt-token');
      const { data } = await axios.get(`${process.env.url}/stats/sessions`, {
        params: {
          start: payload.start,
          end: payload.end,
          group: payload.group,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const fetchStatsActivityData = createAsyncThunk(
  'fetchStats/fetchStatsActivityData',
  async (payload: PayloadStats, { rejectWithValue }) => {
    try {
      const token = Cookies.get('my-jwt-token');
      const { data } = await axios.get(`${process.env.url}/stats/activity`, {
        params: {
          start: payload.start,
          end: payload.end,
          group: payload.group,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const fetchStatsEventsData = createAsyncThunk(
  'fetchStats/fetchStatsEventsData',
  async (payload: PayloadStats, { rejectWithValue }) => {
    try {
      const token = Cookies.get('my-jwt-token');
      const { data } = await axios.get(`${process.env.url}/stats/events`, {
        params: {
          start: payload.start,
          end: payload.end,
          group: payload.group,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
