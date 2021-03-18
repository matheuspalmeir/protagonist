import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './components/themes/globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <App />
	<GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
  );
  
  
//import reportWebVitals from './reportWebVitals';
//reportWebVitals();
