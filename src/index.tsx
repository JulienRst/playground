// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'ui/main.scss';

const rootElem = document.getElementById('root');
if (!rootElem) {
  throw new Error('root elem not found');
}

const root = ReactDOM.createRoot(rootElem);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

root.render(<App />);
