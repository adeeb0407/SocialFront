import { combineReducers } from 'redux'
import posts from './postState'
import {idCaptureEvent} from './id'
import {authreducer} from './auth'

export const rootReducer = combineReducers({
    posts, 
    idCaptureEvent,
    authreducer,

}) // reduers in main index.js is coming form here