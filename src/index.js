import React from 'react';
import ReactDOM from 'react-dom/client';
// import Timeline from './Timeline'; // Import your component

import App from './App';
import './index.css'; // Optional global styles for the app

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const root = ReactDOM.createRoot(document.getElementById('timeline-root'));
// root.render(
//   <React.StrictMode>
//     <Timeline />
//   </React.StrictMode>
// );

