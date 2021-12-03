import React from 'react'
import { useSelector } from 'react-redux';

import { ShelfEntries } from "./ShelfEntries";
import { NothingSelected } from "./NothingSelected";
import { UserScreen } from "../users/UserScreen";

export const Usuarios = () => {

    const { active } = useSelector( state => state.users );

    return (
        <div 
            className="journal__main-content animate__animated animate__fadeIn animate__faster"
        >
            
            <ShelfEntries /> 


            <main>

                {
                    ( active ) 
                        ? ( <UserScreen /> )
                        : ( <NothingSelected /> )
                }

            </main>


        </div>
    )
}
