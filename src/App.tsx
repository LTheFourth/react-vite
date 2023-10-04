/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext } from 'react';
import './App.scss';
import authSession from './core/auth/auth-session.service';
import BrowserRouter from './Browser';
import { useGlobalState } from './shared/utils/hooks/hooks';

export const GlobalContext = createContext<any>(null);
function App() {
  const globalState = {
    isAuth: useGlobalState(authSession.isLoggedIn),
  };

  return (
    <GlobalContext.Provider value={globalState}>
      <BrowserRouter />
    </GlobalContext.Provider>
  );
}

export default App;
