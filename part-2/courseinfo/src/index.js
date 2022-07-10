import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import course from './data/course';
//import notes from './data/notes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App course={course}/>
  </React.StrictMode>
);

