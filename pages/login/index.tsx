import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

import { getStore } from 'store';
import { login, checkAuth } from 'store/auth/apiAuth';
import { selectIsAuthenticated } from 'store/auth/selectorAuth';
import { useAppSelector } from 'hooks/selectorHooks';
import { useAppDispatch } from 'hooks/selectorHooks';

import styles from './Login.module.scss';

import LogoIcon from '../../../public/logo.svg';

import TextField from 'components/Elements/TextField';
import Button from 'components/Elements/Button';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const router = useRouter();

  const {
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmitLogin: SubmitHandler<LoginFormData> = (data) => {
    const { email, password } = data;

    dispatch(login(data));

    if (isAuthenticated) {
      router.push('/dashboard');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.login}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <LogoIcon />
          </div>
          <div className={styles.name}>
            <span>Metrics</span>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmitLogin)} className={styles.form}>
          <div className={styles.controller}>
            <TextField
              type="email"
              placeholder="Введите логин"
              errors={errors.email}
              onChangeInput={(event) => setValue('email', event.target.value)}
            />
          </div>
          <div className={styles.controller}>
            <TextField
              type="password"
              placeholder="Введите пароль"
              errors={errors.password}
              onChangeInput={(event) => setValue('password', event.target.value)}
            />
          </div>
          <div className={styles.controller}>
            <Button schemas="middle" type="submit">
              Войти
            </Button>
          </div>
        </form>
        <div className={styles.bottom}>
          <div className={styles.text}>
            <span>Сделано в Appvelox © 2023</span>
          </div>
          <div className={styles.text}>
            <span>Версия 1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const store = getStore();
  const { dispatch } = store;

  const token = context.req.headers.cookie;
  if (token) {
    try {
      await dispatch(checkAuth(token)).unwrap();
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        },
      };
    } catch (error) {}
  }

  return { props: {} };
};

export default LoginPage;
