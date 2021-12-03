import React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { startSaveNote, startUploading } from '../../actions/notes';
//import Swal from 'sweetalert2';

//import { useForm } from '../../hooks/useForm';

//import { activeNote } from '../../actions/notes';

export const UserAppBar = () => {

    return (
        <div className="notes__appbar">
            {//<span>28 de agosto 2020</span>
            }
            

            <div>
                <button 
                className="btn btn-primary-3"
                    
                >
                    Save
                </button>
                {
                        /*Redondear el boton
                        no se nota el cambio
                            desactivar boton cuando no esten llenos los campos

                        */
                    }
            </div>
        </div>
    )
}
