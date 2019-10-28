import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import "./NavLinks.scss";

const NavLinks = (props) =>{
    return(
    <AppBar  position='absolute' color="primary" className="AppBar">
        <Toolbar className="Toolbar">
          <Typography variant="h6" color="inherit" className="Typography">
            Weather App
          </Typography>
          <div className="button-container">
            <Link to="/"><Button color="inherit">Home</Button></Link>
            <Link to="/favorites"><Button color="inherit">Favorites</Button></Link>
          </div>
        </Toolbar>
    </AppBar>
    )
}

export default NavLinks