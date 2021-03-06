import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import WebFont from 'webfontloader';

WebFont.load({
   google: {
     families: ['Poppins:300,400,700', 'sans-serif','Aldrich:300,400,700','Roboto Slab']
   }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
