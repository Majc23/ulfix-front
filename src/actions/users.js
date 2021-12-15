import { getUsers, upDateUser, deleteUser } from "../API";
import { types } from "../types/types";
import { logout } from "./auth";

export const startLoadingUsers = ( accessToken ) => {
    return async( dispatch ) => {
        
        const users = await getUsers( accessToken );
        let array1 = users.users;
        dispatch( setUsers( array1 ) );

    }
}

export const setUsers = ( users ) => ({
    type: types.usersLoad,
    payload: users
});

export const activeUser = ( id, user ) => ({
    type: types.usersActive,
    payload: {
        id,
        ...user
    }
});



export const startSaveUser = ( user ) => {
    return async( dispatch ) => {

        const { email, name, password, id } = user;
        let access = JSON.parse(localStorage.getItem("acessToken"));
       let newInf = await upDateUser(email,name, password, id, access.accessToken); 
        console.log(newInf)

        dispatch( refreshInf(id, newInf ) );
    }
}

export const refreshInf = ( id, user ) => ({
    type: types.usersUpdated,
    payload: {
        id,
        user: {
            id,
            ...user
        }
    }
});


export const startDeleting = ( id ) => {
    return async( dispatch ) => {
         
        let access = JSON.parse(localStorage.getItem("acessToken"));
        await deleteUser(id, access.accessToken);

        
        dispatch( deleteNote(id) );
        dispatch( logout() );

    }
}

export const deleteNote = (id) => ({
    type: types.usersDelete,
    payload: id
});
