import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.scss';
import useRouting from './App.router';

function App() {
  const routing = useRouting();

  return (
    <React.StrictMode>
      <RouterProvider router={routing.router}></RouterProvider>
    </React.StrictMode>
  );
}

export default App;
