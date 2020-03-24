import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import 'antd-mobile/dist/antd-mobile.css'

// 自己的全局样式
import './assets/css/common.scss'

// redux
import store from './store'

import { Provider } from 'react-redux'


ReactDOM.render(
<Provider store={store}> 
    <App />
</Provider>
, document.getElementById('root'));


// serviceWorker.unregister();
