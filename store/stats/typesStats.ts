export interface StatsData {
  date: string;
  value: number;
}

export interface StatsState {
  loading: boolean;
  data: StatsData[];
  error: string | null;
  description: string;
  total: number;
}

export interface PayloadStats {
  start: string;
  end: string;
  group: '1m' | '1h' | '1d' | '1w' | '1M';
}
