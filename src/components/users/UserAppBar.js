import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';
import validator from 'validator';

import { startSaveUser } from '../../actions/users';


export const UserAppBar = () => {

    
    const dispatch = useDispatch();
    const { active } = useSelector( state => state.users );

    

    



    const handleSave = () => {
        if( isFormValid() ){
            dispatch( startSaveUser( active ) );
        }
    }

    const isFormValid = () => {
        if( active.name.length === 0 ){
            Swal.fire('Warning', 'Name is required' , 'warning');
            return false;
        } else if( !validator.isEmail( active.email ) ){
                Swal.fire('Warning', 'Email is not valid' , 'warning');
                return false;
        }
        return true;
    }
    
    return (
        <div className="notes__appbar">
           
            

            <div>
                <button 
                className="btn btn-primary-3"
                onClick={ handleSave }
                >
                    Save
                </button>
                
            </div>
        </div>
    )
}