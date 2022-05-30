import  React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const NavBar =  ()  => {
    const classes = useStyles();
    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" arial-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    A Click Market!
                </Typography>
                <IconButton edge="end" color="inherit" arial-label="menu">
                    <ShoppingCartIcon/>
                </IconButton>
            </Toolbar>
      </AppBar>
    )
}   

export default NavBar;