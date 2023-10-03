/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.scss';
import useRouting from './App.router';
// import { useGlobalState } from './shared/utils/hooks/hooks';
// import authSession from './core/auth/auth-session.service';
// export const GlobalContext = React.createContext<any>(null);

function App() {
  // const globalState = {
  //   isLoggedIn: useGlobalState<boolean>(authSession.isLoggedIn),
  // };
  const routing = useRouting();

  return (
    <React.StrictMode>
      <RouterProvider router={routing.router}></RouterProvider>
    </React.StrictMode>
  );
}

export default App;
