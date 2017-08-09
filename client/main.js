import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Router, Route} from 'react-router-dom';

import { Reducer } from './reducers/reducer.js'
import App_sale from './list2/App_sale.jsx';
import App_begin from './list1/App_begin.jsx';


const store = createStore(Reducer);

    render(
        <Provider store={store}>
            <BrowserRouter>
                <div>

                    <Route path='/list1' component={App_begin}/>
                    <Route path="/list2" component={App_sale}/>
                </div>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
store.subscribe(()=> {
    console.log('Store subscribe: ', store.getState());
});
