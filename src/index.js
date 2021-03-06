import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WhiteBoard from './WhiteBoard';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import moduleReducer from "./reducers/moduleReducer";
import lessonReducer from "./reducers/lessonReducer";
import topicReducer from "./reducers/topicReducer";
import widgetReducer from "./reducers/widgetReducer";

const reducers = combineReducers({
    moduleReducer, lessonReducer, topicReducer, widgetReducer
});

const store = createStore(reducers);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <WhiteBoard/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
