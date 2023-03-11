import router from 'business/router';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

const App: React.FC = () => {
  console.log(
    '%cJulien Rousset | PlayGround',
    'padding: 3px; background-color: white; color: #101010',
  );
  console.log(
    '%cMail          %cjulien.rousset01@gmail.com',
    'padding: 3px; background-color: white; color: #101010',
    ' padding: 3px; background-color: white; color: black',
  );
  console.log(
    '%cPhone         %c+33608957135',
    'padding: 3px; background-color: white; color: #101010',
    ' padding: 3px; background-color: white; color: black',
  );
  console.log(
    '%cTwitter       %c@JulienRst',
    'padding: 3px; background-color: white; color: #101010',
    ' padding: 3px; background-color: white; color: black',
  );

  return <RouterProvider router={router} />;
};

export default App;
