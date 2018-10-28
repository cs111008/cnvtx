import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import userReducer from './userReducer';

const reducers = combineReducers({
    routing:routerReducer,
    userReducer
});

export default reducers