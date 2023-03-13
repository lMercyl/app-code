import axios from 'axios';
import Cookies from 'js-cookie';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginData } from './typesAuth';

const TOKEN_COOKIE_NAME = 'my-jwt-token';

export const login = createAsyncThunk('auth/login', async (payload: LoginData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`${process.env.url}/auth/login`, payload);
    const { access_token } = data;
    Cookies.set(TOKEN_COOKIE_NAME, access_token);
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async ({}, { rejectWithValue }) => {
  try {
    await axios.get(`${process.env.url}/auth/logout`);
    Cookies.remove(TOKEN_COOKIE_NAME);
  } catch (error: any) {
    Cookies.remove(TOKEN_COOKIE_NAME);
    return rejectWithValue(error.response.data.message);
  }
});

export const checkAuth = createAsyncThunk('auth/checkAuth', async (token: string, { rejectWithValue }) => {
  try {
    await axios.get(`${process.env.url}/auth/me`, {
      headers: {
        Cookie: token,
      },
    });
  } catch (error: any) {
    Cookies.remove(TOKEN_COOKIE_NAME);
    return rejectWithValue(error.response.data.message);
  }
});
