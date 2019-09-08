// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
// 引入Provider
import { Provider } from 'react-redux';
import { dealFn, store } from './store';
import App from './App';

import './index.css';

let DealApp = dealFn(App)
ReactDOM.render(
		<Provider store={store}>
			<HashRouter >
				{/*渲染高阶组件*/}
				<Route path="/" component={DealApp}></Route>
			</HashRouter>
		</Provider>
	, document.getElementById('root')); 