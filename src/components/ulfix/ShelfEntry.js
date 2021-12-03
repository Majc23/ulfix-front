import React from 'react';
import { useDispatch } from 'react-redux';

import { activeUser } from '../../actions/users';

export const ShelfEntry = ({  name, email, createdAt, updatedAt, _id }) => {

    const dispatch = useDispatch();

    const handleEntryClick = () => {
        dispatch( 
            activeUser( _id, {
                name, email, createdAt, updatedAt
            })
        );
    }

    return (
        <div 
            className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
            onClick={ handleEntryClick }
        >
            
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { name }
                </p>
                
            </div>

           

        </div>
    )
}