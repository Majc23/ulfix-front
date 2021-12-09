import React from 'react'
import { useSelector } from 'react-redux';

import { ShelfEntry } from "./ShelfEntry";

export const ShelfEntries = () => {

    const { users } = useSelector( state => state.users );
    
    return (
        
            
          <div className="journal__entrieshelf">  
            <h2 className="entries">
            Usuarios
            </h2>
            {
                users
                  .map( user => (
                    <ShelfEntry 
                        key={ user.id }
                        { ...user }
                    />
                ))
            }
         </div>

        
    )
}
