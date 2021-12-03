import { types } from '../types/types';
const initialState = {
    uid: null,
    name: null,
    login: false
}
export const authReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                login: true
            }

        case types.logout:
                return {
                    uid: null,
                    name: null,
                    login: false
                 }
    
        default:
            return state;
    }

}

