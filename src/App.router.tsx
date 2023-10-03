import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Layout } from '@shared/components/Layout';
import { HomePageComponent } from 'src/pages/Home';
import { DetailPageComponent } from './pages/Detail';
import { UserPageComponent } from './pages/User';
import useAuth from './core/auth/auth.hook';

export default function useRouting() {
  const auth = useAuth();
  const router = createBrowserRouter([
    {
      path: '/',
      element: auth.isLogedIn ? <Layout /> : <Navigate to='/auth' />,
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
      path: 'login',
      element: <>Login page Here</>,
    },
  ]);

  return { router };
}
