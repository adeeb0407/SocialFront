import { combineReducers } from 'redux'
import posts from './postState'
import {idCaptureEvent} from './id'

export const rootReducer = combineReducers({
    posts, 
    idCaptureEvent,
}) // reduers in main index.js is coming form here