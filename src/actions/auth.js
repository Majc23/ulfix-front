import Swal from 'sweetalert2';

import { types } from '../types/types';
import { startLoading, finishLoading } from './ui';
import { createUser, loginUser, getUsers } from "../API";

export const startLoginEmailPassword = (email, password) => {
    return async (dispatch) => {

        dispatch( startLoading() );

        let accessToken = await loginUser(email, password ).catch( e => {
            console.log(e);
            dispatch( finishLoading() );
            Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error');
        });
        console.log(accessToken);
        if(accessToken !== undefined){
            localStorage.setItem("acessToken", JSON.stringify(accessToken));
            
            dispatch(
                login( accessToken._id, accessToken.name )
            );  
            
            const users = await getUsers( accessToken.accessToken );

            dispatch( setUsers( users.users ) );
            dispatch( finishLoading() );
        }
    }
}

export const startRegisterWithEmailPasswordName = ( name,email,password ) => {
    return ( dispatch ) => {
        createUser(name,email,password).then( async( {name, _id, email} ) => {
            const accessToken = await loginUser(email, password );
            localStorage.setItem("acessToken", JSON.stringify(accessToken));
            
            dispatch(
                login( _id, name )
            );  
            const users = await getUsers( accessToken.accessToken );

            dispatch( setUsers( users.users ) );

        })
        .catch( e => {
                console.log(e);
                Swal.fire('Error', 'Ese correo ya fue registrado', 'error');
        })

    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});


export const logout = () => ({
    type: types.logout
});

export const setUsers = ( x ) => ({
    type: types.usersLoad,
    payload: x
});
