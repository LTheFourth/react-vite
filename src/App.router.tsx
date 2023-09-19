import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@shared/components/Layout';
import { HomePage } from 'src/pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
    ],
    errorElement: <div>HEHE, 404</div>,
  },
]);
