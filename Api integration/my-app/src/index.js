import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux';
import store from './app/store.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Loading from './Loading';

const App= React.lazy(() => import('./App'));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Suspense fallback={<Loading/>}>
        <App/>
      </Suspense>
    
    </Provider>
    
    


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
