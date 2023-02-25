import router from 'business/router';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
