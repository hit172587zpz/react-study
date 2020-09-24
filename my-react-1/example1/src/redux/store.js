import {createStore,applyMiddleware} from 'redux'
import {comments, commnets} from './reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(
    commnets,
    composeWithDevTools(applyMiddleware(thunk))
    )