import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import counterApp from './reducers';

const store = createStore(counterApp);
const rootElement = document.getElementById('root');


// 렌더링 시 Redux컴포넌트인 Provider에 store를 설정하면 그 하위 컴포넌트들에 따로 parent-child구조로 전달해주지 않아도
// connect될 때 store에 접근 할 수 있게 해준다.
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    rootElement
);
