import React, { Component } from 'react';
import {Checkbox, Drawer, Navigation} from "react-mdl";

// material-ui
import Button from 'material-ui/Button';


class MainMenu extends Component {



    handleChange = (e) => {

        // console.log(e.target.checked);
        this.props.inHandleChange(e.target.checked);
    };

    render() {
        return (
            <Drawer title="Меню">

                <Checkbox label="разрешить изменения" ripple checked={!this.props.cannotChange} onChange={this.handleChange} />

                <Navigation>
                    <a href="#1">Link</a>
                    <a href="#2">Link</a>
                    <a href="#3">Link</a>
                    <a href="#4">Link</a>
                </Navigation>
            </Drawer>
        );
    }
}

export default MainMenu;
