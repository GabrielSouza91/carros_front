import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {thunk as ReduxThunk} from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

let middleware = [ReduxThunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));