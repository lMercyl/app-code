import React from 'react';
import { GetServerSideProps } from 'next';

import styles from './Dasboard.module.scss';

import { useAppDispatch, useAppSelector } from 'hooks/selectorHooks';
import { getStore } from 'store';
import { checkAuth } from 'store/auth/apiAuth';
import {
  selectorStatsUsers,
  selectorStatsNewUsers,
  selectorStatsSessions,
  selectorStatsActivity,
  selectorStatsEvents,
} from 'store/stats/selectorStats';
import {
  fetchStatsUsersData,
  fetchStatsNewUsersData,
  fetchStatsSessionsData,
  fetchStatsActivityData,
  fetchStatsEventsData,
} from 'store/stats/apiStats';
import { PayloadStats } from 'store/stats/typesStats';

import Layout from 'components/Layout';
import Calendar from 'components/Elements/Calendar';
import DropFilter from 'components/Elements/DropFilter';
import PeriodButton from 'components/Elements/PeriodButton';
import Chart from 'components/Elements/Chart';

const dataDropFilter = [
  {
    id: 1,
    text: 'Telegram',
  },
];

interface PeriodState {
  start: Date;
  end: Date;
}

const resetSelectPeriods = {
  today: false,
  tomorrow: false,
  week: false,
  year: false,
  period: false,
};

