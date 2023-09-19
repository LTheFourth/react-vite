import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.scss';
import { router } from './App.router';

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  );
}

export default App;
