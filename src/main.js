import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppContainer from './containers/AppContainer';
import Wooju from './components/Wooju/Wooju'
import Hojin from './components/Hojin/Hojin'
import Jisu from './components/Jisu/Jisu'
import Gray from './components/Gray/Gray'
import Home from './components/Home/Home'
import counterApp from './reducers';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router'

const store = createStore(counterApp);
const rootElement = document.getElementById('root');


// 렌더링 시 Redux컴포넌트인 Provider에 store를 설정하면 그 하위 컴포넌트들에 따로 parent-child구조로 전달해주지 않아도
// connect될 때 store에 접근 할 수 있게 해준다.
ReactDOM.render(
    <Provider store = {store}>
        <Router history={browserHistory}>
          <Route path='/' component={AppContainer}>
            <IndexRoute component={Home} />
            <Route path="wooju" component={Wooju} />
            <Route path="hojin" component={Hojin} />
            <Route path="jisu" component={Jisu} />
            <Route path="gray" component={Gray} />
          </Route>
        </Router>
    </Provider>,
    rootElement
);
