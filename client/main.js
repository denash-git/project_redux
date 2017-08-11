import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Match, Route} from 'react-router-dom';
import thunk from 'redux-thunk';

import App from './list/App.jsx';
import Hat from './hat/Hat.jsx';
//import App_sale from './list2/App_sale.jsx';
//import App_begin from './list1/App_begin.jsx';
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


/*<Route path='/list1' component={App_begin}/>
<Route path="/list2" component={App_sale}/>*/