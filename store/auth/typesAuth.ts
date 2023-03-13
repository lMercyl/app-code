export interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface LoginData {
  email: string;
  password: string;
}
