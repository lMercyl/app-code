import { StatsState } from './typesStats';

export const selectorStatsUsers = (state: { statsUsers: StatsState }) => state.statsUsers;
export const selectorStatsNewUsers = (state: { statsNewUsers: StatsState }) => state.statsNewUsers;
export const selectorStatsSessions = (state: { statsSessions: StatsState }) => state.statsSessions;
export const selectorStatsActivity = (state: { statsActivity: StatsState }) => state.statsActivity;
export const selectorStatsEvents = (state: { statsEvents: StatsState }) => state.statsEvents;
