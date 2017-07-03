// @flow weak

import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
class MenuElement extends Component {
    state = {
        anchorEl: undefined,
        open: false,
    };

    button = undefined;

    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <IconButton
                    style={{right: '-40px', top: '-40px', position: 'absolute', zIndex: 9}}
                    aria-owns="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                   <MoreVertIcon />
                </IconButton >
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onRequestClose={this.handleRequestClose}
                >
                    <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default MenuElement;