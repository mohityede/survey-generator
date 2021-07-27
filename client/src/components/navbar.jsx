import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import useStyles from './style';

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.navRoot}>
            <AppBar position="static">
                <Toolbar>
                    <NavLink to='/' >
                        <Typography variant="h6" className={classes.title}>
                            Survey Genrator
                    </Typography>
                    </NavLink>
                    <NavLink to='/create/userDetails' >
                        <Button className={classes.menuButton} variant="contained" color="primary">Create Survey</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div>
    );
}
