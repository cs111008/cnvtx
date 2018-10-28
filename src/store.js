import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../src/reducers/index'
import { BrowserRouter } from 'react-router-dom'
import { routerMiddleware } from 'react-router-redux';

const middleWares = [
    thunk,
    routerMiddleware(BrowserRouter)]

const store = createStore(
	reducers,	
	compose(
        applyMiddleware(
            ...middleWares
        ),
        window.devToolsExtension()
    )
)

export default store;
