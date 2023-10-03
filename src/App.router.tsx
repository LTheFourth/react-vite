import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';
import { Layout } from '@shared/components/Layout';
import { HomePageComponent } from 'src/pages/Home';
import { DetailPageComponent } from './pages/Detail';
import { UserPageComponent } from './pages/User';
import { LoginPageComponent } from './pages/Auth/Login';
import { useContext, useEffect } from 'react';

export default function useRouting() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to='/auth' />,
      // element: <Layout />,
      // element: false ? <Layout /> : <Navigate to='/auth' />,
      children: [
        {
          index: true,
          element: <Navigate to='/home' />,
        },
        {
          path: 'home',
          element: <HomePageComponent />,
        },
        {
          path: 'user',
          element: <UserPageComponent />,
        },
        {
          path: 'create',
          element: <DetailPageComponent />,
        },
        {
          path: 'detail/:id',
          element: <DetailPageComponent isDetail={true} />,
        },
      ],
      errorElement: <Navigate to='/' />,
    },
    {
      path: '/auth',
      element: <Outlet />,
      // element: isLoggedIn ? <Navigate to='/' /> : <Outlet />,
      children: [
        {
          index: true,
          element: <Navigate to='/auth/login' />,
        },
        {
          path: 'login',
          element: <LoginPageComponent />,
        },
        {
          path: 'register',
          element: <>register page Here</>,
        },
      ],
    },
  ]);

  return { router };
}
