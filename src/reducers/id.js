import {ID_CAPTURE} from '../constants/actionTypes'

export const idCaptureEvent = (idCapture = null, action) => {
    switch (action.type) {
        case ID_CAPTURE:
            return action.payload;
            
        default: // need this for default case
        return idCapture 
    }
}