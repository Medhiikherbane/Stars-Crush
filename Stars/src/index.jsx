// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { ParallaxProvider } from 'react-scroll-parallax';
// import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <ParallaxProvider>
//       <App />
//     </ParallaxProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ParallaxProvider>
        <App />
    </ParallaxProvider>
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
