import React, { Component } from 'react';
import {Button, Drawer, Navigation} from "react-mdl";

class MainMenu extends Component {

    addElement = () => {
        this.props.addElemetnHandler();
        console.log('add element')
    };
    render() {
        return (
            <Drawer title="Меню">
                    <Button onClick={this.addElement} raised colored>Добавить</Button>
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
