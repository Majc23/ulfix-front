import { getUsers } from "../API";
import { types } from "../types/types";

export const startLoadingUsers = ( accessToken ) => {
    return async( dispatch ) => {
        
        const users = await getUsers( accessToken );
        let array1 = users.users;
        console.log(array1);
        dispatch( setUsers( array1 ) );
        console.log(array1);

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

export const activeNote = ( id, user ) => ({
    type: types.usersActive,
    payload: {
        id,
        ...user
    }
});
/*
export const startDeleting = ( id ) => {
    return async( dispatch, getState ) => {
         
        const uid = getState().auth.uid;
        await db.doc(`${ uid }/bookshelf/notes/${ id }`).delete();

        dispatch( deleteNote(id) );

    }
}

export const deleteNote = (id) => ({
    type: types.usersDelete,
    payload: id
});*/