import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@shared/components/Layout';
import { HomePageComponent } from 'src/pages/Home';
import { DetailPageComponent } from './pages/Detail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <HomePageComponent />,
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
    errorElement: <div>HEHE, 404</div>,
  },
]);
