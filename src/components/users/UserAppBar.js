import React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { startSaveNote, startUploading } from '../../actions/notes';
//import Swal from 'sweetalert2';

//import { useForm } from '../../hooks/useForm';

//import { activeNote } from '../../actions/notes';

export const UserAppBar = () => {

    /*
    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes );

    //console.log(active);
    const { body, title, shelf } = active;

    const [ formValues, handleInputChange, reset ] = useForm( shelf );

    //console.log(formValues);
    //const {  body, title, shelf } = formValues;
    

    //const { shelf } = formValues;

    const activeId = useRef( active.id );
    const activeShelf = useRef( active.shelf );
    const activeTitle = useRef( active.title );
    const activeBody = useRef( active.body );
    const activeUrl = useRef( active.url );

    useEffect(() => {
        //|| active.shelf !== activeShelf.current
        if ( active.id !== activeId.current ) {
            reset( active );
            activeId.current = active.id
        }
        
        if ( active.shelf !== activeShelf.current ) {
            reset( active );
            activeShelf.current = active.shelf
        }
        if ( active.title !== activeTitle.current ) {
            reset( active );
            
            activeTitle.current = active.title
        }
        if ( active.body !== activeBody.current ) {
            reset( active );
            activeBody.current = active.body
        }
        if ( active.url !== activeUrl.current ) {
            reset( active );
            activeUrl.current = active.url
        }

    }, [active, reset])

    useEffect(() => {
        
        
        dispatch( activeNote( formValues.id, { ...formValues } ) );
        

    }, [formValues, dispatch])

    
    


    const handleSave = () => {
        if( body !== '' && title !== ''){
            dispatch( startSaveNote( active ) );
            
            //console.log(save);
        } else if( body === '' && title === '' ){
                Swal.fire('Warning', 'Actualizar el Titulo y Overview' , 'warning');
        }
        else if (body === '' && title !== ''){
            Swal.fire('Warning', 'Actualizar el Overview' , 'warning');
        }
        else if (body !== '' && title === ''){
            Swal.fire('Warning', 'Actualizar el Titulo' , 'warning');
        }
        

            //dispatch( startSaveNote( active ) );
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if ( file ) {
            dispatch( startUploading( file ) );
        }
    }

    const handleChangeType = (e) => {
       
        handleInputChange(e);
    }
    */
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