import {combineReducers, createStore} from 'redux'
import {itemsReducer} from './reducers'

const rootReducer = combineReducers({
    items: itemsReducer
});

const configureStore = createStore(rootReducer);

export default configureStore;