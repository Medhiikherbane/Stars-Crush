import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Utilisez un chemin relatif correct
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css'; // Assurez-vous que ce chemin est correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ParallaxProvider>
        <App />
    </ParallaxProvider>
);

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from '/App.css'
// import '../src/index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
