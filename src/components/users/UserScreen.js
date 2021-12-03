import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { activeNote } from '../../actions/users';
import { UserAppBar } from './UserAppBar';
//import { activeNote, startDeleting } from '../../actions/users';

export const UserScreen = () => {

    const dispatch = useDispatch();
    const { active:user } = useSelector( state => state.users );
    const { uid:idLogin } = useSelector( state => state.auth );
    const [ formValues, handleInputChange, reset ] = useForm( user );
    const { name, email, id, createdAt, updatedAt } = formValues;

    const activeId = useRef( user.id );
    const activeEmail = useRef( user.email  );
    const activeName = useRef( user.name  );
    const activeCreacte = useRef( user.createdAt );
    const activeUpdate = useRef( user.updatedAt  );

    useEffect(() => {
        //|| note.shelf !== activeShelf.current
        if ( user.id !== activeId.current  ) {
            reset( user );
            activeId.current = user.id
        }
        if ( user.email !== activeEmail.current  ) {
            reset( user );
            activeEmail.current = user.email
        }
        if ( user.name !== activeName.current  ) {
            reset( user );
            activeName.current = user.name
        }
        if ( user.createdAt !== activeCreacte.current  ) {
            reset( user );
            activeCreacte.current = user.createdAt 
        }
        if ( user.updatedAt !== activeUpdate.current  ) {
            reset( user );
            activeUpdate.current = user.updatedAt
        }

    }, [user, reset])

    useEffect(() => {
        
        dispatch( activeNote( formValues.id, { ...formValues } ) );

    }, [formValues, dispatch])
    /*
    const handleDelete = () => {
        dispatch( startDeleting( id ) );
    }*/

    return (
        <div className="notes__main-content">
             {
                    (idLogin === id) 
                    && (
                        <UserAppBar />
                    )
                }

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Name"
                    className="notes__title-input"
                    autoComplete="off"
                    name="name"
                    value={ name }
                    onChange={ handleInputChange }
                    
                />

                <input 
                    type="text"
                    placeholder="Email"
                    className="notes__title-input"
                    autoComplete="off"
                    name="email"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <p>Fecha de creacion: { createdAt }</p>
                <p>Fecha de actualizacion: { updatedAt }</p>
                


            </div>

                {
                    (idLogin === id) 
                    && (
                        <button className="btn btn-danger">Delete</button>
                    )
                }
           
            

        </div>
    )
}