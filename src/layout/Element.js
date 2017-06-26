import React, { Component } from 'react';
import './ElemetnHMI.css';
import logo from '../logo.svg';

class Element extends Component {

    isChange = () => {
        if (this.props.isChange){

        }
    };
    componentDidMount() {
        // drawHMI(this);
    };
    componentDidUpdate() {
    //     this.addEventListener("mousedown", function (e) {
    //         // drawHMI(this, e);
    //     });
    }

    render() {
        const {x, y} = this.props.stat;
        const myStyle = {
            position: 'absolute',
            left: x,
            top: y,
            height: '50px',
            width: '50px',
        };

        return (
                <div className="ElementHMI" onMouseDown={this.props.onMouseDownHandler} style={myStyle}>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
        );
    }
}

export default Element;
