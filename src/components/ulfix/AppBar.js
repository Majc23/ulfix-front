import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout } from '../../actions/auth';
/*
import { startSaveNote, startUploading } from '../../actions/notes';
import Swal from 'sweetalert2';

import { useForm } from '../../hooks/useForm';

import { activeNote } from '../../actions/notes';
*/

export const AppBar = () => {

    const dispatch = useDispatch();

    const hanleLogout = () => {
        dispatch( logout() )
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="nav-link" to='/'>
                    <img src='./home.png' alt='IconHome' width='50'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/users'>Lista de usuarios</Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link"  onClick={ hanleLogout }>Salir</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}