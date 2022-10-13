import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoApp from './DemoApp';
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DemoApp />
        <App />
    </React.StrictMode>);