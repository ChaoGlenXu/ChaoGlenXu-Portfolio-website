import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

//ReactDOM.render(<App />, document.getElementById('root'));  //code for React 17 verson, not supported anymore and need following newer code

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);