const Dashboard = () => {
  const [periodStats, setPeriodStats] = React.useState<PeriodState>({
    start: new Date(),
    end: new Date(),
  });

  const [selectPeriods, setSelectPeriod] = React.useState<any>({
    today: true,
    tomorrow: false,
    week: false,
    year: false,
    period: false,
  });

  const dispatch = useAppDispatch();
  const statsUsers = useAppSelector(selectorStatsUsers);
  const statsNewUsers = useAppSelector(selectorStatsNewUsers);
  const statsSessions = useAppSelector(selectorStatsSessions);
  const statsActivity = useAppSelector(selectorStatsActivity);
  const statsEvents = useAppSelector(selectorStatsEvents);

  const handleClickButtonToday = () => {
    setSelectPeriod({ ...resetSelectPeriods, today: true });
    setPeriodStats({
      start: new Date(),
      end: new Date(),
    });
  };

  const handleClickButtonTomorrow = () => {
    setSelectPeriod({ ...resetSelectPeriods, tomorrow: true });

    const end = new Date();
    const start = new Date();
    setPeriodStats({
      start: new Date(start.setDate(start.getDate() - 1)),
      end: new Date(end.setDate(end.getDate() - 1)),
    });
  };

  const handleClickButtonWeek = () => {
    setSelectPeriod({ ...resetSelectPeriods, week: true });

    const end = new Date();
    const start = new Date();
    setPeriodStats({
      start: new Date(start.setDate(start.getDate() - 7)),
      end: end,
    });
  };

  const handleClickButtonMonth = () => {
    setSelectPeriod({ ...resetSelectPeriods, month: true });

    const end = new Date();
    const start = new Date();
    setPeriodStats({
      start: new Date(start.setDate(start.getDate() - 30)),
      end: end,
    });
  };

  const handleClickButtonYear = () => {
    setSelectPeriod({ ...resetSelectPeriods, year: true });

    const end = new Date();
    const start = new Date();
    setPeriodStats({
      start: new Date(start.setDate(start.getDate() - 365)),
      end: end,
    });
  };

  const handleClickButtonPeriod = (start: Date | null, end: Date | null) => {
    if (!start || !end) {
      return;
    }

    setSelectPeriod({ ...resetSelectPeriods, period: true });

    setPeriodStats({
      start: start,
      end: end,
    });
  };

  const fetchTodayStats = (): PayloadStats => {
    return {
      start: periodStats.start.toISOString(),
      end: periodStats.end.toISOString(),
      group: '1h',
    };
  };

  const fetchTodayTomorrow = (): PayloadStats => {
    return {
      start: periodStats.start.toISOString(),
      end: periodStats.end.toISOString(),
      group: '1h',
    };
  };

  const fetchTodayWeek = (): PayloadStats => {
    return {
      start: periodStats.start.toISOString(),
      end: periodStats.end.toISOString(),
      group: '1d',
    };
  };

  const fetchTodayMonth = (): PayloadStats => {
    return {
      start: periodStats.start.toISOString(),
      end: periodStats.end.toISOString(),
      group: '1d',
    };
  };

  const fetchTodayYear = (): PayloadStats => {
    return {
      start: periodStats.start.toISOString(),
      end: periodStats.end.toISOString(),
      group: '1M',
    };
  };

  const fetchTodayPeriod = (): PayloadStats => {
    return {
      start: periodStats.start.toISOString(),
      end: periodStats.end.toISOString(),
      group: '1h',
    };
  };

  React.useEffect(() => {
    if (selectPeriods.today) {
      dispatch(fetchStatsUsersData(fetchTodayStats()));
      dispatch(fetchStatsNewUsersData(fetchTodayStats()));
      dispatch(fetchStatsSessionsData(fetchTodayStats()));
      dispatch(fetchStatsActivityData(fetchTodayStats()));
      dispatch(fetchStatsEventsData(fetchTodayStats()));
    }
  }, [selectPeriods.today, periodStats]);

  React.useEffect(() => {
    if (selectPeriods.tomorrow) {
      dispatch(fetchStatsUsersData(fetchTodayTomorrow()));
      dispatch(fetchStatsNewUsersData(fetchTodayTomorrow()));
      dispatch(fetchStatsSessionsData(fetchTodayTomorrow()));
      dispatch(fetchStatsActivityData(fetchTodayTomorrow()));
      dispatch(fetchStatsEventsData(fetchTodayTomorrow()));
    }
  }, [selectPeriods.tomorrow, periodStats]);

  React.useEffect(() => {
    if (selectPeriods.week) {
      dispatch(fetchStatsUsersData(fetchTodayWeek()));
      dispatch(fetchStatsNewUsersData(fetchTodayWeek()));
      dispatch(fetchStatsSessionsData(fetchTodayWeek()));
      dispatch(fetchStatsActivityData(fetchTodayWeek()));
      dispatch(fetchStatsEventsData(fetchTodayWeek()));
    }
  }, [selectPeriods.week, periodStats]);

  React.useEffect(() => {
    if (selectPeriods.month) {
      dispatch(fetchStatsUsersData(fetchTodayMonth()));
      dispatch(fetchStatsNewUsersData(fetchTodayMonth()));
      dispatch(fetchStatsSessionsData(fetchTodayMonth()));
      dispatch(fetchStatsActivityData(fetchTodayMonth()));
      dispatch(fetchStatsEventsData(fetchTodayMonth()));
    }
  }, [selectPeriods.month, periodStats]);

  React.useEffect(() => {
    if (selectPeriods.year) {
      dispatch(fetchStatsUsersData(fetchTodayYear()));
      dispatch(fetchStatsNewUsersData(fetchTodayYear()));
      dispatch(fetchStatsSessionsData(fetchTodayYear()));
      dispatch(fetchStatsActivityData(fetchTodayYear()));
      dispatch(fetchStatsEventsData(fetchTodayYear()));
    }
  }, [selectPeriods.year, periodStats]);

  React.useEffect(() => {
    if (selectPeriods.period) {
      dispatch(fetchStatsUsersData(fetchTodayPeriod()));
      dispatch(fetchStatsNewUsersData(fetchTodayPeriod()));
      dispatch(fetchStatsSessionsData(fetchTodayPeriod()));
      dispatch(fetchStatsActivityData(fetchTodayPeriod()));
      dispatch(fetchStatsEventsData(fetchTodayPeriod()));
    }
  }, [selectPeriods.period, periodStats]);

  return (
    <Layout>
      <div className={styles.top}>
        <div className={styles.periods}>
          <div className={styles.period}>
            <PeriodButton onClickButton={handleClickButtonToday} select={selectPeriods['today']}>
              Сегодня
            </PeriodButton>
          </div>
          <div className={styles.period}>
            <PeriodButton onClickButton={handleClickButtonTomorrow} select={selectPeriods['tomorrow']}>
              Вчера
            </PeriodButton>
          </div>
          <div className={styles.period}>
            <PeriodButton onClickButton={handleClickButtonWeek} select={selectPeriods['week']}>
              Неделя
            </PeriodButton>
          </div>
          <div className={styles.period}>
            <PeriodButton onClickButton={handleClickButtonMonth} select={selectPeriods['month']}>
              Месяц
            </PeriodButton>
          </div>
          <div className={styles.period}>
            <PeriodButton onClickButton={handleClickButtonYear} select={selectPeriods['year']}>
              Год
            </PeriodButton>
          </div>
          <div className={styles.period}>
            <Calendar select={selectPeriods['period']} onClickSubmit={handleClickButtonPeriod} />
          </div>
        </div>
        <div className={styles.dropFilter}>
          <DropFilter items={dataDropFilter} />
        </div>
      </div>
      <div className={styles.gridItem}>
        <Chart
          data={statsUsers.data}
          name="Пользователи"
          description="В данном разделе предоставляется график зависимости общего числа пользователей от вермени"
        />
      </div>
      <div className={styles.gridItem}>
        <Chart
          data={statsNewUsers.data}
          name="Новые пользователи"
          description="В данном разделе предоставляется график зависимости общего числа пользователей от вермени"
        />
      </div>
      <div className={styles.gridItem}>
        <Chart
          data={statsSessions.data}
          name="Сессии"
          description="В данном разделе предоставляется график зависимости общего числа пользователей от вермени"
        />
      </div>
      <div className={styles.gridItem}>
        <Chart
          data={statsActivity.data}
          name="Активность"
          description="В данном разделе предоставляется график зависимости общего числа пользователей от вермени"
        />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const store = getStore();
  const { dispatch } = store;

  const token = context.req.headers.cookie;
  if (token) {
    try {
      await dispatch(checkAuth(token)).unwrap();
    } catch (error) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  }

  return { props: {} };
};

export default Dashboard;
