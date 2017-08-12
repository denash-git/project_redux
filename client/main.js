import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Match, Route} from 'react-router-dom';
import thunk from 'redux-thunk';

import App from './list/App.jsx';
import Hat from './hat/Hat.jsx';
import * as reducers from './reducers/reducer.js';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

    render(
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Hat />
                    <Route path='/list/:name' component={App}/>
                </div>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
store.subscribe(()=> {
    console.log('Store subscribe: ', store.getState());
});
