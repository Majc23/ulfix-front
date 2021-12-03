import { types } from '../types/types';

const initialState = {
    users: [],
    active: null,
    save: false
}


export const usersReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case types.usersActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        

        case types.usersLoad:
            return {
                ...state,
                users: [ ...action.payload ]
            }
    
        case types.usersUpdated:
            return {
                ...state,
                users: state.users.map(
                    user => user.id === action.payload.id
                        ? action.payload.user
                        : user
                )
            }

        case types.usersDelete:
            return {
                ...state,
                active: null,
                users: state.users.filter( user => user.id !== action.payload )
            } 
        
        case types.usersChangeSave:
            return {
                ...state,
                save: true
            }

        case types.usersLogoutCleaning:
            return {
                ...state,
                active: null,
                users: []
            }

        default:
            return state
    }


}