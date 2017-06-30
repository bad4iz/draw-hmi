// @flow

import React from 'react';


import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AddIcon from 'material-ui-icons/Add';


const styleSheet = createStyleSheet('ButtonAppBar', {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
});



function ButtonAppBar(props) {
    const classes = props.classes;
    const addElemetnHandler = props.addElemetnHandler;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit" className={classes.flex}>Title</Typography>
                    <Button fab color="contrast" onClick={addElemetnHandler} >
                        <AddIcon />
                    </Button>
                   

                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ButtonAppBar);