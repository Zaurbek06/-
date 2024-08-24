import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './components/Redux/state';


import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    
  root.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>
  );
  }

rerenderEntireTree(store.getState());


store.subscribe(rerenderEntireTree);


