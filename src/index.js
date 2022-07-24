import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/search/App';

// ReactDOM.render(<App />, document.getElementById('root'));
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />)