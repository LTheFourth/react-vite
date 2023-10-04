import { RouterProvider } from 'react-router-dom';
import useRouting from './App.router';

export default function BrowserRouter() {
  const routing = useRouting();

  return <RouterProvider router={routing.router}></RouterProvider>;
}
