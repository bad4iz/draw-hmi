import React, {Component} from 'react';
import './ElemetnHMI.css';
import logo from '../logo.svg';
import {IconButton, Menu, MenuItem} from "react-mdl";
import messages from '../messages.json';

class Element extends Component {

    state = {
        x: this.props.stat.x || 0,
        y: this.props.stat.y || 0,
        id: this.props.stat.id  || 0,
        img: this.props.stat.img || logo
    };

    isChange = () => {
        if (this.props.cannotChange) {

        }
    };

    componentDidMount() {
        console.log(messages);
        // drawHMI(this);
    };

    componentDidUpdate() {
        //     this.addEventListener("mousedown", function (e) {
        //         // drawHMI(this, e);
        //     });
    };

    onMouseDownHandler = (event) => {
        this.props.onMouseDownHandler(this.refs.element, event);
    };

    render() {
        const {x, y, id} = this.state;
        const myStyle = {
            position: 'absolute',
            left: x,
            top: y
        };

        return (
            <div id={id} ref="element" className="Element" onMouseDown={this.onMouseDownHandler} style={myStyle}>
                {
                    !this.props.cannotChange &&
                    <div style={{right: 0, position: 'absolute', zIndex: 999}}>
                        <IconButton name="more_vert" id={id+ "demo-menu-lower-left"} />
                        <Menu target={id+ "demo-menu-lower-left"}>
                            <MenuItem>Some Action</MenuItem>
                            <MenuItem>Another Action</MenuItem>
                            <MenuItem disabled>Disabled Action</MenuItem>
                            <MenuItem>Yet Another Action</MenuItem>
                        </Menu>
                    </div>
                }
                <img  src={this.state.img} className="App-logo" alt="logo" />
            </div>
        );
    }
};

export default Element;
