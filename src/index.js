import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import WebFont from 'webfontloader';

WebFont.load({
  google:{
    families: ['Roboto Mono:400, 500']
  }
})

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(<App />, document.getElementById('root'));
