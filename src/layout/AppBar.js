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
import Switches from "./Switches";

const styleSheet = createStyleSheet('ButtonAppBar', {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
});

function ButtonAppBar(props) {
    const {classes, allowEditingHandler, cannotChange} = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <IconButton color="default" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit" className={classes.flex}>Title</Typography>
                <Switches
                    addElemetnHandler={allowEditingHandler}
                    cannotChange={cannotChange}
                />
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ButtonAppBar);