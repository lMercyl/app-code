import { createSlice } from '@reduxjs/toolkit';

import { AuthState } from './typesAuth';
import { login, logout, checkAuth } from './apiAuth';

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isAuthenticated = false;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(login.rejected, (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = 'Error auth login';
    });
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(logout.rejected, (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = 'Error auth logout';
    });
    builder.addCase(checkAuth.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(checkAuth.fulfilled, (state) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(checkAuth.rejected, (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = 'Error auth checkAuth';
    });
  },
});

export default authSlice.reducer;
