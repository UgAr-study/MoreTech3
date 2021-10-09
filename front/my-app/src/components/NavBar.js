import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../redux/actions/authAction";
import {Link} from "react-router-dom";
import {useIsAuth} from "../context/AuthContextProvider";

export const NavBar = () => {


    const {isAuth, setIsAuth}=useIsAuth()
    console.log(isAuth, setIsAuth)

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                   <Typography><Link to={'/'}>All Datasets</Link></Typography>
                    {
                        isAuth ?
                        <Typography><Link to={'/profile'}>My Datasets</Link></Typography>
                        :
                        true
                    }
                    {
                        isAuth ? 
                        (<Typography onClick={()=>setIsAuth(false)}><Link to={'/'}>Logout</Link></Typography>)
                        :
                        (<Typography><Link to={'/login'}>Login</Link></Typography>)
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}
