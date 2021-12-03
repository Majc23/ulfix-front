import React from 'react';
import { BrowserRouter as Router,Switch,Redirect } from 'react-router-dom';
import { useSelector} from 'react-redux';


import { AuthRouter } from './AuthRouter';


import { SigninRouter } from './SigninRouter';
//import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
//import { startLoadingNotes } from '../actions/notes';
//import { Carga } from '../components/bookshelf/Carga';

export const AppRouter = () => {

    const { login } = useSelector( state => state.auth );
    /*
    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);



    useEffect(() => {
        console.log(auth.uid);
        if(auth?.uid){
            //dispatch( login( auth.uid, user.displayName ) );
                setIsLoggedIn( true );
        } else {
            setIsLoggedIn( false );
        }
        
    }, [   setIsLoggedIn ])

    */
   

    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ login }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ login }
                        path="/"
                        component={ SigninRouter }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}