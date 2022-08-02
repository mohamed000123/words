import {TaskReducer} from './Reducers'
import {createStore  , applyMiddleware} from 'redux'
import thunk from "redux-thunk";


export const store = createStore(TaskReducer, applyMiddleware(thunk));
